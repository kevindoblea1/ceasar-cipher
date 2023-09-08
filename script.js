const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const originInput = document.getElementById('input-origin');
const cipher = document.getElementById('cipher');
const result = document.getElementById('result');
const rangeId1 = document.getElementById('range');

const shiftMessage = () => {
    const inputText = originInput.value.toUpperCase();
    const wordArray = [...inputText];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if (wordArray.length === currentLetterIndex) return;
    wordArray.shift(); // Eliminar el primer elemento del array
    const spanChar = document.createElement("span");
    result.appendChild(spanChar);
    animateChar(spanChar)
        .then(() => {
            const charUnencoded = wordArray[currentLetterIndex];
            spanChar.innerHTML = alphabet.includes(charUnencoded)
                ? alphabet[(alphabet.indexOf(charUnencoded) + parseInt(rangeId1.value)) % alphabet.length]
                : charUnencoded;
            printChar(currentLetterIndex + 1, wordArray);
            if (currentLetterIndex === wordArray.length - 1) {
                sendResult(result.textContent);
            }
        });
}

const animateChar = spanChar => {
    let letterChanges = 0;
    return new Promise(resolve => {
        const interval = setInterval(() => {
            spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
            letterChanges++;
            if(letterChanges === 3) {
                clearInterval(interval);
                resolve();
            }
        }, 50);
    });
}

const onsubmit = e => {
    e.preventDefault();
    result.innerHTML = '';
    shiftMessage();
}

const sendResult = (resultText) => {
    const resultInput = document.createElement("input");
    resultInput.setAttribute("type", "hidden");
    resultInput.setAttribute("name", "result");
    resultInput.setAttribute("value", resultText);
    cipher.appendChild(resultInput);
    cipher.submit();
}

cipher.addEventListener('submit', onsubmit);
