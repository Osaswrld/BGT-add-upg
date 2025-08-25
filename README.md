# BGT-add-upg
Contact Form Project
This project implements a responsive contact form webpage with client-side validation, dynamic feedback, and a clean, modern design. The form allows users to submit inquiries with real-time validation and visual feedback, styled with a professional and accessible UI.
Table of Contents

Project Structure
Features
Technologies Used
Setup Instructions
Usage
File Descriptions
Responsive Design
Validation and Interactivity
Contributing
License

Project Structure
contact-form/
├── contact-osas.html  # Main HTML file with contact form and info
├── style.css          # CSS styles for layout, design, and animations
├── script.js          # JavaScript for form validation and interactivity
└── README.md          # Project documentation (this file)

Features

Responsive Design: Adapts seamlessly to desktop, tablet, and mobile devices.
Client-Side Validation: Real-time validation for required fields, email format, and message length (80–300 characters).
Dynamic Feedback: Character counter, success/error messages, and visual cues for form input states.
Interactive UI: Animations for buttons, labels, and social icons, with hover effects and smooth transitions.
Contact Information: Displays phone, email, address, and social media links with an interactive map section.
Accessibility: Includes ARIA attributes and keyboard-friendly interactions.

Technologies Used

HTML5: Semantic structure for the contact form and information sections.
CSS3: Custom styles with Bootstrap-inspired classes, animations, and responsive media queries.
JavaScript: Client-side validation, event handling, and dynamic form interactions.
Font Awesome: Icons for form feedback and social media links.
Bootstrap (implicit): Styling classes like form-control, btn-primary, and is-valid/is-invalid for form elements.

Setup Instructions

Clone or Download: Obtain the project files.
Host Locally:
Place all files (contact-osas.html, style.css, script.js) in a single directory.
Ensure the img/ directory contains referenced images (glowing-contact-us-image.png, call-center-representative.png).
Note: The project assumes external dependencies (e.g., Font Awesome) are loaded via CDN or local files.


Serve the Page:
Use a local server (e.g., python -m http.server or VS Code Live Server) to avoid CORS issues with local file access.
Open contact-osas.html in a web browser.


Dependencies:
Ensure an internet connection for Font Awesome icons (or host locally).
Replace placeholder image paths in style.css with actual image files if needed.



Usage

Open contact-osas.html in a browser.
Fill out the contact form:
Required fields: Full Name, Email, Phone Number, Message (80–300 characters).
Optional fields: Company Name, Job Title, Interested Service, How Did You Find Us, Specify if Other.


Submit the form:
Validation ensures all required fields are filled, email is valid, and message length is appropriate.
A loading state appears for 2 seconds, followed by a success message.
The form resets, and the success message auto-hides after 5 seconds.


View contact information and locations:
Contact details (phone, email, address) and social media links are displayed.
Locations are listed with an optional map section (iframe styling included but map source not provided).



File Descriptions

contact-osas.html:
Contains the main webpage structure with a header, contact form, contact information, and location sections.
Uses semantic HTML with Bootstrap-compatible classes for styling.
Includes a form with validation feedback and a success message.


style.css:
Defines global styles, typography, and a gradient background.
Styles the header with a background image and overlay.
Provides responsive form and contact info styling with animations (e.g., pulse, fade, spin).
Includes media queries for tablet (max-width: 767.98px) and mobile (max-width: 575.98px) layouts.
Styles map iframes and location containers.


script.js:
Handles form submission with client-side validation (required fields, email format, message length).
Implements real-time character counting for the message field with dynamic icon feedback.
Adds blur event validation for immediate user feedback.
Manages the "Specify if Other" field based on the "How Did You Find Us" dropdown.
Simulates form submission with a 2-second delay and resets the form on success.



Responsive Design

Desktop: Two-column layout for form and contact info, large header, and full-size map.
Tablet: Reduced padding, smaller text, and adjusted header height.
Mobile: Single-column layout, smaller fonts, and full-width form/contact sections.
Map Styling: Iframes scale on hover with rounded corners and fixed dimensions (30cm x 10cm).

Validation and Interactivity

Form Validation:
Required fields must be non-empty.
Email must match a valid format ([^\s@]+@[^\s@]+\.[^\s@]+).
Message must be 80–300 characters.


Real-Time Feedback:
Character counter updates as the user types in the message field.
Icons change (info → check → warning) based on message length.
Blur events validate fields instantly, adding is-valid or is-invalid classes.


Dynamic Fields:
The "Specify if Other" field becomes required only when "Other" is selected in the "How Did You Find Us" dropdown.


Animations:
Buttons have hover lift and gradient effects.
Social icons rotate continuously and scale on hover.
Headings and labels use subtle pulse and blink animations.



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).

Open a pull request.

Please ensure code follows the existing style (e.g., Bootstrap classes, consistent animations) and includes documentation.
License
This project is licensed under the MIT License. See the LICENSE file for details.

![glowing-contact-us-image](https://github.com/user-attachments/assets/81bed3b0-60a8-419a-8a1f-3ecede08286f)
