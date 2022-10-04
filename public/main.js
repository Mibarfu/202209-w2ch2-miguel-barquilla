import isSameValue from "/isSameValue.js";

console.log("1 === 1 >> " + isSameValue(1, 1));
console.log("NaN === NaN >> " + isSameValue(NaN, NaN));
console.log("0 === -0 >> " + isSameValue(0, -0));
console.log("-0 === 0 >> " + isSameValue(-0, 0));
console.log('1 === "1" >> ' + isSameValue(1, "1"));
console.log("true === false >> " + isSameValue(true, false));
console.log("false === false >> " + isSameValue(false, false));
console.log('"water" === "oil" >> ' + isSameValue("water", "oil"));
