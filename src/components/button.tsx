import * as React from 'react'
import {Loading, LoadingWhite} from './icons'

class Button extends React.Component <{type, text, onClick(e),loadingState}>{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        if (!this.props.loadingState){
            this.props.onClick(e);
        }    
    }
      
    render() {
        return(
            <div className={"button "+ this.props.type} onClick={this.handleClick}>
                {this.props.loadingState?
                    <div className="button-img">
                        {this.props.type === "button-primary"? <LoadingWhite/>:<Loading/>}
                    </div>
                :
                    <div className="button-text">
                        {this.props.text}
                    </div>
                }
            </div>
        )
    }
    
}

export default Button;