document.getElementById("miBoton").addEventListener("click", () => {
    const gifContainer = document.getElementById("gifContainer");
    const gifUrl = "../media/GIF.gif"; 
    gifContainer.innerHTML = `<img src="${gifUrl}" alt="Surprise GIF" style="max-width: 100%; height: auto;">`;
});
