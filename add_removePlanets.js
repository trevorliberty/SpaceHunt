var planetArry = [];

$(document).ready(function(){
	$("input").change(function(){alert("ID: "+ this.val())});
});


	function addPlanet(){
		var newPlanetNum = parseInt($('#planets').val())+1;
		var newPlanetInput = "<div class='new_planet"+newPlanetNum+"'><input type='text' id='new_planet"+ newPlanetNum +"' style='margin:10px;' placeholder='Planet Name'><input type='text'id='new_planet"+ newPlanetNum +"XCoord'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='new_planet"+ newPlanetNum +"YCoord'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='"+ newPlanetNum +"' onclick='removePlanet(this.id)'>Remove</a></div>";

		$('#newPlanets').append(newPlanetInput);
		$('#planets').val(newPlanetNum);
		console.log("Added Planet"+newPlanetNum);

		var planet = {
			Name: $('#new_planet'+newPlanetNum).val(),
			XCoord: $('#new_planet'+newPlanetNum+"XCoord").val(),
			YCoord: $('#new_planet'+newPlanetNum+"XCoord").val()
		};

		var arryStr = {"Planet": planet};
		planetArry.push(arryStr);
		console.log(planetArry);
	}


	function removePlanet(id) {
		var lastPlanetNum = parseInt(id);
		if (lastPlanetNum >= 1) {
			$('.new_planet' + lastPlanetNum).remove();
    		$('#planets').val(lastPlanetNum - 1);
    		console.log("Removed Planet"+lastPlanetNum);
  		}
  	}

  	function addAsteroid(){
		var newAsteroidNum = parseInt($('#asteroids').val())+1;
		var newAsteroidInput = "<div class='new_asteroid"+newAsteroidNum+"'><input type='text' id='new_asteroid"+ newAsteroidNum +"' style='margin:10px;' value='Asteroid "+newAsteroidNum+"'><input type='text'id='new_asteroid"+ newAsteroidNum +"XCoord'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='new_asteroid"+ newAsteroidNum +"YCoord'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='"+ newAsteroidNum +"' onclick='removeAsteroid(this.id)'>Remove</a></div>";

		$('#newAsteroids').append(newAsteroidInput);
		$('#asteroids').val(newAsteroidNum);
		console.log("Added Asteroid"+newAsteroidNum);
	}
	
	function removeAsteroid(id) {
		var lastAsteroidNum = parseInt(id);
		if (lastAsteroidNum >= 1) {
			$('.new_asteroid' + lastAsteroidNum).remove();
    		$('#asteroids').val(lastAsteroidNum - 1);
    		console.log("Removed Asteroid"+lastAsteroidNum);
  		}
  	}

  	  	function addStation(){
		var newStationNum = parseInt($('#stations').val())+1;
		var newStationInput = "<div class='new_station"+newStationNum+"'><input type='text' id='new_station"+ newStationNum +"' style='margin:10px;' value='Space Station "+newStationNum+"'><input type='text'id='new_station"+ newStationNum +"XCoord'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='new_station"+ newStationNum +"YCoord'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='"+ newStationNum +"' onclick='removeStation(this.id)'>Remove</a></div>";

		$('#newStations').append(newStationInput);
		$('#stations').val(newStationNum);
		console.log("Added Station"+newStationNum);
	}

		function removeStation(id) {
		var lastStationNum = parseInt(id);
		if (lastStationNum >= 1) {
			$('.new_station' + lastStationNum).remove();
    		$('#stations').val(lastStationNum - 1);
    		console.log("Removed Station" + lastStationNum);
  		}
  	}