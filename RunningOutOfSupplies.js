function checkSupplies() {
  var gameType = document.UI.gameType.value;
  if (gameType == 0) {
    //regular game type
    var docSupplies = document.getElementById("supplies");
    if (supplies == 1 || docSupplies.value == 1) {
      alert("Attention! Your Supplies almost done!");
    } else if (supplies <= 0 || docSupplies.value <= 0) {
      alert("Your Supplies is done! Game Over!");
    }

    //otherwise nodie game type

    //alert("Check your Supplies!");
  }
}
