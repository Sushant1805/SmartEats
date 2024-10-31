const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { age, height, weight, goal, preference, workoutFrequency } = req.body;
    // Placeholder for AI model or static diet plan logic
    const dietPlan = {
        breakfast: "Oatmeal with berries",
        lunch: "Grilled chicken and veggies",
        dinner: "Salad with a protein source",
        notes: `Custom plan for ${goal} with ${preference} dietary preference.`
    };
    res.json(dietPlan);
});

module.exports = router;
