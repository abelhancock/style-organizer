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