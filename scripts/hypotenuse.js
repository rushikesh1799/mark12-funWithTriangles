const sides = document.querySelectorAll('.side-input');

const hypotenuseBtn = document.querySelector('#hypotenuse-btn');

const outputEl = document.querySelector('#output')
// console.log("Hello");
function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    // console.log(sumOfSquares);
    return sumOfSquares
}

function calculatehypotenuse(e) {

    e.preventDefault()
    
    const sumOfSquares =  calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    // console.log(lengthOfHypotenuse);

    outputEl.innerText = `The length of Hypotenuse is: ${lengthOfHypotenuse}`
    
    console.log(sides[0].value); // logs first value
}

hypotenuseBtn.addEventListener("click",calculatehypotenuse)
