document.addEventListener("DOMContentLoaded", function() {
    const dietPlanData = JSON.parse(localStorage.getItem("dietPlanData"));
    
    if (dietPlanData) {
        document.getElementById("diet-plan-content").textContent = dietPlanData.diet_plan;
    } else {
        document.getElementById("diet-plan-content").textContent = "No diet plan found. Please go back and generate one.";
    }
});
