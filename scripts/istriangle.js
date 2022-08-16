const inputs = document.querySelectorAll(".angle-input");

const outputEl = document.querySelector("#output");

const calculateBtn = document.querySelector(".check-btn")

// console.log(outputEl);

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
  // console.log(sumOfAngles);
  if (sumOfAngles === 180) {
    outputEl.innerText = "Yay, the given angles form a triangle.";
  } else {
    outputEl.innerText =
      "Oh uh, the given angles can not form a triangle. Try again.";
  }
  
}

calculateBtn.addEventListener("click", isTriangle)
