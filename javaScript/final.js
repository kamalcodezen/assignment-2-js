
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