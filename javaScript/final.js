
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

/**    ================   problem  validOtp ==================        */


/**  ============   BCS Final Score Calculator ==================        */

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

/**  ============   BCS Final Score Calculator==================        */