
/**    ================   problem 1  ==================        */

function newPrice(currentPrice, discount) {

    if (typeof currentPrice !== "number" || typeof discount !== "number" || (discount < 0 || discount > 100)) {
        return "Invalid";
    }
    let price = currentPrice * discount / 100;
    let newPrice = currentPrice - price;
    return newPrice.toFixed(3);
}

/**    ================   problem 1  ==================        */