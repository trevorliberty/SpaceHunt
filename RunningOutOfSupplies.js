function checkSupplies() {
  check = JSON.parse(localStorage.getItem("dies"));
  if (check) {      //If check is true, player dies and game ends, else continues
      if (
          supplies <= 0 ||
          document.getElementById("supplies").value <= 0 ||
          localStorage.getItem("supplies") <= 0
      ) {
          alert("You've run out of supplies! Game over.");
          //game ends
          window.location.href = "index.html";
      }
  }
}
