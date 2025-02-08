function applyCoupon (orderAmount, couponCode) {
    let discount = 0;
    let shippingCharge = 0;

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        shippingCharge = 0;
    }

    if (couponCode !== "FREESHIP" || orderAmount <= 200) {
        shippingCharge = 20;
    }

    let finalAmount = orderAmount - discount + shippingCharge;

    return `Final Price after applying coupon: $${finalAmount.toFixed(2)}`;
} 

// Example Usage:
console.log(applyCoupon(600, "DISCOUNT10")); // 10% off → $540 + $20 shipping = $560
console.log(applyCoupon(250, "FREESHIP"));   // Free shipping → $250
console.log(applyCoupon(150, "DISCOUNT10")); // No discount + $20 shipping → $170
console.log(applyCoupon(400, ""));           // No coupon + $20 shipping → $420
console.log(applyCoupon(600, "FREESHIP"));   // Free shipping applied → $600 (but no discount)