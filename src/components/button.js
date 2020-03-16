import * as React from 'react';
import { Loading, LoadingWhite } from './icons';
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if (!this.props.loadingState) {
            this.props.onClick(e);
        }
    }
    render() {
        return (React.createElement("div", { className: "button " + this.props.type, onClick: this.handleClick }, this.props.loadingState ?
            React.createElement("div", { className: "button-img" }, this.props.type === "button-primary" ? React.createElement(LoadingWhite, null) : React.createElement(Loading, null))
            :
                React.createElement("div", { className: "button-text" }, this.props.text)));
    }
}
export default Button;
