function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;
    }

    if (marks >= 90) {
        return "Final Grade: A";
    } else if (marks >= 80) {
        return "Final Grade: B";
    } else if (marks >= 70) {
        return "Final Grade: C";
    } else if (marks >= 60) {
        return "Final Grade: D";
    } else {
        return "Final Grade: F"
    }
}

// Example Usage:
console.log(calculateGrade(87, 92)); // Final Grade: A (Extra marks boost it to 92)
console.log(calculateGrade(75, 95)); // Final Grade: B (Extra marks boost it to 80)
console.log(calculateGrade(65, 85)); // Final Grade: D (No extra marks)
console.log(calculateGrade(58, 94)); // Final Grade: D (Extra marks boost it to 63)
console.log(calculateGrade(90, 80)); // Final Grade: A (No extra marks)