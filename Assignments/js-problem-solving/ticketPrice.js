function calculateTicketPrice (age, showTime) {
    let standardPrice = 12;
    let discount  = 0;

    if (showTime < 17) {
        discount += 0.20;
    }

    if (age > 60) {
        discount += 0.30;
    } else if (age < 12) {
        discount += 0.40;
    }

    let finalPrice = standardPrice * (1 - discount);
    return `Final Ticket Price: $${finalPrice.toFixed(2)}`;
}

// Example Usage:
console.log(calculateTicketPrice(65, 14)); // Senior + Matinee → $6.00
console.log(calculateTicketPrice(10, 16)); // Child + Matinee → $4.80
console.log(calculateTicketPrice(30, 18)); // Standard → $12.00
console.log(calculateTicketPrice(8, 19));  // Child only → $7.20
console.log(calculateTicketPrice(70, 20)); // Senior only → $8.40