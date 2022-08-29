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

    if (sides[0].value === "" || sides[1].value === "") {
        outputEl.innerText = `Please enter both the required Base value(a) and Height value(b)`
    }
    else if (sides[0].value < 0 || sides[1].value < 0 || sides[0].value == 0 || sides[1].value == 0) {
        outputEl.innerText = `Base value and Height value can not be zero or negative, Please give the values greater than or equal to 1`
    } else {
        outputEl.innerText = `The length of Hypotenuse is: ${lengthOfHypotenuse}`
    }

    
    
    // console.log(sides[0].value); // logs first value
}

hypotenuseBtn.addEventListener("click",calculatehypotenuse)
