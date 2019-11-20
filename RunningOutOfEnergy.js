function checkEnergy() {
  check = JSON.parse(localStorage.getItem("dies"));
  if (check) {      //If check is true, player dies and game ends, else continues
    if (
      energy <= 0 ||
      document.getElementById("energy").value <= 0 ||
      localStorage.getItem("energy") <= 0
    ) {
      alert("You silly! You ran out of energy! You will not be  resurrected.");
      //game ends
      window.location.href = "index.html";
    }
  }
}
