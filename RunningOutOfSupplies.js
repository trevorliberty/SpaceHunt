function checkSupplies() {
  var gameType = document.UI.gameType.value;
  if (gameType == 0) {
    //regular game type
    var docSupplies = document.getElementById("supplies");
      
    if (supplies == 1 ||
        docSupplies.value == 1 ||
        localStorage.getItem("supplies") == 1) {
        
      alert("Attention! Your Supplies almost done!");
        
    }
    else if (supplies <= 0 ||
             docSupplies.value <= 0 ||
             localStorage.getItem("supplies") <= 0)){
        if(localStorage.getItem("dies")） {
           alert("Your Supplies is done! Game Over!"); // game ends
            
        }
    }
  }
    //otherwise, nodie game type

  
}
