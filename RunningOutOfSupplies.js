function checkSupplies() {
    var gameType = document.UI.gameType.value;
		if(gameType == 0){
            //alert("Attention! Your Supplies almost done!");
            if(document.UI.supplies.value <= 0)
            {
                alert("Your Supplies is done! Game Over!");
            }
		}
	
	//alert("Check your Supplies!");

}
