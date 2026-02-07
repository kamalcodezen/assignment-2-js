
/**    ================   problem 1 newPrice ==================        */

function newPrice(currentPrice, discount) {

    if (typeof currentPrice !== "number" || typeof discount !== "number" || (discount < 0 || discount > 100)) {
        return "Invalid";
    }
    let price = currentPrice * discount / 100;
    let newPrice = currentPrice - price;
    return newPrice.toFixed(3);
}

/**    ================   problem 1 newPrice  ==================        */


/**    ================   problem 2 validOtp ==================        */


function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }
    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    } else {
        return false;
    }
}

/**    ================   problem 2  validOtp ==================        */


/**  ============  problem 3 BCS Final Score Calculator ==================        */
function finalScore(omr) {

    if (typeof omr !== "object" || Array.isArray(omr) || omr.right + omr.wrong + omr.skip !== 100) {
        return "Invalid";
    }
    let rightAnswer = omr.right * +1;
    let wrongAnswer = omr.wrong * -0.5;
    let skipQuestion = omr.skip * 0;
    let score = rightAnswer + wrongAnswer + skipQuestion;
    return Math.round(score);
}


/**  ============  problem 3 BCS Final Score Calculator==================        */


/**  ============ problem 4  gonoVote count==================        */


function gonoVote(array) {

    if (Array.isArray(array) !== true) {
        return "Invalid";
    }
    
    let haCount = 0;
    let naCount = 0;
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
/**  ============  problem 4 gonoVote count==================        */


/**  ============  problem 5 analyzeText==================        */

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
/**  ============  problem 5 analyzeText==================        */