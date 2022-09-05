const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");



function calculateArea(e) {

  e.preventDefault(); 

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (firstSide.value <= 0 || secondSide.value <= 0 || thirdSide.value <= 0) {
    console.log(firstSide.value);
    console.log(secondSide.value);
    console.log(thirdSide.value);
    output.innerText = `All the three sides of a triangle should be greater than or equal to 1`;
  }
  else if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(2);
    console.log(result)
    output.innerText = `Area of a triangle using heron's formula is ${result} units`;
  } else {
    output.innerText = "Given input values does not form a Triangle";
  }
}

calculate.addEventListener("submit", calculateArea);
