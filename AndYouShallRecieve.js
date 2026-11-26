function checkPassword() {
  const ans1 = "C4RE";
  const ans2 = "L3FT";
  const ans3 = "What did you do?";
  const ans4 = "HOUS3";
  const ans5 = "SCH00L";
  const ans6 = "TI4R4";
  const ans7 = "G1FT";
  const ans8 = "G3N";
  const ans9 = "3ND";
  const userInput = document.getElementById("question").value;

  if (userInput === ans1) {
    window.location.href = "Route1.html";
  } else if (userInput === ans2) {
    window.location.href = "Route2.html";
  } else if (userInput === ans3) {
    window.location.href = "Teaser1.html";
  } else if (userInput === ans4) {
    window.location.href = "Teaser2.html";
  } else if (userInput === ans5) {
    window.location.href = "Teaser3.html";
  } else if (userInput === ans6) {
    window.location.href = "Teaser4.html";
  } else if (userInput === ans7) {
    window.location.href = "Teaser5.html";
  } else if (userInput === ans8) {
    window.location.href = "Teaser6.html";
  } else if (userInput === ans9) {
    window.location.href = "Ending.html";
  } else {
    alert("I don't know");
  }
}
