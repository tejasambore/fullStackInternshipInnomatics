function isEligibleForJob (age, experience, qualification) {
    if (age < 21 || age > 55) {
        return "Not Eligible: Candidate must be between 21 and 55 years of age.";
    } 

    if (experience < 2) {
        return "Not Eligible: Candidate must have at least 2 years of experience.";
    }

    if (qualification !== "Bachelor's Degree") {
        return "Not Eligible: Candidate must have a Bachelor's Degree.";
    }

    return "Eligible for the Job.";
}

// Example Usage
console.log(isEligibleForJob(25, 3, "Bachelor's Degree")); // Eligible for the job.
console.log(isEligibleForJob(20, 4, "Bachelor's Degree")); // Not Eligible: Candidate must be between 21 and 55 years of age.
console.log(isEligibleForJob(30, 1, "Bachelor's Degree")); // Not Eligible: Candidate must have at least 2 years of experience.
console.log(isEligibleForJob(40, 5, "High School Diploma")); // Not Eligible: Candidate must have a Bachelor's Degree.
console.log(isEligibleForJob(50, 10, "Master's Degree")); // Not Eligible: Candidate must have a Bachelor's Degree.