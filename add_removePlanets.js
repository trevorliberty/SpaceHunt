	function addPlanet(){
		var newPlanetNum = parseInt($('#planets').val())+1;
		var newPlanetInput = "<div class='new_planet"+newPlanetNum+"'><input type='text' id='new_planet"+ newPlanetNum +"' style='margin:10px;' placeholder='Planet Name'><input type='text'id='new_planet"+ newPlanetNum +"XCord'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='new_planet"+ newPlanetNum +"YCord'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='"+ newPlanetNum +"' onclick='removePlanet(this.id)'>Remove</a></div>";

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

  	function addAstroid(){
		var newAstroidNum = parseInt($('#astroids').val())+1;
		var newAstroidInput = "<div class='new_astroid"+newAstroidNum+"'><input type='text' id='new_astroid"+ newAstroidNum +"' style='margin:10px;' placeholder='Astroid"+newAstroidNum+"'><input type='text'id='new_astroid"+ newAstroidNum +"XCord'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='new_astroid"+ newAstroidNum +"YCord'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='"+ newAstroidNum +"' onclick='removeAstroid(this.id)'>Remove</a></div>";

		$('#newAstroids').append(newAstroidInput);
		$('#astroids').val(newAstroidNum);
		console.log("Added Astroid");
	}
	
	function removeAstroid(id) {
		var lastAstroidNum = parseInt(id);
		console.log(lastAstroidNum);
		if (lastAstroidNum >= 1) {
			$('.new_astroid' + lastAstroidNum).remove();
    		$('#astroids').val(lastAstroidNum - 1);
    		console.log("Removed Astroid");
  		}
  	}