
function finalScore(omr) {

    if (typeof omr !== "object" || omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid";
    }
    let rightAnswer = omr.right * +1;
    let wrongAnswer = omr.wrong * -0.5;
    let skipQuestion = omr.skip * 0;
    let score = rightAnswer + wrongAnswer + skipQuestion;
    return Math.round(score);
}


console.log(finalScore({ right: 67, wrong: 23, skip: 10 }))
