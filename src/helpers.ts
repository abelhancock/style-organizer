export const prepend = (value, array)=> {
    var newArray = array.slice();
    newArray.unshift(value);
    return newArray;
}
export const colorToHex = (color)=> {
    let red = Math.round(color.r*255).toString(16);
    let green = Math.round(color.g*255).toString(16);
    let blue = Math.round(color.b*255).toString(16);
    return ("0".repeat(2 - red.length)+red+"0".repeat(2 - green.length)+green+"0".repeat(2 - blue.length)+blue).toUpperCase()
}

export const getMatrix = (paras)=> {
    let newParas = [
        paras[0][0].toFixed(2),
        paras[1][0].toFixed(2),
        paras[0][1].toFixed(2),
        paras[1][1].toFixed(2),
        paras[0][2].toFixed(2),
        paras[1][2].toFixed(2)
    ]

    return "matrix("+newParas.join(",")+")"
}