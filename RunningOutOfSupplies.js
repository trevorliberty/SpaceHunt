function checkSupplies() {
    var gameType = document.UI.gameType.value;
		if(gameType == 0){      //regular game type
            if(document.UI.supplies.value == 1){
            alert("Attention! Your Supplies almost done!");
            }
            else if(document.UI.supplies.value <= 0)
            {
                alert("Your Supplies is done! Game Over!");
            }
		
            //otherwise nodie game type
	
	//alert("Check your Supplies!");
        }
}

