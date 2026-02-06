
function finalScore(omr) {

    if (typeof omr !== "object" || omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid";
    }
    let score = omr.right * 1 + omr.wrong * -0.5 + omr.skip * 0;
    return Math.round(score);
}


console.log(finalScore({ right: 30, wrong: 30, skip: 40 }))
