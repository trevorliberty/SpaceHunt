//Loads the celestial artifacts from the local storage
function loadArtifacts(){
  artifactsObj = JSON.parse(localStorage.getItem("celestialArtifacts"));
 
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
 	var space = get(container);
 	space.remove();
	let planet = document.createElement("img");
    planet.setAttribute("src", "planet.png");
    planet.style.width = "100%";
    container.appendChild(planet).className = `planet${id}`;
}

//Places asteriods on the map//
function placeAsteriods(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

 	const container = document.getElementById(id);
 	var space = get(container);
 	space.remove();
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
 	var space = get(container);
 	space.remove();
	let station = document.createElement("img");
    station.setAttribute("src", "station.png");
    station.style.width = "100%";
    container.appendChild(station).className = `station ${id}`;
}

//Gets the "space" div//
function get(e) {
    var div = $(e).closest('div');
    return divToRemove = div.find('#space');
}


