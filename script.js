const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Función para cifrar un texto usando el cifrado César
function caesarCipher(text, shift) {
    // Crear un array con el alfabeto


    // Convertir el texto a mayúsculas
    const uppercaseText = text.toUpperCase();

    let result = "";

    // Obtener los elementos HTML necesarios
    const resultElement = document.getElementById("result");

    // Iterar a través de cada carácter del texto
    for (let i = 0; i < uppercaseText.length; i++) {
        const char = uppercaseText[i];

        // Verificar si el carácter está en el alfabeto
        const index = alphabet.indexOf(char);

        if (index !== -1) {
            // Calcular la posición cifrada
            const newIndex = (index + shift) % alphabet.length;

            // Crear un elemento <span> para cada letra
            const spanChar = document.createElement("span");
            resultElement.appendChild(spanChar);

            // Llamar a la función de animación para el <span> creado
            animateChar(spanChar, alphabet[newIndex]);
        } else {
            // Si el carácter no está en el alfabeto, mantenerlo sin cambios
            result += char;
        }
    }
}

// Función para manejar la animación de cada letra
function animateChar(spanChar, char) {
    let letterChanges = 0;
    return new Promise(resolve => {
        const interval = setInterval(() => {
            spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
            letterChanges++;
            if (letterChanges === 10) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    }).then(() => {
        spanChar.innerHTML = char;
    });
}

// Función para manejar el cifrado cuando se envía el formulario
function handleCipherSubmit(event) {
    event.preventDefault();

    // Obtener los elementos HTML necesarios
    const inputElement = document.getElementById("input-origin");
    const resultElement = document.getElementById("result");
    const rangeElement = document.getElementById("range");

    // Limpiar resultados anteriores
    resultElement.textContent = "";

    // Obtener el valor del campo de entrada de texto y el valor del desplazamiento
    const textToCipher = inputElement.value;
    const shiftValue = parseInt(rangeElement.value);

    // Realizar el cifrado César
    caesarCipher(textToCipher, shiftValue);
}

// Agregar un event listener al formulario para manejar el cifrado cuando se envía
const cipherForm = document.getElementById("cipher");
cipherForm.addEventListener("submit", handleCipherSubmit);
