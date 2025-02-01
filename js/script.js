document.getElementById("submitButton").addEventListener("click", function() {
    const password = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    // Replace "ILoveYou" with your desired password
    if (password === "ILoveYou") {
        // Redirect to the main content page
        window.location.href = "main_content.html";
    } else {
        // Show error message
        errorMessage.classList.remove("hidden");
    }
});