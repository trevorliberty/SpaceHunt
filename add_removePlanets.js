	function addPlanet(){
		var newPlanetNum = parseInt($('#planets').val())+1;
		var newPlanetInput = "<div class='new_planet"+newPlanetNum+"'><input type='text' id='new_planet"+ newPlanetNum +"' style='margin:10px;' placeholder='Planet Name'><input type='text'id='new_planet"+ newPlanetNum +"XCord'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='new_planet"+ newPlanetNum +"YCord'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='"+ newPlanetNum +"' onclick='removePlanet(this.id)''>Remove</a></div>";

		$('#newPlanets').append(newPlanetInput);
		$('#planets').val(newPlanetNum);
		console.log("Added Planet");
	}

	function removePlanet(id) {
		var lastPlanetNum = parseInt(id);
		console.log(lastPlanetNum);
		if (lastPlanetNum >= 1) {
			$('.new_planet' + lastPlanetNum).remove();
    		$('#planets').val(lastPlanetNum - 1);
    		console.log("Removed Planet");
  		}
	}