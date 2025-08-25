/**
 * Contact Form Validation and Submission Handler
 * This script provides comprehensive form validation, user feedback, and submission handling
 */

// Main Form Submission Event Listener
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Prevent default form submission to enable custom validation
    e.preventDefault();

    // Get all required form fields for validation
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true; // Flag to track overall form validity

    // Validate all required fields
    requiredFields.forEach(field => {
        // Check if field is empty (trimmed to remove whitespace)
        if (!field.value.trim()) {
            // Add Bootstrap invalid styling class
            field.classList.add('is-invalid');
            // Remove any existing valid styling
            field.classList.remove('is-valid');
            // Mark form as invalid
            isValid = false;
        } else {
            // Field has content - remove invalid styling and add valid styling
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });

    // Email Format Validation
    const emailField = this.querySelector('#email');
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email field has content and validate format
    if (emailField.value && !emailRegex.test(emailField.value)) {
        // Invalid email format - add error styling
        emailField.classList.add('is-invalid');
        emailField.classList.remove('is-valid');
        isValid = false;
    }

    // Message Length Validation (80-300 characters required)
    const messageField = this.querySelector('#message');
    const messageLength = messageField.value.length;

    // Check if message meets length requirements
    if (messageLength < 80 || messageLength > 300) {
        // Message doesn't meet requirements - add error styling
        messageField.classList.add('is-invalid');
        messageField.classList.remove('is-valid');
        isValid = false;
    } else {
        // Message meets requirements - add success styling
        messageField.classList.remove('is-invalid');
        messageField.classList.add('is-valid');
    }

    // Process Form Submission if All Validations Pass
    if (isValid) {
        // Get submit button for loading state management
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML; // Store original button text

        // Update button to show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitBtn.disabled = true; // Prevent multiple submissions

        // Simulate form submission with 2-second delay
        // In a real application, this would be an AJAX call to a server
        setTimeout(() => {
            // Show success message to user
            document.getElementById('successMessage').style.display = 'block';

            // Reset form to initial state
            this.reset();

            // Reset character counter
            document.getElementById('charCount').textContent = '0';

            // Restore button to original state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Remove all validation styling classes from form elements
            this.querySelectorAll('.form-control, .form-select').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });

            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        }, 2000); // 2-second delay to simulate server processing
    }
});

/**
 * Real-time Character Counter for Message Field
 * Provides visual feedback about message length requirements
 */
const messageField = document.querySelector('#message');
const charCount = document.querySelector('#charCount');
const hintText = document.querySelector('.form-text');

// Update character count and visual feedback as user types
messageField.addEventListener('input', function() {
    const length = this.value.length; // Get current message length
    charCount.textContent = length; // Update counter display

    // Get the icon element for dynamic updates
    const hintIcon = hintText.querySelector('i');

    // Update icon and color based on message length
    if (length < 80) {
        // Too short - show info icon with default color
        hintIcon.className = 'fas fa-info-circle';
        hintText.style.color = '#6c757d'; // Bootstrap muted color
    } else if (length <= 300) {
        // Perfect length - show check icon with green color
        hintIcon.className = 'fas fa-check-circle';
        hintText.style.color = '#28a745'; // Bootstrap success color
    } else {
        // Too long - show warning icon with red color
        hintIcon.className = 'fas fa-exclamation-triangle';
        hintText.style.color = '#dc3545'; // Bootstrap danger color
    }
});

/**
 * Real-time Field Validation on Blur
 * Provides immediate feedback when user leaves a field
 */
document.querySelectorAll('.form-control, .form-select').forEach(field => {
    // Add blur event listener to each form field
    field.addEventListener('blur', function() {
        // Only validate required fields that are empty
        if (this.hasAttribute('required') && !this.value.trim()) {
            // Required field is empty - show error state
            this.classList.add('is-invalid');
            this.classList.remove('is-valid');
        } else if (this.value.trim()) {
            // Field has content - show success state
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        }
        // Note: Non-required empty fields don't get any validation styling
    });
});

/**
 * Dynamic Source Field Management
 * Shows/hides and makes required the "Specify if other" field based on dropdown selection
 */
document.getElementById('source').addEventListener('change', function() {
    // Get the "other" specification input field
    const sourceOtherField = document.getElementById('sourceOther');

    // Check if user selected "other" option
    if (this.value === 'other') {
        // Make the specification field required
        sourceOtherField.required = true;
        sourceOtherField.setAttribute('aria-required', 'true'); // Accessibility attribute
    } else {
        // User selected a specific option - make specification field optional
        sourceOtherField.required = false;
        sourceOtherField.removeAttribute('aria-required');
    }
});
