document.getElementById("submitButton").addEventListener("click", function() {
    const password = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

   
    if (password === "1805461595") {
        errorMessage.classList.add("hidden");
        const correctSound = new Audio("../media/correctSound.mp3");
        correctSound.play(); 
        const yipiSound = new Audio("../media/Yipi.mp3");
        yipiSound.play();   
        confetti({
            particleCount: 100, 
            spread: 70, 
            origin: { y: 0.6 } 
        });
        setTimeout(function() {
            window.location.href = "main_content.html";
        }, 2500);

    } else {

        errorMessage.classList.remove("hidden");
        const errorSound = new Audio("../media/errorSound.wav");
        errorSound.play();
    }
});

function createHearts() {
    const numHearts = 20; 
    const container = document.body;

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(heart);
    }
}

createHearts(); 