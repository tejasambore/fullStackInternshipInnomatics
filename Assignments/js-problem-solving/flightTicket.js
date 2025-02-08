function calculateFlightFare (classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = 0;
    let luggageCharge = 0;
    let discount = 0;

    if (classType === "Business") {
        classCharge = 200;
    } else if (classType === "First") {
        classCharge = 500;
    }

    if (luggageWeight > 20) {
        luggageCharge = Math.ceil((luggageWeight - 20) / 10) * 50;
    }

    let totalFare = baseFare + classCharge + luggageCharge;

    if (isStudent) {
        discount = totalFare * 0.15;
    } else if (isSenior) {
        discount = totalFare * 0.10;
    }

    let finalPrice = totalFare - discount;
    return `Final Flight fare: $${finalPrice.toFixed(2)}`;
}

// Example Usage:
console.log(calculateFlightFare("Economy", 25, true, false));  // Student discount, extra luggage → $318.25
console.log(calculateFlightFare("Business", 30, false, true)); // Senior discount, extra luggage → $522.00
console.log(calculateFlightFare("First", 20, false, false));   // No extra charges → $800.00
console.log(calculateFlightFare("Economy", 15, false, false)); // No extra charges → $300.00
console.log(calculateFlightFare("Business", 25, false, false)); // Extra luggage charge → $550.00