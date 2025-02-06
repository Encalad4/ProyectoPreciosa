
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");


yesButton.addEventListener("click", function() {
    const yipiSound = new Audio("/ProyectoPreciosa/media/Gracias.mp3");
    yipiSound.play();  

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(function() {
        alert("Yipiiiiii, ahora somos Valentinesss. Hagamoslo el 2do de muchos más mi corazón hermoso. Juntos hasta el final. Te amooooo❤️");
    }, 4000);
    
});

noButton.addEventListener("click", function() {
    const errorSound = new Audio("/ProyectoPreciosa/media/Nuh-uh.mp3");
    errorSound.play();

    setTimeout(function() {
        alert("Ayyyyy que penita, te equivocaste. Pero no pasa nada, porque yo te amo mucho, asi que te doy otra oportunidadsovia 😉");
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
        airplane.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(airplane);
    }
}

createAirplanes(); 