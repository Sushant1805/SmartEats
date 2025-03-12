document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", async function() {
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
            const ageError = document.getElementById("age-error");
            if (ageError) {
                ageError.textContent = "Please enter a valid age (1-120).";
            }
            valid = false;
        }

        // Validate Height
        if (height < 30 || height > 250) {
            const heightError = document.getElementById("height-error");
            if (heightError) {
                heightError.textContent = "Please enter a valid height (30-250 cm).";
            }
            valid = false;
        }

        // Validate Weight
        if (weight < 1 || weight > 500) {
            const weightError = document.getElementById("weight-error");
            if (weightError) {
                weightError.textContent = "Please enter a valid weight (1-500 kg).";
            }
            valid = false;
        }

        // Validate Radio Buttons
        const goalSelected = document.querySelector('input[name="goal"]:checked');
        const preferenceSelected = document.querySelector('input[name="preference"]:checked');
        const workoutSelected = document.querySelector('input[name="workout-frequency"]:checked');

        if (!goalSelected) {
            const goalError = document.getElementById("goal-error");
            if (goalError) {
                goalError.textContent = "Please select a goal.";
            }
            valid = false;
        }

        if (!preferenceSelected) {
            const preferenceError = document.getElementById("preference-error");
            if (preferenceError) {
                preferenceError.textContent = "Please select a preference.";
            }
            valid = false;
        }

        if (!workoutSelected) {
            const workoutError = document.getElementById("workout-error");
            if (workoutError) {
                workoutError.textContent = "Please select a workout frequency.";
            }
            valid = false;
        }

        // If valid, proceed to send data to the backend
        if (valid) {
            const requestData = {
                age: parseInt(age),  // Ensure age is an integer
                height: parseInt(height),  // Ensure height is an integer
                weight: parseInt(weight),  // Ensure weight is an integer
                goal: goalSelected.value,
                preference: preferenceSelected.value,
                workoutFrequency: workoutSelected.value
            };

            // Show loading indicator
            const loadingMessage = document.getElementById("loading-message");
            if (loadingMessage) {
                loadingMessage.textContent = "Generating your diet plan...";
            }

            try {
                // Send a POST request to the backend
                const response = await fetch('http://127.0.0.1:5000/generate_diet_plan', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });

                if (response.ok) {
                    const dietPlanData = await response.json();

                    // Option 1: Store diet plan data in session storage
                    sessionStorage.setItem("dietPlanData", JSON.stringify(dietPlanData));

                    // Redirect to the new page
                    window.location.href = "dietPlan.html";
                } else {
                    // Handle server errors
                    const errorResponse = await response.json();
                    console.error("Failed to fetch diet plan:", errorResponse);
                    const serverError = document.getElementById("server-error");
                    if (serverError) {
                        serverError.textContent = "Error fetching diet plan. Please try again.";
                    }
                }
            } catch (error) {
                console.error("Error:", error);
                const serverError = document.getElementById("server-error");
                if (serverError) {
                    serverError.textContent = "Network error. Please check your connection.";
                }
            } finally {
                // Hide loading indicator
                if (loadingMessage) {
                    loadingMessage.textContent = "";
                }
            }
        }
    });
});