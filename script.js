const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const originImput = document.getElementById('input-origin');
const cipher = document.getElementById('cipher');
const result = document.getElementById('result');
const rangeId1 = document.getElementById('range'); // Nombre único para la primera constante


const shiftMessage = () => {
    const wordArray = [...originImput.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    originImput.value = originImput.value.substring(1)
    const spanChar = document.createElement("span");
    result.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charUnencoded = wordArray[currentLetterIndex];
            spanChar.innerHTML = alphabet.includes(charUnencoded) ? 
                alphabet[(alphabet.indexOf(charUnencoded) + parseInt(rangeId1.value)) % alphabet.length] : 
                charUnencoded
            printChar(currentLetterIndex + 1, wordArray);
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
    shiftMessage()
}
cipher.addEventListener('submit', onsubmit);
cipher.onsubmit = onsubmit;