
// Wait for the page to fully load before running anything
document.addEventListener("DOMContentLoaded", function () {
 
 
    // ── WELCOME MESSAGE in the console ───────────────────────
    console.log("Welcome to Joseph's portfolio!");
 
 
    // ── SELECT ELEMENTS BY ID ────────────────────────────────
    var btn       = document.getElementById("change-text-btn");
    var aboutText = document.getElementById("about-text");
    var hiddenBox = document.getElementById("welcome-message");
 
    // Track if the extra content is visible or not
    var isVisible = false;
 
 
    // ── BUTTON CLICK ─────────────────────────────────────────
    // When the button is clicked, run this function
    btn.addEventListener("click", function () {
 
        if (isVisible === false) {
 
            // Show the hidden welcome box
            hiddenBox.style.display = "block";
 
            // Change the paragraph text
            aboutText.textContent = "Thanks for clicking! I am a developer who loves building things for the web. Always learning and improving every day.";
 
            // Change the button label
            btn.textContent = "Hide message";
 
            isVisible = true;
 
        } else {
 
            // Hide the box again
            hiddenBox.style.display = "none";
 
            // Restore the original paragraph
            aboutText.textContent = "Hello, my name is Joseph. I am a Systems Engineering student based in Barranquilla, Colombia, with a strong passion for software development and continuous learning. I enjoy tackling challenges through logical thinking and structured problem-solving, always striving to build efficient and scalable solutions while growing as a developer.";
 
            // Restore the button label
            btn.textContent = "Read more about me";
 
            isVisible = false;
        }
 
    });
 
 
});
 
