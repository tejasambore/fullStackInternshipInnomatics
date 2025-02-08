function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingCharge = 0;

    // Apply discount
    if (orderAmount > 1000) {
        discount = 0.20; // 20% discount
    } else if (orderAmount >= 500 && orderAmount <= 1000) {
        discount = 0.10; // 10% discount
    }

    let discountedAmount = orderAmount - (orderAmount * discount);

    // Apply shipping charges
    if (discountedAmount < 50) {
        shippingCharge = 10; // Express shipping charge for orders below $50
    }

    let finalAmount = discountedAmount + shippingCharge;
    return `Final payable amount: $${finalAmount.toFixed(2)}`;
}

// Example Usage:
// Amount Rs. 1200
console.log("Example 1: For the order Amount - Rs.1200 \n", calculateFinalAmount(1200));    // Final payable amount: $960.00

// Amount Rs. 750
console.log("Example 2: For the order Amount - Rs. 750 \n",calculateFinalAmount(750));      // Final payable amount: $675.00

 // Amount Rs. 300
console.log("Example 3: For the order Amount - Rs. 300 \n",calculateFinalAmount(300));      // Final payable amount: $300.00

// Amount: Rs. 40
console.log("Example 4: For the order Amount - Rs. 40 \n",calculateFinalAmount(40));        // Final payable amount: $50.00
