import * as React from 'react'
import {colorToHex} from '../helpers'
import Button from '../components/button'
import {Selection, Perfect} from '../components/icons'

interface AppState {
}

class StyleRow extends React.Component <{data, selectedStyle, rowIndex}, AppState>{
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
                    let colorRGBA = "rgba("+ (fill.color.r*255).toString()+","+(fill.color.g*255).toString()+","+(fill.color.b*255).toString()+","+fill.opacity.toString()
                    fillRows.push(                
                        <div className="item-line" key={i}>
                            <div className="color-box" style={{backgroundColor:colorRGBA}}></div>
                            <div className="hex-value">{colorToHex(fill.color)}</div>
                            <div className="opacity">{(fill.opacity*100).toFixed(2).replace(/\.0+$/,'')+"%"}</div>
                        </div>
                    )
                    break;

                case "GRADIENT_LINEAR":
                case "GRADIENT_RADIAL":
                case "GRADIENT_ANGULAR":
                case "GRADIENT_DIAMOND":
                    fillRows.push(
                        <div className="item-line" key={i}>
                            {fill.type.slice(9,10)+fill.type.slice(10).toLowerCase()}
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
                    <div className="item-line style-row" onClick={(e)=>this.handleSelection(currentStyle, currentStyleId)} key={i}>
                        <div className="tag tag-team">Team</div>
                        <div className="style-name">{currentStyle.name}</div>
                        <div className="style-usage" key={i}>{currentStyle.count} used</div>
                        <div className={this.props.selectedStyle === currentStyleId?"selection selected":"selection"}><Selection/></div>
                    </div>
                )
            }else if (styleId[i].slice(0,5) === "Local"){
                styleRows.push(
                    <div className="item-line style-row" onClick={(e)=>this.handleSelection(currentStyle, currentStyleId)} key={i}>
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
                            type = "button-primary"
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