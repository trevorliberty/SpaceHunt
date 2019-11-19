var artifactIds = [];

artifactsObj = JSON.parse(localStorage.getItem("celestialArtifacts"));

//Loads the celestial artifacts from the local storage
function loadArtifacts(){
   
 	$.each(artifactsObj, function( key, value ) {
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, planet){
  					placePlanets(planet);
  					//console.log("Name: " + planet.Name + " xCoord: " + planet.XCoord + " yCoord: " + planet.YCoord);
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, asteriod){
  					placeAsteriods(asteriod);
					//console.log("Name: " + asteriod.Name + " xCoord: " + asteriod.XCoord + " yCoord: " + asteriod.YCoord);
  				});
  			});
  		}else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, station){
  					placeStations(station);
					//console.log("Name: " + station.Name + " xCoord: " + station.XCoord + " yCoord: " + station.YCoord);
  				});
  			});

		};
 	});
 }

//Places planets on the map//
function placePlanets(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

 	const container = document.getElementById(id);
	let planet = document.createElement("img");
    planet.setAttribute("src", "planet.png");
    planet.style.width = "100%";
    planet.style.visibility = "hidden";
    container.appendChild(planet).className = `artifact`;
    artifactIds.push(id);
}

//Places asteriods on the map//
function placeAsteriods(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

 	const container = document.getElementById(id);
	let asteriod = document.createElement("img");
    asteriod.setAttribute("src", "asteriod.png");
    asteriod.style.width = "100%";
    asteriod.style.visibility = "hidden";
    container.appendChild(asteriod).className = `artifact`;
    artifactIds.push(id);
}

//Places space stations on the map//
function placeStations(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

 	const container = document.getElementById(id);
	let station = document.createElement("img");
    station.setAttribute("src", "station.png");
    station.style.width = "100%";
    station.style.visibility = "hidden";
    container.appendChild(station).className = `artifact`;
    artifactIds.push(id);
}

function isArtifact(shipId){
	returnValue = false;
 	$.each(artifactsObj, function( key, value ) {
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, planet){
  					var planetId = (planet.XCoord + "," + planet.YCoord);
  					if(shipId == planetId){
  						returnValue = true;
  						alert("You have collided with a planet!");
  					}
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, asteriod){
					var asteriodId = (asteriod.XCoord + "," + asteriod.YCoord);
  					if(shipId == asteriodId){
  						returnValue = true;
  						alert("You have collided with an asteriod!");
  					}
  				});
  			});
  		}else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, station){
  					var stationId = (station.XCoord + "," + station.YCoord);
  					if(shipId == stationId){
  						returnValue = true;
  						alert("You have collided with a space station!");
  					}

  				});
  			});

		};
 	});
 	return returnValue;
}
var sensorPaused = true;
setInterval(sensor, 500);
function sensorOnOff(){
	if($(".sensor").val() == "off"){
		$(".sensor").css({"background-color": "green"});
		$(".sensor").val("on");
		console.log("button value: " + $(".sensor").val());
		sensorPaused = false;
	}else if($(".sensor").val() == "on"){
		$(".sensor").css({"background-color": "red"});
		$(".sensor").val("off");
		console.log("button value: " + $(".sensor").val());
		sensorPaused = true;
	}
}


function sensor(){
	currentCell = retrieveCell();

	$.each(artifactIds, function( key, ids ) {
		if(!sensorPaused){
			console.log("sensor active");
			if((currentCell.x + "," + (currentCell.y+1)) == ids){$(".artifact").css({"visibility": "visible"});}
			if((currentCell.x + "," + (currentCell.y+2)) == ids){$(".artifact").css({"visibility": "visible"});}
			if((currentCell.x + "," + (currentCell.y-1)) == ids){$(".artifact").css({"visibility": "visible"});}
			if((currentCell.x + "," + (currentCell.y-2)) == ids){$(".artifact").css({"visibility": "visible"});}

			if(((currentCell.x+1) + "," + currentCell.y) == ids){$(".artifact").css({"visibility": "visible"});}
			if(((currentCell.x+2) + "," + currentCell.y) == ids){$(".artifact").css({"visibility": "visible"});}
			if(((currentCell.x-1) + "," + currentCell.y) == ids){$(".artifact").css({"visibility": "visible"});}
			if(((currentCell.x-2) + "," + currentCell.y) == ids){$(".artifact").css({"visibility": "visible"});}

			if(((currentCell.x+1) + "," + (currentCell.y+1)) == ids){$(".artifact").css({"visibility": "visible"});}
			if(((currentCell.x+1) + "," + (currentCell.y-1)) == ids){$(".artifact").css({"visibility": "visible"});}
			if(((currentCell.x-1) + "," + (currentCell.y+1)) == ids){$(".artifact").css({"visibility": "visible"});}
			if(((currentCell.x-1) + "," + (currentCell.y-1)) == ids){$(".artifact").css({"visibility": "visible"});}
		}else if(sensorPaused){
			$(".artifact").css({"visibility": "hidden"});
		}
	});
}
//I can't seem to get this to work... when I change the class name to anything else it doesnt work.
