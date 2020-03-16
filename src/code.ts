import {colorToHex} from './helpers'

figma.showUI(__html__, {width:610, height:560})

//traverse through all elements
let counter = 0;
let fillsUsage = [];

function isSameFill(fill1, fill2){
    if (fill1.length != fill2.length){return false}
    let result = true
    for (var i = 0; i < fill1.length; i++){
        if (fill1[i].type != fill2[i].type){
            result = false;
            break;
        }else if (fill1[i].type === "SOLID"){
            if (fill1[i].opacity != fill2[i].opacity || colorToHex(fill1[i].color) != colorToHex(fill2[i].color) || fill1[i].blendMode != fill2[i].blendMode){
                result = false;
                break;
            }    
        }else{
            if (JSON.stringify(fill1[i])!=JSON.stringify(fill2[i])){
                result = false;
                break;
            }
        }
    };
    return result;
}

function arrangeFill(fill){
    let arranged = [];
    for (let color of fill){
        if (color.type === "IMAGE"){return []}
        if (color.visible){
            arranged.push(color);
        }
    }
    return arranged.sort();
}
function findFill(fillList, arranged){
    let result = -1;

    for (var i = 0; i < fillList.length; i++){
         if (isSameFill(fillList[i].fills, arranged)){
            result = i;
            break;
        }
    }
    return result;

}

async function getTeamStyle(key){
    let teamStyle = await figma.importStyleByKeyAsync(key);
    return teamStyle;
}


function traverse(node) {
    if (node.children) {
        node.children.forEach(child => {
            if (child.visible && node.type != "BOOLEAN_OPERATION"){traverse(child)};
        });
    }
    if (Array.isArray(node.fills) && node.fills){
        let arranged = arrangeFill(node.fills)
        if (arranged.length != 0){
            let fillIndex = findFill(fillsUsage, arranged)
            let styleId = node.fillStyleId.toString();
            var localStyle = figma.getStyleById(styleId);
            if (localStyle===null){
                styleId = "unlinked" + JSON.stringify(arranged)
            }else if (localStyle.remote===true){
                styleId="Team "+styleId
            }else{
                styleId="Local"+styleId
            }
            let styleName = "";
            if (localStyle != null){styleName = localStyle.name}
            if (fillIndex===-1){
                fillsUsage.push(
                    {
                        fills:arranged, 
                        styles:{
                            [styleId]: {
                                count: 1,
                                name: styleName,
                                nodes:["fills  "+node.id]
                            }
                        },
                        total:1                        
                    }
                );
            }else{
                if (fillsUsage[fillIndex].styles[styleId]){
                    fillsUsage[fillIndex].styles[styleId].count++;
                    fillsUsage[fillIndex].styles[styleId].nodes.push("fills  "+node.id);
                    fillsUsage[fillIndex].total ++;
                }else{
                    fillsUsage[fillIndex].styles[styleId] = {
                        count:1,
                        name: styleName,
                        nodes: ["fills  "+node.id]
                    }
                    fillsUsage[fillIndex].total ++;
                }
            }
        }
    }

    if (Array.isArray(node.strokes) && node.strokes){
        let arranged = arrangeFill(node.strokes)
        if (arranged.length != 0){
            let fillIndex = findFill(fillsUsage, arranged)
            let styleId = node.strokeStyleId.toString();
            var localStyle = figma.getStyleById(styleId);
            if (localStyle===null){
                styleId = "unlinked" + JSON.stringify(arranged)
            }else if (localStyle.remote===true){
                styleId="Team "+styleId
            }else{
                styleId="Local"+styleId
            }
            let styleName = "";
            if (localStyle != null){styleName = localStyle.name}
            if (fillIndex===-1){
                fillsUsage.push(
                    {
                        fills:arranged, 
                        styles:{
                            [styleId]: {
                                count: 1,
                                name: styleName,
                                nodes:["strokes"+node.id]
                            }
                        },
                        total:1                        
                    }
                );
            }else{
                if (fillsUsage[fillIndex].styles[styleId]){
                    fillsUsage[fillIndex].styles[styleId].count++;
                    fillsUsage[fillIndex].styles[styleId].nodes.push("strokes"+node.id);
                    fillsUsage[fillIndex].total ++;
                }else{
                    fillsUsage[fillIndex].styles[styleId] = {
                        count:1,
                        name: styleName,
                        nodes: ["strokes"+node.id]
                    }
                    fillsUsage[fillIndex].total ++;
                }
            }
        }
    }

    counter = counter + 1;
}

function getTargetStyleId(styles){
    let styleId = Object.keys(styles)
    let targetStyleId = styleId[0]
    for (var i = 1; i < styleId.length; i++){
        if (styleId[i].slice(0,5) === "Team "){
            if (targetStyleId.slice(0,5) === "Local" || targetStyleId.slice(0,8) === "unlinked"){
                targetStyleId = styleId[i];
            }else if(styles[styleId[i]].count > styles[targetStyleId].count){
                targetStyleId = styleId[i];
            }
        }else if (styleId[i].slice(0,5) === "Local"){
            if (targetStyleId.slice(0,8) === "unlinked" || targetStyleId.slice(0,5) === "Local" && styles[styleId[i]].count > styles[targetStyleId].count){
                targetStyleId = styleId[i];
            }
        } 
    }
    return targetStyleId
}

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "scan":
            counter = 0;
            fillsUsage = [];
            traverse(figma.currentPage)        
            fillsUsage.sort((a, b) => (a.total < b.total) ? 1 : -1);        
            figma.ui.postMessage({type:"count", value: fillsUsage, localStyles: figma.getLocalPaintStyles()});
            break;
        case "merge link":
            let targetFills = msg.data.fills;
            let targetStyle = getTargetStyleId(msg.data.styles);
            let fakeOrganizedStyle ={
                fills:targetFills, 
                styles:{
                    [targetStyle]: {
                        count: msg.data.total,
                        name: msg.data.styles[targetStyle].name,
                        nodes:[]
                    }
                },
                total:msg.data.total                        
            }

            Object.keys(msg.data.styles).forEach((key)=>{
                msg.data.styles[key].nodes.forEach((id)=>{
                    fakeOrganizedStyle.styles[targetStyle].nodes.push(id);
                })
                if (key!=targetStyle){                    
                    msg.data.styles[key].nodes.forEach((id)=>{
                        let selectNode = figma.getNodeById(id.slice(7))
                        if ("fills" in selectNode && id.slice(0,7) === "fills  "){
                            selectNode.fills = targetFills
                            selectNode.fillStyleId = targetStyle.slice(5)
                        }else if ("strokes" in selectNode && id.slice(0,7) === "strokes"){
                            selectNode.strokes = targetFills
                            selectNode.strokeStyleId = targetStyle.slice(5)
                        }
                    })

                    // instances.forEach((instance)=>{
                    //     let node = instance[0]
                    //     if ("fills" in instance[0] && instance[1] === "filles  "){
                    //         if (instance[0].fillStyleId != targetStyle){
                    //             instance[0].fills = targetFills
                    //             instance[0].fillStyleId = targetStyle.slice(5)
                    //         }
                    //     }else if ("strokes" in instance[0] && instance[1] === "strokes"){
                    //         if (instance[0].strokeStyleId != targetStyle){
                    //             instance[0].strokes = targetFills
                    //             instance[0].strokeStyleId = targetStyle.slice(5)
                    //         }
                    //     }
                    // })
                }
            })
            fillsUsage[msg.index] = fakeOrganizedStyle;
            figma.ui.postMessage({type:"update", value: fillsUsage});
            figma.notify("All styles merged and linked.", {timeout: 2000})
            break;
        case "create":
            figma.notify("this feature is not available currently.", {timeout: 2000})
            break;
        case "select style":
            let selected = []
            for (let id of msg.data){
                selected.push(figma.getNodeById(id.slice(7)))
            }
            figma.currentPage.selection = selected;
            figma.viewport.scrollAndZoomIntoView(selected);
            figma.ui.postMessage({type:"select style", id: msg.id});
            figma.notify(selected.length.toString()+" elements selected.", {timeout: 2000})
            break;
        default:
            break;
    }

}