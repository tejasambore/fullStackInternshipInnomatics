function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    const plans = {
        "Basic": { 
            price: 20, 
            trainer: false, 
            dietPlan: false 
        },
        "Premium": { 
            price: 50, 
            trainer: true, 
            dietPlan: false 
        },
        "VIP": { 
            price: 80, 
            trainer: true, 
            dietPlan: true 
        }
    };

    if (wantsTrainer && wantsDietPlan) {
        return `Best Plan: VIP ($80/month)`;
    } else if (wantsTrainer) {
        return `Best Plan: Premium ($50/month)`;
    } else {
        return `Best Plan: Basic ($20/month)`;
    }
}

// Example Plan:
console.log(choosePlan("Basic", false, false)); // Best plan: Basic ($20/month)
console.log(choosePlan("Basic", true, false));  // Best plan: Premium ($50/month)
console.log(choosePlan("Premium", true, true)); // Best plan: VIP ($80/month)
console.log(choosePlan("VIP", false, false));   // Best plan: Basic ($20/month)
console.log(choosePlan("VIP", true, true));     // Best plan: VIP ($80/month)