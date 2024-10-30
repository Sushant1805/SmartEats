document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function() {
        // Clear previous error messages
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.textContent = "");

        // Get input values
        const age = document.getElementById("age-input").value;
        const height = document.getElementById("height-input").value;
        const weight = document.getElementById("weight-input").value;

        let valid = true;

        // Validate Age
        if (age < 1 || age > 120) {
            document.getElementById("age-error").textContent = "Please enter a valid age (1-120).";
            valid = false;
        }

        // Validate Height
        if (height < 30 || height > 250) {
            document.getElementById("height-error").textContent = "Please enter a valid height (30-250 cm).";
            valid = false;
        }

        // Validate Weight
        if (weight < 1 || weight > 500) {
            document.getElementById("weight-error").textContent = "Please enter a valid weight (1-500 kg).";
            valid = false;
        }

        // Validate Radio Buttons
        const goalSelected = document.querySelector('input[name="goal"]:checked');
        const preferenceSelected = document.querySelector('input[name="preference"]:checked');
        const workoutSelected = document.querySelector('input[name="workout-frequency"]:checked');

        if (!goalSelected) {
            document.getElementById("goal-error").textContent = "Please select a goal.";
            valid = false;
        }

        if (!preferenceSelected) {
            document.getElementById("preference-error").textContent = "Please select a preference.";
            valid = false;
        }

        if (!workoutSelected) {
            document.getElementById("workout-error").textContent = "Please select a workout frequency.";
            valid = false;
        }

        // If valid, you can proceed with form submission or further processing
        if (valid) {
            alert("Form is valid! Proceeding to get the diet plan.");
            // Here you can add code to submit the form or process the input data
        }
    });
});