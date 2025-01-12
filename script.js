document.getElementById("miBoton").addEventListener("click", () => {
    const gifContainer = document.getElementById("gifContainer");
    const gifUrl = "./GIF.gif"; // Asegúrate de que este archivo esté en la misma carpeta
    gifContainer.innerHTML = `<img src="${gifUrl}" alt="Surprise GIF" style="max-width: 100%; height: auto;">`;
});
