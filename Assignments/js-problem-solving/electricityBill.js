function calculateElectricityBill (units, timeOfDay) {
    let  rate;

    if (units < 100) {
        rate = 5;
    } else if (units >= 100 && units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.10;
    }

    let totalBIll = units * rate;
    return `Total Electricity BIll: $${totalBIll.toFixed(2)}`;
}

// Example Usage:
console.log(calculateElectricityBill(50, 10));  // Normal hours → 50 * $5 = $250
console.log(calculateElectricityBill(150, 21)); // Peak hours → 150 * ($4 + 10%) = $660
console.log(calculateElectricityBill(350, 7));  // Peak hours → 350 * ($3 + 10%) = $1155
console.log(calculateElectricityBill(200, 14)); // Normal hours → 200 * $4 = $800
console.log(calculateElectricityBill(80, 22));  // Peak hours → 80 * ($5 + 10%) = $440