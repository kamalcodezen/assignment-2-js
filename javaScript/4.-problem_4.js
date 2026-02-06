
function gonoVote(array) {
    let haCount = [];
    let naCount = [];
    if (Array.isArray(array) !== true) {
        return "Invalid"
    }

    for (let i of array) {
        if (i == "ha") {
            haCount.push(i)
        }
        if (i == "na") {
            naCount.push(i);
        }
    }

    if (haCount.length > naCount.length) {
        return true;
    } else if (haCount.length == naCount.length) {
        return "equal";
    } else {
        return false;
    }

}
console.log(gonoVote(["ha", "na", "na"]));
