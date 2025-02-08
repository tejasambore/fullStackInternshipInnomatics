function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return "Green Light duration: 60 seconds";
    } else if (density === "Medium Traffic") {
        return "Green Light duration: 40 seconds";
    } else if (density === "Light Traffic") {
        return "Green Light duration: 20 seconds";
    } else {
        return "Invalid traffic density";
    }
}

// Example Usage:
console.log(trafficLightControl("Heavy Traffic"));   // Green light duration: 60 seconds
console.log(trafficLightControl("Medium Traffic")); // Green light duration: 40 seconds
console.log(trafficLightControl("Light Traffic"));    // Green light duration: 20 seconds
console.log(trafficLightControl("No Traffic"));       // Invalid traffic density