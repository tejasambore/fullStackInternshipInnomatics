/* * ATM Withdrawal System
    Scenario: A customer wants to withdraw money from an ATM. 
    Write a function atmWithdrawal(balance, amount, pin, enteredPin) that checks:
    If enteredPin matches pin, proceed. Otherwise, return "Incorrect PIN"
    If amount > balance, return "Insufficient Funds"
    If amount is a multiple of 100, allow withdrawal, else return "Enter amount in multiples of 100" */

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    
    balance -= amount;
    return `Withdrawal successful. Remaining balance: ${balance}`;
}

// Example Usage:
console.log("Example 1:\n", atmWithdrawal(5000, 1000, 1234, 1234)); // Withdrawal successful. Remaining balance: 4000
console.log("Example 2:\n", atmWithdrawal(5000, 6000, 1234, 1234)); // Insufficient Funds
console.log("Example 3: \n", atmWithdrawal(5000, 1050, 1234, 1234)); // Enter amount in multiples of 100
console.log("Example 4:\n", atmWithdrawal(5000, 1000, 1234, 4321)); // Incorrect PIN
