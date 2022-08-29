const inputs = document.querySelectorAll(".angle-input");

const outputEl = document.querySelector("#output");

const calculateBtn = document.querySelector(".check-btn")



function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
  // console.log(sumOfAngles);
}

function isTriangle(e) {

  e.preventDefault();

  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  // console.log(Number(inputs[0].value));
  // console.log(inputs[1].value);
  // console.log(inputs[2].value);
  if (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "") {
    outputEl.innerText = "Please enter all the required three angles of Triangle."
    // outputEl.innerText = "Angles can not be zero"
  } else if (inputs[0].value <= 0 || inputs[1].value <= 0 || inputs[2].value <= 0) {
    outputEl.innerText = "Any angle of Triangle can not be zero, angle value should be greater than or equal to 1."
    // outputEl.innerText = "Please enter all the three angles"
  } else if (sumOfAngles === 180) {
    outputEl.innerText = "Yay, the given angles form a triangle.";
  } else {
    outputEl.innerText =
      "Oh uh, the given angles can not form a triangle. You can Try again.";
  }
  
}

calculateBtn.addEventListener("click", isTriangle)
