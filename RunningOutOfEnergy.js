function checkEnergy() {
    if(localStorage.getItem("dies")){
        if(localStorage.getItem("energy") <= 0){
            alert("You silly! You ran out of energy! You will not be  resurrected.");
            //game ends
        }
    }
}