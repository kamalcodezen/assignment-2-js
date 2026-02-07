
function gonoVote(array) {
    let haCount = 0;
    let naCount = 0;
    if (Array.isArray(array) !== true) {
        return "Invalid";
    }

    for (let i of array) {
        if (i == "ha") {
            haCount++;
        }
        if (i == "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}
console.log(gonoVote(["ha", "na", "na"]));
