/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__, { width: 610, height: 560 });
//traverse through all elements
let counter = 0;
let fillsUsage = [];
function isSameFill(fill1, fill2) {
    if (fill1.length != fill2.length) {
        return false;
    }
    let result = true;
    for (var i = 0; i < fill1.length; i++) {
        if (fill1[i].type != fill2[i].type) {
            result = false;
            break;
        }
        else if (fill1[i].type === "SOLID") {
            if (fill1[i].opacity != fill2[i].opacity || Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["colorToHex"])(fill1[i].color) != Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["colorToHex"])(fill2[i].color) || fill1[i].blendMode != fill2[i].blendMode) {
                result = false;
                break;
            }
        }
        else {
            if (JSON.stringify(fill1[i]) != JSON.stringify(fill2[i])) {
                result = false;
                break;
            }
        }
    }
    ;
    return result;
}
function arrangeFill(fill) {
    let arranged = [];
    for (let color of fill) {
        if (color.type === "IMAGE") {
            return [];
        }
        if (color.visible) {
            arranged.push(color);
        }
    }
    return arranged.sort();
}
function findFill(fillList, arranged) {
    let result = -1;
    for (var i = 0; i < fillList.length; i++) {
        if (isSameFill(fillList[i].fills, arranged)) {
            result = i;
            break;
        }
    }
    return result;
}
function getTeamStyle(key) {
    return __awaiter(this, void 0, void 0, function* () {
        let teamStyle = yield figma.importStyleByKeyAsync(key);
        return teamStyle;
    });
}
function traverse(node) {
    if (node.children) {
        node.children.forEach(child => {
            if (child.visible && node.type != "BOOLEAN_OPERATION") {
                traverse(child);
            }
            ;
        });
    }
    if (Array.isArray(node.fills) && node.fills) {
        let arranged = arrangeFill(node.fills);
        if (arranged.length != 0) {
            let fillIndex = findFill(fillsUsage, arranged);
            let styleId = node.fillStyleId.toString();
            var localStyle = figma.getStyleById(styleId);
            if (localStyle === null) {
                styleId = "unlinked" + JSON.stringify(arranged);
            }
            else if (localStyle.remote === true) {
                styleId = "Team " + styleId;
            }
            else {
                styleId = "Local" + styleId;
            }
            let styleName = "";
            if (localStyle != null) {
                styleName = localStyle.name;
            }
            if (fillIndex === -1) {
                fillsUsage.push({
                    fills: arranged,
                    styles: {
                        [styleId]: {
                            count: 1,
                            name: styleName,
                            nodes: ["fills  " + node.id]
                        }
                    },
                    total: 1
                });
            }
            else {
                if (fillsUsage[fillIndex].styles[styleId]) {
                    fillsUsage[fillIndex].styles[styleId].count++;
                    fillsUsage[fillIndex].styles[styleId].nodes.push("fills  " + node.id);
                    fillsUsage[fillIndex].total++;
                }
                else {
                    fillsUsage[fillIndex].styles[styleId] = {
                        count: 1,
                        name: styleName,
                        nodes: ["fills  " + node.id]
                    };
                    fillsUsage[fillIndex].total++;
                }
            }
        }
    }
    if (Array.isArray(node.strokes) && node.strokes) {
        let arranged = arrangeFill(node.strokes);
        if (arranged.length != 0) {
            let fillIndex = findFill(fillsUsage, arranged);
            let styleId = node.strokeStyleId.toString();
            var localStyle = figma.getStyleById(styleId);
            if (localStyle === null) {
                styleId = "unlinked" + JSON.stringify(arranged);
            }
            else if (localStyle.remote === true) {
                styleId = "Team " + styleId;
            }
            else {
                styleId = "Local" + styleId;
            }
            let styleName = "";
            if (localStyle != null) {
                styleName = localStyle.name;
            }
            if (fillIndex === -1) {
                fillsUsage.push({
                    fills: arranged,
                    styles: {
                        [styleId]: {
                            count: 1,
                            name: styleName,
                            nodes: ["strokes" + node.id]
                        }
                    },
                    total: 1
                });
            }
            else {
                if (fillsUsage[fillIndex].styles[styleId]) {
                    fillsUsage[fillIndex].styles[styleId].count++;
                    fillsUsage[fillIndex].styles[styleId].nodes.push("strokes" + node.id);
                    fillsUsage[fillIndex].total++;
                }
                else {
                    fillsUsage[fillIndex].styles[styleId] = {
                        count: 1,
                        name: styleName,
                        nodes: ["strokes" + node.id]
                    };
                    fillsUsage[fillIndex].total++;
                }
            }
        }
    }
    counter = counter + 1;
}
function getTargetStyleId(styles) {
    let styleId = Object.keys(styles);
    let targetStyleId = styleId[0];
    for (var i = 1; i < styleId.length; i++) {
        if (styleId[i].slice(0, 5) === "Team ") {
            if (targetStyleId.slice(0, 5) === "Local" || targetStyleId.slice(0, 8) === "unlinked") {
                targetStyleId = styleId[i];
            }
            else if (styles[styleId[i]].count > styles[targetStyleId].count) {
                targetStyleId = styleId[i];
            }
        }
        else if (styleId[i].slice(0, 5) === "Local") {
            if (targetStyleId.slice(0, 8) === "unlinked" || targetStyleId.slice(0, 5) === "Local" && styles[styleId[i]].count > styles[targetStyleId].count) {
                targetStyleId = styleId[i];
            }
        }
    }
    return targetStyleId;
}
figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "scan":
            counter = 0;
            fillsUsage = [];
            traverse(figma.currentPage);
            fillsUsage.sort((a, b) => (a.total < b.total) ? 1 : -1);
            figma.ui.postMessage({ type: "count", value: fillsUsage, localStyles: figma.getLocalPaintStyles() });
            break;
        case "merge link":
            let targetFills = msg.data.fills;
            let targetStyle = getTargetStyleId(msg.data.styles);
            let fakeOrganizedStyle = {
                fills: targetFills,
                styles: {
                    [targetStyle]: {
                        count: msg.data.total,
                        name: msg.data.styles[targetStyle].name,
                        nodes: []
                    }
                },
                total: msg.data.total
            };
            Object.keys(msg.data.styles).forEach((key) => {
                msg.data.styles[key].nodes.forEach((id) => {
                    fakeOrganizedStyle.styles[targetStyle].nodes.push(id);
                });
                if (key != targetStyle) {
                    msg.data.styles[key].nodes.forEach((id) => {
                        let selectNode = figma.getNodeById(id.slice(7));
                        if ("fills" in selectNode && id.slice(0, 7) === "fills  ") {
                            selectNode.fills = targetFills;
                            selectNode.fillStyleId = targetStyle.slice(5);
                        }
                        else if ("strokes" in selectNode && id.slice(0, 7) === "strokes") {
                            selectNode.strokes = targetFills;
                            selectNode.strokeStyleId = targetStyle.slice(5);
                        }
                    });
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
            });
            fillsUsage[msg.index] = fakeOrganizedStyle;
            figma.ui.postMessage({ type: "update", value: fillsUsage });
            figma.notify("All styles merged and linked.", { timeout: 2000 });
            break;
        case "create":
            figma.notify("this feature is not available currently.", { timeout: 2000 });
            break;
        case "select style":
            let selected = [];
            for (let id of msg.data) {
                selected.push(figma.getNodeById(id.slice(7)));
            }
            figma.currentPage.selection = selected;
            figma.viewport.scrollAndZoomIntoView(selected);
            figma.ui.postMessage({ type: "select style", id: msg.id });
            figma.notify(selected.length.toString() + " elements selected.", { timeout: 2000 });
            break;
        default:
            break;
    }
};


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: prepend, colorToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToHex", function() { return colorToHex; });
const prepend = (value, array) => {
    var newArray = array.slice();
    newArray.unshift(value);
    return newArray;
};
const colorToHex = (color) => {
    let red = Math.round(color.r * 255).toString(16);
    let green = Math.round(color.g * 255).toString(16);
    let blue = Math.round(color.b * 255).toString(16);
    return ("0".repeat(2 - red.length) + red + "0".repeat(2 - green.length) + green + "0".repeat(2 - blue.length) + blue).toUpperCase();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDdUM7QUFDdkMsd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDJEQUFVLG9CQUFvQiwyREFBVTtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw2RUFBNkU7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RSwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQSxzRUFBc0UsZ0JBQWdCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUNBQW1DO0FBQ3JFLDhFQUE4RSxnQkFBZ0I7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hSQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjb2xvclRvSGV4IH0gZnJvbSAnLi9oZWxwZXJzJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNjEwLCBoZWlnaHQ6IDU2MCB9KTtcbi8vdHJhdmVyc2UgdGhyb3VnaCBhbGwgZWxlbWVudHNcbmxldCBjb3VudGVyID0gMDtcbmxldCBmaWxsc1VzYWdlID0gW107XG5mdW5jdGlvbiBpc1NhbWVGaWxsKGZpbGwxLCBmaWxsMikge1xuICAgIGlmIChmaWxsMS5sZW5ndGggIT0gZmlsbDIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxsMS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZmlsbDFbaV0udHlwZSAhPSBmaWxsMltpXS50eXBlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpbGwxW2ldLnR5cGUgPT09IFwiU09MSURcIikge1xuICAgICAgICAgICAgaWYgKGZpbGwxW2ldLm9wYWNpdHkgIT0gZmlsbDJbaV0ub3BhY2l0eSB8fCBjb2xvclRvSGV4KGZpbGwxW2ldLmNvbG9yKSAhPSBjb2xvclRvSGV4KGZpbGwyW2ldLmNvbG9yKSB8fCBmaWxsMVtpXS5ibGVuZE1vZGUgIT0gZmlsbDJbaV0uYmxlbmRNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZmlsbDFbaV0pICE9IEpTT04uc3RyaW5naWZ5KGZpbGwyW2ldKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gYXJyYW5nZUZpbGwoZmlsbCkge1xuICAgIGxldCBhcnJhbmdlZCA9IFtdO1xuICAgIGZvciAobGV0IGNvbG9yIG9mIGZpbGwpIHtcbiAgICAgICAgaWYgKGNvbG9yLnR5cGUgPT09IFwiSU1BR0VcIikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvci52aXNpYmxlKSB7XG4gICAgICAgICAgICBhcnJhbmdlZC5wdXNoKGNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYW5nZWQuc29ydCgpO1xufVxuZnVuY3Rpb24gZmluZEZpbGwoZmlsbExpc3QsIGFycmFuZ2VkKSB7XG4gICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsbExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzU2FtZUZpbGwoZmlsbExpc3RbaV0uZmlsbHMsIGFycmFuZ2VkKSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRUZWFtU3R5bGUoa2V5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHRlYW1TdHlsZSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhrZXkpO1xuICAgICAgICByZXR1cm4gdGVhbVN0eWxlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudmlzaWJsZSAmJiBub2RlLnR5cGUgIT0gXCJCT09MRUFOX09QRVJBVElPTlwiKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5maWxscykgJiYgbm9kZS5maWxscykge1xuICAgICAgICBsZXQgYXJyYW5nZWQgPSBhcnJhbmdlRmlsbChub2RlLmZpbGxzKTtcbiAgICAgICAgaWYgKGFycmFuZ2VkLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBsZXQgZmlsbEluZGV4ID0gZmluZEZpbGwoZmlsbHNVc2FnZSwgYXJyYW5nZWQpO1xuICAgICAgICAgICAgbGV0IHN0eWxlSWQgPSBub2RlLmZpbGxTdHlsZUlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgbG9jYWxTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChzdHlsZUlkKTtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0eWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVJZCA9IFwidW5saW5rZWRcIiArIEpTT04uc3RyaW5naWZ5KGFycmFuZ2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxvY2FsU3R5bGUucmVtb3RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVJZCA9IFwiVGVhbSBcIiArIHN0eWxlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZUlkID0gXCJMb2NhbFwiICsgc3R5bGVJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdHlsZU5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3R5bGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlTmFtZSA9IGxvY2FsU3R5bGUubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWxsSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZmlsbHNVc2FnZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbHM6IGFycmFuZ2VkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0eWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlczogW1wiZmlsbHMgIFwiICsgbm9kZS5pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChmaWxsc1VzYWdlW2ZpbGxJbmRleF0uc3R5bGVzW3N0eWxlSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzVXNhZ2VbZmlsbEluZGV4XS5zdHlsZXNbc3R5bGVJZF0uY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNVc2FnZVtmaWxsSW5kZXhdLnN0eWxlc1tzdHlsZUlkXS5ub2Rlcy5wdXNoKFwiZmlsbHMgIFwiICsgbm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzVXNhZ2VbZmlsbEluZGV4XS50b3RhbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNVc2FnZVtmaWxsSW5kZXhdLnN0eWxlc1tzdHlsZUlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3R5bGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFtcImZpbGxzICBcIiArIG5vZGUuaWRdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzVXNhZ2VbZmlsbEluZGV4XS50b3RhbCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlLnN0cm9rZXMpICYmIG5vZGUuc3Ryb2tlcykge1xuICAgICAgICBsZXQgYXJyYW5nZWQgPSBhcnJhbmdlRmlsbChub2RlLnN0cm9rZXMpO1xuICAgICAgICBpZiAoYXJyYW5nZWQubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGxldCBmaWxsSW5kZXggPSBmaW5kRmlsbChmaWxsc1VzYWdlLCBhcnJhbmdlZCk7XG4gICAgICAgICAgICBsZXQgc3R5bGVJZCA9IG5vZGUuc3Ryb2tlU3R5bGVJZC50b1N0cmluZygpO1xuICAgICAgICAgICAgdmFyIGxvY2FsU3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoc3R5bGVJZCk7XG4gICAgICAgICAgICBpZiAobG9jYWxTdHlsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlSWQgPSBcInVubGlua2VkXCIgKyBKU09OLnN0cmluZ2lmeShhcnJhbmdlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsb2NhbFN0eWxlLnJlbW90ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlSWQgPSBcIlRlYW0gXCIgKyBzdHlsZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVJZCA9IFwiTG9jYWxcIiArIHN0eWxlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3R5bGVOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0eWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPSBsb2NhbFN0eWxlLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsbEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGZpbGxzVXNhZ2UucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzOiBhcnJhbmdlZCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVJZF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzdHlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFtcInN0cm9rZXNcIiArIG5vZGUuaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsbHNVc2FnZVtmaWxsSW5kZXhdLnN0eWxlc1tzdHlsZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1VzYWdlW2ZpbGxJbmRleF0uc3R5bGVzW3N0eWxlSWRdLmNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzVXNhZ2VbZmlsbEluZGV4XS5zdHlsZXNbc3R5bGVJZF0ubm9kZXMucHVzaChcInN0cm9rZXNcIiArIG5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1VzYWdlW2ZpbGxJbmRleF0udG90YWwrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxzVXNhZ2VbZmlsbEluZGV4XS5zdHlsZXNbc3R5bGVJZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHN0eWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbXCJzdHJva2VzXCIgKyBub2RlLmlkXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBmaWxsc1VzYWdlW2ZpbGxJbmRleF0udG90YWwrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0U3R5bGVJZChzdHlsZXMpIHtcbiAgICBsZXQgc3R5bGVJZCA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gICAgbGV0IHRhcmdldFN0eWxlSWQgPSBzdHlsZUlkWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgc3R5bGVJZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3R5bGVJZFtpXS5zbGljZSgwLCA1KSA9PT0gXCJUZWFtIFwiKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0U3R5bGVJZC5zbGljZSgwLCA1KSA9PT0gXCJMb2NhbFwiIHx8IHRhcmdldFN0eWxlSWQuc2xpY2UoMCwgOCkgPT09IFwidW5saW5rZWRcIikge1xuICAgICAgICAgICAgICAgIHRhcmdldFN0eWxlSWQgPSBzdHlsZUlkW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3R5bGVzW3N0eWxlSWRbaV1dLmNvdW50ID4gc3R5bGVzW3RhcmdldFN0eWxlSWRdLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U3R5bGVJZCA9IHN0eWxlSWRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3R5bGVJZFtpXS5zbGljZSgwLCA1KSA9PT0gXCJMb2NhbFwiKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0U3R5bGVJZC5zbGljZSgwLCA4KSA9PT0gXCJ1bmxpbmtlZFwiIHx8IHRhcmdldFN0eWxlSWQuc2xpY2UoMCwgNSkgPT09IFwiTG9jYWxcIiAmJiBzdHlsZXNbc3R5bGVJZFtpXV0uY291bnQgPiBzdHlsZXNbdGFyZ2V0U3R5bGVJZF0uY291bnQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTdHlsZUlkID0gc3R5bGVJZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0U3R5bGVJZDtcbn1cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwic2NhblwiOlxuICAgICAgICAgICAgY291bnRlciA9IDA7XG4gICAgICAgICAgICBmaWxsc1VzYWdlID0gW107XG4gICAgICAgICAgICB0cmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZSk7XG4gICAgICAgICAgICBmaWxsc1VzYWdlLnNvcnQoKGEsIGIpID0+IChhLnRvdGFsIDwgYi50b3RhbCkgPyAxIDogLTEpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImNvdW50XCIsIHZhbHVlOiBmaWxsc1VzYWdlLCBsb2NhbFN0eWxlczogZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZXJnZSBsaW5rXCI6XG4gICAgICAgICAgICBsZXQgdGFyZ2V0RmlsbHMgPSBtc2cuZGF0YS5maWxscztcbiAgICAgICAgICAgIGxldCB0YXJnZXRTdHlsZSA9IGdldFRhcmdldFN0eWxlSWQobXNnLmRhdGEuc3R5bGVzKTtcbiAgICAgICAgICAgIGxldCBmYWtlT3JnYW5pemVkU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZmlsbHM6IHRhcmdldEZpbGxzLFxuICAgICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgICAgICBbdGFyZ2V0U3R5bGVdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbXNnLmRhdGEudG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtc2cuZGF0YS5zdHlsZXNbdGFyZ2V0U3R5bGVdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlczogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG90YWw6IG1zZy5kYXRhLnRvdGFsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobXNnLmRhdGEuc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBtc2cuZGF0YS5zdHlsZXNba2V5XS5ub2Rlcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmYWtlT3JnYW5pemVkU3R5bGUuc3R5bGVzW3RhcmdldFN0eWxlXS5ub2Rlcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9IHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1zZy5kYXRhLnN0eWxlc1trZXldLm5vZGVzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0Tm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGlkLnNsaWNlKDcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZpbGxzXCIgaW4gc2VsZWN0Tm9kZSAmJiBpZC5zbGljZSgwLCA3KSA9PT0gXCJmaWxscyAgXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3ROb2RlLmZpbGxzID0gdGFyZ2V0RmlsbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0Tm9kZS5maWxsU3R5bGVJZCA9IHRhcmdldFN0eWxlLnNsaWNlKDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoXCJzdHJva2VzXCIgaW4gc2VsZWN0Tm9kZSAmJiBpZC5zbGljZSgwLCA3KSA9PT0gXCJzdHJva2VzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3ROb2RlLnN0cm9rZXMgPSB0YXJnZXRGaWxscztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3ROb2RlLnN0cm9rZVN0eWxlSWQgPSB0YXJnZXRTdHlsZS5zbGljZSg1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBub2RlID0gaW5zdGFuY2VbMF1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChcImZpbGxzXCIgaW4gaW5zdGFuY2VbMF0gJiYgaW5zdGFuY2VbMV0gPT09IFwiZmlsbGVzICBcIil7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGluc3RhbmNlWzBdLmZpbGxTdHlsZUlkICE9IHRhcmdldFN0eWxlKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaW5zdGFuY2VbMF0uZmlsbHMgPSB0YXJnZXRGaWxsc1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpbnN0YW5jZVswXS5maWxsU3R5bGVJZCA9IHRhcmdldFN0eWxlLnNsaWNlKDUpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfWVsc2UgaWYgKFwic3Ryb2tlc1wiIGluIGluc3RhbmNlWzBdICYmIGluc3RhbmNlWzFdID09PSBcInN0cm9rZXNcIil7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGluc3RhbmNlWzBdLnN0cm9rZVN0eWxlSWQgIT0gdGFyZ2V0U3R5bGUpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpbnN0YW5jZVswXS5zdHJva2VzID0gdGFyZ2V0RmlsbHNcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaW5zdGFuY2VbMF0uc3Ryb2tlU3R5bGVJZCA9IHRhcmdldFN0eWxlLnNsaWNlKDUpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmlsbHNVc2FnZVttc2cuaW5kZXhdID0gZmFrZU9yZ2FuaXplZFN0eWxlO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInVwZGF0ZVwiLCB2YWx1ZTogZmlsbHNVc2FnZSB9KTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkFsbCBzdHlsZXMgbWVyZ2VkIGFuZCBsaW5rZWQuXCIsIHsgdGltZW91dDogMjAwMCB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY3JlYXRlXCI6XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJ0aGlzIGZlYXR1cmUgaXMgbm90IGF2YWlsYWJsZSBjdXJyZW50bHkuXCIsIHsgdGltZW91dDogMjAwMCB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2VsZWN0IHN0eWxlXCI6XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGlkIG9mIG1zZy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaChmaWdtYS5nZXROb2RlQnlJZChpZC5zbGljZSg3KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoc2VsZWN0ZWQpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInNlbGVjdCBzdHlsZVwiLCBpZDogbXNnLmlkIH0pO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KHNlbGVjdGVkLmxlbmd0aC50b1N0cmluZygpICsgXCIgZWxlbWVudHMgc2VsZWN0ZWQuXCIsIHsgdGltZW91dDogMjAwMCB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBwcmVwZW5kID0gKHZhbHVlLCBhcnJheSkgPT4ge1xuICAgIHZhciBuZXdBcnJheSA9IGFycmF5LnNsaWNlKCk7XG4gICAgbmV3QXJyYXkudW5zaGlmdCh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ld0FycmF5O1xufTtcbmV4cG9ydCBjb25zdCBjb2xvclRvSGV4ID0gKGNvbG9yKSA9PiB7XG4gICAgbGV0IHJlZCA9IE1hdGgucm91bmQoY29sb3IuciAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgIGxldCBncmVlbiA9IE1hdGgucm91bmQoY29sb3IuZyAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgIGxldCBibHVlID0gTWF0aC5yb3VuZChjb2xvci5iICogMjU1KS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIChcIjBcIi5yZXBlYXQoMiAtIHJlZC5sZW5ndGgpICsgcmVkICsgXCIwXCIucmVwZWF0KDIgLSBncmVlbi5sZW5ndGgpICsgZ3JlZW4gKyBcIjBcIi5yZXBlYXQoMiAtIGJsdWUubGVuZ3RoKSArIGJsdWUpLnRvVXBwZXJDYXNlKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==