// Get all the steps
const steps = document.querySelectorAll('.step');

// Hide all the steps except the first one
steps.forEach((step, index) => {
    if (index !== 0) {
        step.style.display = 'none';
    }
});

// Add event listeners to the next step buttons
const nextButtons = document.querySelectorAll('.next-step');
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the current step and the next step
        const currentStep = button.parentNode;
        const nextStepId = button.getAttribute('data-next');
        const nextStep = document.getElementById(nextStepId);
        
        // Hide the current step and show the next step
        currentStep.style.display = 'none';
        nextStep.style.display = 'block';
    });
});
