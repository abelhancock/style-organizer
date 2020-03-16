import * as React from 'react';
class Loading extends React.Component {
    render() {
        return (React.createElement("svg", { width: "80", height: "28", viewBox: "0 0 80 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("ellipse", { id: "e1", cx: "14", cy: "14", rx: "6", ry: "6", fill: "#18A0FB" },
                React.createElement("animate", { attributeType: "CSS", attributeName: "opacity", values: "0;.6;1;.6;0", dur: "1s", repeatCount: "indefinite" })),
            React.createElement("ellipse", { id: "e2", cx: "40", cy: "14", rx: "6", ry: "6", fill: "#18A0FB" },
                React.createElement("animate", { attributeType: "CSS", attributeName: "opacity", begin: ".2s", values: "0;.6;1;.6;0", dur: "1s", repeatCount: "indefinite" })),
            React.createElement("ellipse", { id: "e3", cx: "66", cy: "14", rx: "6", ry: "6", fill: "#18A0FB" },
                React.createElement("animate", { attributeType: "CSS", attributeName: "opacity", begin: ".4s", values: "0;.6;1;.6;0", dur: "1s", repeatCount: "indefinite" }))));
    }
}
class LoadingWhite extends React.Component {
    render() {
        return (React.createElement("svg", { width: "40", height: "16", viewBox: "0 0 80 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("ellipse", { id: "e1", cx: "14", cy: "14", rx: "6", ry: "6", fill: "#FFFFFF" },
                React.createElement("animate", { attributeType: "CSS", attributeName: "opacity", values: "0;.6;1;.6;0", dur: "1s", repeatCount: "indefinite" })),
            React.createElement("ellipse", { id: "e2", cx: "40", cy: "14", rx: "6", ry: "6", fill: "#FFFFFF" },
                React.createElement("animate", { attributeType: "CSS", attributeName: "opacity", begin: ".2s", values: "0;.6;1;.6;0", dur: "1s", repeatCount: "indefinite" })),
            React.createElement("ellipse", { id: "e3", cx: "66", cy: "14", rx: "6", ry: "6", fill: "#FFFFFF" },
                React.createElement("animate", { attributeType: "CSS", attributeName: "opacity", begin: ".4s", values: "0;.6;1;.6;0", dur: "1s", repeatCount: "indefinite" }))));
    }
}
export { Loading, LoadingWhite };
