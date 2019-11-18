
function loadArtifacts(){
  artifactsObj = JSON.parse(localStorage.getItem("celestialArtifacts"));
 
 	$.each(artifactsObj, function( key, value ) {
 		console.log(value);
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, value2){
  					placeArtifacts(value2);
  					console.log("Name: " + value2.Name + " xCoord: " + value2.XCoord + " yCoord: " + value2.YCoord);
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, value2){
					//console.log("Name: " + value2.Name + " xCoord: " + value2.XCoord + " yCoord: " + value2.YCoord);
  				});
  			});
  		}else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, value2){
					//console.log("Name: " + value2.Name + " xCoord: " + value2.XCoord + " yCoord: " + value2.YCoord);
  				});
  			});

		};

 	});
 }


function placeArtifacts(artifact) {

	var id = (artifact.XCoord + "," + artifact.YCoord);
	console.log("id: " + id);

}

