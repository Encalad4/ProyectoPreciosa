
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");


yesButton.addEventListener("click", function() {
    const yipiSound = new Audio("../media/Yipi.mp3");
    yipiSound.play();  

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(function() {
        alert("Congratulations, now you are my Valentine. Let's make it the second one of many more! ❤️");
    }, 2500);
    
});

noButton.addEventListener("click", function() {
    const errorSound = new Audio("../media/Nuh-uh.mp3");
    errorSound.play();

    setTimeout(function() {
        alert("Oops, wrong answer. Try again! 😉");
    }, 4500);
    
});

function createAirplanes() {
    const numAirplanes = 20; 
    const container = document.body;

    for (let i = 0; i < numAirplanes; i++) {
        const airplane = document.createElement('div');
        airplane.classList.add('airplane');
        airplane.innerHTML = '✈️'; 


        airplane.style.top = `${Math.random() * 100}vh`;
        airplane.style.animationDelay = `${Math.random() * 10}s`;

        container.appendChild(airplane);
    }
}

createAirplanes(); 