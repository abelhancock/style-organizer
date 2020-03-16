import * as React from 'react';
import { colorToHex } from '../helpers';
import Button from '../components/button';
import { Selection, Perfect } from '../components/icons';
class StyleRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFix = (row, type, index) => {
            parent.postMessage({ pluginMessage: { type: type, data: row, index: index } }, '*');
        };
        this.handleSelection = (style, id) => {
            parent.postMessage({ pluginMessage: { type: 'select style', data: style.nodes, id: id } }, '*');
        };
    }
    render() {
        let fillRows = [];
        for (var i = 0; i < this.props.data.fills.length; i++) {
            let fill = this.props.data.fills[i];
            switch (fill.type) {
                case "SOLID":
                    let colorRGBA = "rgba(" + (fill.color.r * 255).toString() + "," + (fill.color.g * 255).toString() + "," + (fill.color.b * 255).toString() + "," + fill.opacity.toString();
                    fillRows.push(React.createElement("div", { className: "item-line", key: i },
                        React.createElement("div", { className: "color-box", style: { backgroundColor: colorRGBA } }),
                        React.createElement("div", { className: "hex-value" }, colorToHex(fill.color)),
                        React.createElement("div", { className: "opacity" }, (fill.opacity * 100).toFixed(2).replace(/\.0+$/, '') + "%")));
                    break;
                case "GRADIENT_LINEAR":
                case "GRADIENT_RADIAL":
                case "GRADIENT_ANGULAR":
                case "GRADIENT_DIAMOND":
                    fillRows.push(React.createElement("div", { className: "item-line", key: i }, fill.type.slice(9, 10) + fill.type.slice(10).toLowerCase()));
                    break;
                case "IMAGE":
                    fillRows.push(React.createElement("div", { className: "item-line", key: i }, "Image"));
                    break;
                default:
                    break;
            }
        }
        ;
        let styleRows = [];
        let styleId = Object.keys(this.props.data.styles);
        let unlinkedUsage = [];
        for (var i = 0; i < styleId.length; i++) {
            let currentStyle = this.props.data.styles[styleId[i]];
            let currentStyleId = styleId[i];
            if (styleId[i].slice(0, 8) === 'unlinked') {
                unlinkedUsage.push(React.createElement("div", { className: "item-line style-row", onClick: () => this.handleSelection(currentStyle, currentStyleId), key: i },
                    React.createElement("div", { className: "no-style" }, "No style"),
                    React.createElement("div", { className: "usage-unlinked", key: i },
                        currentStyle.count,
                        " unlinked"),
                    React.createElement("div", { className: this.props.selectedStyle === currentStyleId ? "selection selected" : "selection" },
                        React.createElement(Selection, null))));
            }
            else if (styleId[i].slice(0, 5) === "Team ") {
                styleRows.push(React.createElement("div", { className: "item-line style-row", onClick: (e) => this.handleSelection(currentStyle, currentStyleId), key: i },
                    React.createElement("div", { className: "tag tag-team" }, "Team"),
                    React.createElement("div", { className: "style-name" }, currentStyle.name),
                    React.createElement("div", { className: "style-usage", key: i },
                        currentStyle.count,
                        " used"),
                    React.createElement("div", { className: this.props.selectedStyle === currentStyleId ? "selection selected" : "selection" },
                        React.createElement(Selection, null))));
            }
            else if (styleId[i].slice(0, 5) === "Local") {
                styleRows.push(React.createElement("div", { className: "item-line style-row", onClick: (e) => this.handleSelection(currentStyle, currentStyleId), key: i },
                    React.createElement("div", { className: "tag tag-local" }, "Local"),
                    React.createElement("div", { className: "style-name" }, currentStyle.name),
                    React.createElement("div", { className: "style-usage", key: i },
                        currentStyle.count,
                        " used"),
                    React.createElement("div", { className: this.props.selectedStyle === currentStyleId ? "selection selected" : "selection" },
                        React.createElement(Selection, null))));
            }
        }
        styleRows.push(unlinkedUsage);
        let actionButton = [];
        if (unlinkedUsage.length === 0) {
            if (styleId.length === 1) {
                actionButton.push(React.createElement("div", { className: "perfect-wrapper", key: "1" },
                    React.createElement(Perfect, null)));
            }
            else {
                actionButton.push(React.createElement("div", { className: "button-wrapper", key: "1" },
                    React.createElement(Button, { type: "button-secondary", text: "Merge", onClick: () => this.handleFix(this.props.data, "merge link", this.props.rowIndex), loadingState: false })));
            }
        }
        else {
            if (styleId.length === 1) {
                actionButton.push(React.createElement("div", { className: "button-wrapper", key: "1" },
                    React.createElement(Button, { type: "button-primary", text: "Create Style", onClick: () => this.handleFix(this.props.data, "create", this.props.rowIndex), loadingState: false })));
            }
            else if (styleId.length === 2) {
                actionButton.push(React.createElement("div", { className: "button-wrapper", key: "1" },
                    React.createElement(Button, { type: "button-primary", text: "Link All", onClick: () => this.handleFix(this.props.data, "merge link", this.props.rowIndex), loadingState: false })));
            }
            else {
                actionButton.push(React.createElement("div", { className: "button-wrapper", key: "1" },
                    React.createElement(Button, { type: "button-primary", text: "Merge & Link", onClick: () => this.handleFix(this.props.data, "merge link", this.props.rowIndex), loadingState: false })));
            }
        }
        return (React.createElement("div", { className: "table-row" },
            React.createElement("div", { className: "table-row-item v-divider" }, fillRows),
            React.createElement("div", { className: "table-row-item v-divider" }, styleRows),
            React.createElement("div", { className: "table-row-item" }, actionButton)));
    }
}
export default StyleRow;
