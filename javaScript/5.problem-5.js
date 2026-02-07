
function analyzeText(str) {

    if (typeof str !== "string" || str.trim().length === 0) {
        return "Invalid";
    }

    let strArray = str.split(" ");

    let countArray = strArray[0];
    for (let i of strArray) {
        if (i.length > countArray.length) {
            countArray = i;
        }
    }

    let textCount = strArray.join("").length;

    return {
        longwords: countArray,
        token: textCount
    }

}

console.log(analyzeText(""))
