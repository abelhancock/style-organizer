import * as React from 'react'
import {colorToHex, getMatrix} from '../helpers'
import Button from '../components/button'
import {Selection, Perfect, Chessbox} from '../components/icons'

interface AppState {
}

class StyleRow extends React.Component <{data, selectedStyle, rowIndex, mergeSelection}, AppState>{
    constructor(props) {
        super(props);
    }

    handleFix = (row, type, index) => {
        parent.postMessage({ pluginMessage: { type: type, data:row, index:index} }, '*')
    }

    handleSelection = (style, id) => {
         parent.postMessage({ pluginMessage: { type: 'select style', data:style.nodes, id:id} }, '*')
    }
    
    render() {
        let fillRows = []
        for (var i = 0; i < this.props.data.fills.length; i++){
            let fill = this.props.data.fills[i];
            switch (fill.type) {
                case "SOLID":
                    let colorRGBA = "rgba("+ (fill.color.r*255).toString()+","+(fill.color.g*255).toString()+","+(fill.color.b*255).toString()+","+fill.opacity.toString()+")"
                    let colorOpaque = "rgba("+ (fill.color.r*255).toString()+","+(fill.color.g*255).toString()+","+(fill.color.b*255).toString()+",1)"
                    fillRows.push(                
                        <div className="item-line" key={i}>
                            <div className="color-box">
                                <div className="color-full"><Chessbox/></div>
                                <div className="color-opaque" style={{backgroundColor:colorOpaque}}></div>
                                <div className="color-rgba" style={{backgroundColor:colorRGBA}}></div>
                            </div>
                            <div className="hex-value">{colorToHex(fill.color)}</div>
                            <div className="opacity">{(fill.opacity*100).toFixed(2).replace(/\.0+$/,'')+"%"}</div>
                        </div>
                    )
                    break;

                case "GRADIENT_LINEAR":
                case "GRADIENT_RADIAL":
                    let gradientStops = []
                    let colorGradient = null
                    fill.gradientStops.forEach((stop, index)=>{
                        gradientStops.push(<stop key = {index} offset={(stop.position * 100).toString()+"%"} stopColor={"rgba("+(stop.color.r*255).toString()+","+(stop.color.g*255).toString()+","+(stop.color.b*255).toString()+","+stop.color.a.toString()+")"}/>)
                    })
                    if (fill.type === "GRADIENT_LINEAR"){
                        colorGradient = <linearGradient id={"fill"+this.props.rowIndex.toString()+i.toString()} gradientTransform={getMatrix(fill.gradientTransform)}>{gradientStops}</linearGradient>
                    }else{
                        colorGradient = <radialGradient id={"fill"+this.props.rowIndex.toString()+i.toString()} gradientTransform={getMatrix(fill.gradientTransform)}>{gradientStops}</radialGradient>
                    }
                    fillRows.push(
                        <div className="item-line" key={i}>
                            <div className="color-box">
                                <div className="color-full"><Chessbox/></div>
                                <div className="color-full">
                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        {colorGradient}
                                        <rect x="0" y="0" width="16" height="16" fill={"url(#fill"+this.props.rowIndex.toString()+i.toString()+")"} transform="scale(1 -1) translate(0 -16)"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="hex-value">{fill.type.slice(9,10)+fill.type.slice(10).toLowerCase()}</div>
                            <div className="opacity">{(fill.opacity*100).toFixed(2).replace(/\.0+$/,'')+"%"}</div>
                        </div>
                    )
                    break;
                case "GRADIENT_ANGULAR":
                case "GRADIENT_DIAMOND":
                    fillRows.push(
                        <div className="item-line" key={i}>
                            <div className="color-box">
                                <div className="color-full"><Chessbox/></div>
                            </div>
                            <div className="hex-value">{fill.type.slice(9,10)+fill.type.slice(10).toLowerCase()}</div>
                            <div className="opacity">{(fill.opacity*100).toFixed(2).replace(/\.0+$/,'')+"%"}</div>
                        </div>
                    )
                    break;
                
                case "IMAGE":
                    fillRows.push(
                        <div className="item-line" key={i}>
                            Image
                        </div>    
                    )
                    break;
                default:
                    break;
            }
        };

        let styleRows = []
        let styleId = Object.keys(this.props.data.styles)
        let unlinkedUsage = []
        for (var i = 0; i < styleId.length; i++){
            let currentStyle = this.props.data.styles[styleId[i]];
            let currentStyleId = styleId[i];
            if (styleId[i].slice(0,8) === 'unlinked'){
                unlinkedUsage.push(
                    <div className="item-line style-row" onClick={()=>this.handleSelection(currentStyle, currentStyleId)} key={i}>
                        <div className="no-style">No style</div>
                        <div className="usage-unlinked" key={i}>{currentStyle.count} unlinked</div>
                        <div className={this.props.selectedStyle === currentStyleId?"selection selected":"selection"}><Selection/></div>
                    </div>
                )
            }else if (styleId[i].slice(0,5) === "Team "){ 
                styleRows.push(
                    <div className={styleId[i] === this.props.mergeSelection && styleId.length != 1?"item-line style-row merge-selection":"item-line style-row"} onClick={(e)=>this.handleSelection(currentStyle, currentStyleId)} key={i}>
                        <div className="tag tag-team">Team</div>
                        <div className="style-name">{currentStyle.name}</div>
                        <div className="style-usage" key={i}>{currentStyle.count} used</div>
                        <div className={this.props.selectedStyle === currentStyleId?"selection selected":"selection"}><Selection/></div>
                    </div>
                )
            }else if (styleId[i].slice(0,5) === "Local"){
                styleRows.push(
                    <div className={styleId[i] === this.props.mergeSelection && styleId.length != 1?"item-line style-row merge-selection":"item-line style-row"} onClick={(e)=>this.handleSelection(currentStyle, currentStyleId)} key={i}>
                        <div className="tag tag-local">Local</div>
                        <div className="style-name">{currentStyle.name}</div>
                        <div className="style-usage" key={i}>{currentStyle.count} used</div>
                        <div className={this.props.selectedStyle === currentStyleId?"selection selected":"selection"}><Selection/></div>
                    </div>
                )
            }
        }

        styleRows.push(unlinkedUsage);

        let actionButton = []

        if (unlinkedUsage.length === 0){
            if (styleId.length === 1){
                actionButton.push(<div className="perfect-wrapper" key="1"><Perfect/></div>)
            }else{
                actionButton.push(
                    <div className="button-wrapper" key="1">
                        <Button
                            type = "button-secondary"
                            text = "Merge"
                            onClick = {()=>this.handleFix(this.props.data, "merge link", this.props.rowIndex)}
                            loadingState = {false}      
                        />
                    </div>
                )
            }
        }else{
            if (styleId.length === 1){
                actionButton.push(
                    <div className="button-wrapper" key="1">
                        <Button
                            type = "button-secondary"
                            text = "Create Style"
                            onClick = {()=>this.handleFix(this.props.data, "create", this.props.rowIndex)}
                            loadingState = {false}      
                        />
                    </div>
                )
            }else if (styleId.length === 2){
                actionButton.push(
                    <div className="button-wrapper" key="1">
                        <Button
                            type = "button-primary"
                            text = "Link All"
                            onClick = {()=>this.handleFix(this.props.data, "merge link", this.props.rowIndex)}
                            loadingState = {false}      
                        />
                    </div>
                )
            }else{
                actionButton.push(
                    <div className="button-wrapper" key="1">
                        <Button
                            type = "button-primary"
                            text = "Merge & Link"
                            onClick = {()=>this.handleFix(this.props.data, "merge link", this.props.rowIndex)}
                            loadingState = {false}      
                        />
                    </div>
                )
            }

        } 

        return(
            <div className="table-row">
                <div className="table-row-item v-divider">
                    {fillRows}
                </div>
                <div className="table-row-item v-divider">
                    {styleRows}
                </div>
                <div className="table-row-item">
                    {actionButton}
                </div>
            </div>
        )
    }
    
}

export default StyleRow;