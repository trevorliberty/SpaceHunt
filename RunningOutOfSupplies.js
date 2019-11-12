function checkSupplies() {
	if(document.UI.supplies.value <= 1)
	{
		alert("Attention! Your Supplies almost done!");
		if(document.UI.supplies.value == 0)
   	   alert("Your Supplies is done! Game Over!");
	}

}
