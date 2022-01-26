console.log('hello world');

let currentNumberWrapper = document.getElementById('currentNumber');

let currentNumber = 0;

function incrementar() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrementar(num) {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}

console.log('ok')