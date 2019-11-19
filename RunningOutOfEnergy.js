function checkEnergy() {
  if (localStorage.getItem("dies")) {
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
