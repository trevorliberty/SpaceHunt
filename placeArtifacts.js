  artifactsObj = JSON.parse(localStorage.getItem("celestialArtifacts"));

//Loads the celestial artifacts from the local storage
function loadArtifacts(){
   
 	$.each(artifactsObj, function( key, value ) {
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, value2){
  					placePlanets(value2);
  					//console.log("Name: " + value2.Name + " xCoord: " + value2.XCoord + " yCoord: " + value2.YCoord);
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, value2){
  					placeAsteriods(value2);
					//console.log("Name: " + value2.Name + " xCoord: " + value2.XCoord + " yCoord: " + value2.YCoord);
  				});
  			});
  		}else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, value2){
  					placeStations(value2);
					//console.log("Name: " + value2.Name + " xCoord: " + value2.XCoord + " yCoord: " + value2.YCoord);
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
    container.appendChild(planet).className = `planet ${id}`;
}

//Places asteriods on the map//
function placeAsteriods(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

 	const container = document.getElementById(id);
	let asteriod = document.createElement("img");
    asteriod.setAttribute("src", "asteriod.png");
    asteriod.style.width = "100%";
    container.appendChild(asteriod).className = `asteriod ${id}`;
}

//Places space stations on the map//
function placeStations(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

 	const container = document.getElementById(id);
	let station = document.createElement("img");
    station.setAttribute("src", "station.png");
    station.style.width = "100%";
    container.appendChild(station).className = `station ${id}`;
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