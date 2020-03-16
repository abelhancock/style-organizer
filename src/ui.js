import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './components/button';
import StyleRow from './components/stylerow';
import { Illustration } from './components/icons';
import './ui.scss';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.countRef = (element) => {
            if (element)
                element.value = '5';
            this.textbox = element;
        };
        this.componentDidMount = () => {
            window.onmessage = (event) => {
                switch (event.data.pluginMessage.type) {
                    case "count":
                        this.setState({
                            data: event.data.pluginMessage.value,
                            refreshLoading: false,
                            initial: false
                        });
                        console.log(event.data.pluginMessage.value);
                        break;
                    case "select style":
                        this.setState({
                            selectedStyle: event.data.pluginMessage.id
                        });
                        break;
                    case "update":
                        this.setState({
                            data: event.data.pluginMessage.value,
                            refreshLoading: false
                        });
                }
            };
        };
        this.onScan = () => {
            this.setState({
                refreshLoading: true
            });
            parent.postMessage({ pluginMessage: { type: 'scan' } }, '*');
        };
        this.onCancel = () => {
            parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
        };
        this.state = {
            data: [],
            refreshLoading: false,
            selectedStyle: "",
            initial: true,
        };
    }
    render() {
        let tableRows = this.state.data.map((row, index) => React.createElement(StyleRow, { data: row, selectedStyle: this.state.selectedStyle, rowIndex: index, key: index }));
        return React.createElement("div", null, this.state.initial ?
            React.createElement("div", null,
                React.createElement("div", { className: "initial-illustration-wrapper" },
                    React.createElement(Illustration, null)),
                React.createElement("div", { className: "initial-button-wrapper" },
                    React.createElement(Button, { type: "button-primary", text: "Scan This Page", onClick: this.onScan, loadingState: this.state.refreshLoading })),
                React.createElement("div", { className: "initial-message" }, "This may take a while if the file is large"),
                React.createElement("div", { className: "initial-version" }, "Version alpha 1.0.0"))
            :
                React.createElement("div", null,
                    React.createElement("div", { className: "top-bar" },
                        React.createElement("div", { className: "table-title" },
                            React.createElement("div", { className: "table-title-item" }, "Appearance"),
                            React.createElement("div", { className: "table-title-item" }, "Style Name"),
                            React.createElement("div", { className: "table-title-item" }, "Usage"),
                            React.createElement("div", { className: "table-title-item" }, "Action"))),
                    React.createElement("div", { className: "table-container" },
                        tableRows,
                        tableRows.length === 0 ? React.createElement("div", { className: "empty-table" }, "No styles detected") : null),
                    React.createElement("div", { className: "bottom-bar" },
                        React.createElement("div", { className: "button-wrapper" },
                            React.createElement(Button, { type: "button-secondary", text: "Refresh", onClick: this.onScan, loadingState: this.state.refreshLoading })))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('react-page'));
