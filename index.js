const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOrigin = document.getElementById('input-origin');
const cipher = document.getElementById('cipher');
const result = document.getElementById('result');
const range-id = document.getElementById('range-id');
const range-id = document.getElementById('range-id');
const shifMessage = () => {
    const wordArray = [...inputOrigin.value.toUpperCase()];
    printChar(0, wordArray);
}
const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOrigin.value = inputOrigin.value.substring(1)
    const spanChar = document.createElement("span");
    result.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charUnencoded = wordArray[currentLetterIndex];
            spanChar.innerHTML = alphabet.includes(charUnencoded) ? 
                alphabet[(alphabet.indexOf(charUnencoded) + parseInt(rangerange-id.value)) % alphabet.length] : 
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
const submit = e => {
    e.preventDefault();
    result.innerHTML = '';
    shifMessage()
}
ciphercipher.onsubmit = submit;