function checkEnergy() {
    var gameType = document.UI.gameType.value;
    if(gameType == 0){
        if(document.UI.energy.value <= 0){
            alert("You silly! You ran out of gosh darn energy! You will not be  resurrected.");
            //game ends
        }
    }
}