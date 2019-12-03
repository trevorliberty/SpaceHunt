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
		  }else if(key == "recipe"){
            console.log("KEY: " + key);
                $.each(value, function(key1, value1){
                       $.each(value1, function(key2, recipe){
                              placeRecipe(recipe);
                              });
                       });
           }else if(key == "meteors"){
           $.each(value, function(key1, value1){
                  $.each(value1, function(key2, meteor){
                         placeMeteors(meteor);
                         });
                  });
           };
  });
}

//Places planets on the map//
function placePlanets(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
  rev = id 
    .split(",")
    .reverse()
    .join(",");
	console.log("Artifact: " + artifact.Name + " id: " + rev);

 	const container = document.getElementById(id);
	let planet = document.createElement("img");
    planet.setAttribute("src", "planet.png");
    planet.style.width = "100%";
    planet.style.visibility = "hidden";
    container.appendChild(planet).className = `artifact`+id;
    artifactIds.push(id);
}

//Places asteriods on the map//
function placeAsteriods(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
  rev = id 
    .split(",")
    .reverse()
    .join(",");
	console.log("Artifact: " + artifact.Name + " id: " + rev);

 	const container = document.getElementById(id);
	let asteriod = document.createElement("img");
    asteriod.setAttribute("src", "asteriod.png");
    asteriod.style.width = "100%";
    asteriod.style.visibility = "hidden";
    container.appendChild(asteriod).className = `artifact`+id;
    artifactIds.push(id);
}

//Places space stations on the map//
function placeStations(artifact) {
	var id = (artifact.XCoord + "," + artifact.YCoord);
  rev = id 
    .split(",")
    .reverse()
    .join(",");
	console.log("Artifact: " + artifact.Name + " id: " + rev);

 	const container = document.getElementById(id);
	let station = document.createElement("img");
    station.setAttribute("src", "station.png");
    station.style.width = "100%";
    station.style.visibility = "hidden";
    container.appendChild(station).className = `artifact`+id;
    artifactIds.push(id);
}

//Places space stations on the map//
function placeRecipe(artifact) {
  var id = (artifact.XCoord + "," + artifact.YCoord);
  rev = id 
    .split(",")
    .reverse()
    .join(",");
  console.log("Artifact: " + artifact.Name + " id: " + rev);

  const container = document.getElementById(id);
  let recipe = document.createElement("img");
    recipe.setAttribute("src", "recipe.png");
    recipe.style.width = "100%";
    recipe.style.visibility = "hidden";
    container.appendChild(recipe).className = `artifact`+id;
    artifactIds.push(id);
}

//Places Meteor Storm on the map
function placeMeteors(artifact) {
    var id = (artifact.XCoord + "," + artifact.YCoord);
  rev = id 
    .split(",")
    .reverse()
    .join(",");
    console.log("Artifact: " + artifact.Name + " id: " + rev);
    
    const container = document.getElementById(id);
    let meteor = document.createElement("img");
    meteor.setAttribute("src", "meteor.png");
    meteor.style.width = "100%";
    meteor.style.visibility = "hidden";
    container.appendChild(meteor).className = `artifact`+id;
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
  						alert("You have collided with a planet and have taken damage!");
  						updateEnergy(-20);
  						updateSupplies(-10);
  					}
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, asteriod){
					var asteriodId = (asteriod.XCoord + "," + asteriod.YCoord);
  					if(shipId == asteriodId){
  						returnValue = true;
  						alert("You have collided with an asteriod and have taken damage!");
  						updateEnergy(-20);
  						updateSupplies(-10);
  					}
  				});
  			});
           }else if(key == "meteors"){
           $.each(value, function(key1, value1){
                  $.each(value1, function(key2, meteor){
                    var meteorId = (meteor.XCoord + "," + meteor.YCoord);
                    if(shipId == meteorId){
                         returnValue = true;
                         alert("You have been hit by a meteor storm and damaged!");
                         updateEnergy(-20);
                         updateSupplies(-10);
                        }
                    });
                  });
           }else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, station){
  					var stationId = (station.XCoord + "," + station.YCoord);
  					if(shipId == stationId && $("#distance").val() == 1){
  						//Dock at the space station  						
  						if(prompt("Would you like to dock with this space station? Y or N") == 'Y'){
							updateEnergy(Math.abs($("#energy").val() - 1010));
  							var supplies = $("#supplies").val(); 
  							updateSupplies(100 - supplies + 2);
  							alert("You have docked at the space station and have gained energy and supplies");
  							//Game of chance -- picks a random number between 1 and 15, if it is higher than 7, you win
  							if(prompt("Would you like to play a game of chance to gain some credits? Y or N") == 'Y'){
  								var ranNum = Math.floor(Math.random() * 15);
  								if(ranNum >= 8){
  									var credits = parseInt($("#credits").val()) + 100;
  									$("#credits").val(credits);
  									alert("Congrats! You earned 100 credits.");
  								}else{
  									alert("You did not win this game of chance.");
  								}
  							}
  						}
  						returnValue = true;
  					}else if(shipId == stationId && $("#distance").val() > 1){
  						alert("You have collided with a Space Sation and have taken some damage!");
  						updateEnergy(-10);
  						updateSupplies(-10);
  						returnValue = true;
  					}

  				});
  			});

		}else if(key == "recipe"){
        $.each(value, function(key1, value1){
          $.each(value1, function(key2, recipe){
            var recipeId = (recipe.XCoord + "," + recipe.YCoord);
            if(shipId == recipeId && $("#distance").val() == 1){
              //Pick up the recipe            
              alert("Congratulations!"+ "\n" + "You have found the recipe and have won the game!");
              //game ends
              window.location.href = "index.html";
            }
          });
        });
    };
 	});
 	return returnValue;
}

sensorPaused = true;
//setInterval(sensor, 500);
function sensorOnOff(){
	if($("#sensor").val() == "off"){
		$("#sensor").css({"background-color": "green"});
		$("#sensor").val("on");
		//console.log("button value: " + $("#sensor").val());
		sensorPaused = false;
		sensor();
	}else if($("#sensor").val() == "on"){
		$("#sensor").css({"background-color": "red"});
		$("#sensor").val("off");
		//console.log("button value: " + $("#sensor").val());
		sensorPaused = true;
		//sensor();
	}
}

function sensor(){
	currentCell = retrieveCell();
	shipId = (currentCell.x + "," + currentCell.y);
	showArtifact(shipId);
}

function showArtifact(shipId){
	returnValue = false;
 	$.each(artifactsObj, function( key, value ) {
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, planet){
					  var planetId = (planet.XCoord + "," + planet.YCoord);
					  var flag=false;
  					if(!sensorPaused){
					//console.log("sensor active");
						if((currentCell.x + "," + (currentCell.y+1)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y+2)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y-1)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y-2)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2); }

						if(((currentCell.x+1) + "," + currentCell.y) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x+2) + "," + currentCell.y) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + currentCell.y) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-2) + "," + currentCell.y) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

						if(((currentCell.x+1) + "," + (currentCell.y+1)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x+1) + "," + (currentCell.y-1)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + (currentCell.y+1)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + (currentCell.y-1)) == planetId){flag = true;$( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

						if(flag === true){
              $( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});
							return modifyCaptLog(`Found planet at ${planet.YCoord+','+planet.XCoord}`)
						}
					}else if(sensorPaused){
						if(planet.seen === false){
							$( "img[class*='"+planetId+"']" ).css({"visibility": "hidden"});
						}else{
              $( "img[class*='"+planetId+"']" ).css({"visibility": "visible"});
            }
					}
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, asteriod){
					var asteriodId = (asteriod.XCoord + "," + asteriod.YCoord);
					  var flag = false;
					if(!sensorPaused){
					//console.log("sensor active");
						if((currentCell.x + "," + (currentCell.y+1)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y+2)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y-1)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y-2)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

						if(((currentCell.x+1) + "," + currentCell.y) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x+2) + "," + currentCell.y) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + currentCell.y) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-2) + "," + currentCell.y) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

						if(((currentCell.x+1) + "," + (currentCell.y+1)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x+1) + "," + (currentCell.y-1)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']") 	.css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + (currentCell.y+1)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + (currentCell.y-1)) == asteriodId){flag = true;$( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(flag === true){
              $( "img[class*='"+asteriodId+"']" ).css({"visibility": "visible"});
							return modifyCaptLog(`Found asteroid at ${asteriod.YCoord+','+asteriod.XCoord}`)
						}
					}else if(sensorPaused){
						if(asteriod.seen === false)
							$( "img[class*='"+asteriodId+"']" ).css({"visibility": "hidden"});
					}
  				});
  			});
  		}else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, station){
					  var stationId = (station.XCoord + "," + station.YCoord);
					  var flag = false;
  					if(!sensorPaused){
					//console.log("sensor active");
						if((currentCell.x + "," + (currentCell.y+1)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y+2)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y-1)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if((currentCell.x + "," + (currentCell.y-2)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

						if(((currentCell.x+1) + "," + currentCell.y) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x+2) + "," + currentCell.y) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + currentCell.y) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-2) + "," + currentCell.y) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

						if(((currentCell.x+1) + "," + (currentCell.y+1)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x+1) + "," + (currentCell.y-1)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + (currentCell.y+1)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(((currentCell.x-1) + "," + (currentCell.y-1)) == stationId){flag = true;$( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
						if(flag === true){
                            $( "img[class*='"+stationId+"']" ).css({"visibility": "visible"});
							return modifyCaptLog(`Found station at ${station.YCoord+','+station.XCoord}`)
						}
					}else if(sensorPaused){
						if(station.seen===false){
							$( "img[class*='"+stationId+"']" ).css({"visibility": "hidden"});
						}
					}

  				});
  			});

           }else if(key == "meteors"){
           $.each(value, function(key1, value1){
                  $.each(value1, function(key2, meteor){
                         var meteorId = (meteor.XCoord + "," + meteor.YCoord);
                         var flag = false;
                         if(!sensorPaused){
                         //console.log("sensor active");
                         if((currentCell.x + "," + (currentCell.y+1)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if((currentCell.x + "," + (currentCell.y+2)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if((currentCell.x + "," + (currentCell.y-1)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if((currentCell.x + "," + (currentCell.y-2)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         
                         if(((currentCell.x+1) + "," + currentCell.y) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x+2) + "," + currentCell.y) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-1) + "," + currentCell.y) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-2) + "," + currentCell.y) == meteorId){flag = true;$( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         
                         if(((currentCell.x+1) + "," + (currentCell.y+1)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x+1) + "," + (currentCell.y-1)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-1) + "," + (currentCell.y+1)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-1) + "," + (currentCell.y-1)) == meteorId){flag = true;$( "img[class*='"+meteorId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(flag === true){
                            $( "img[class*='"+meteorId+"']" ).css({"visibility": "visible"});
                            return modifyCaptLog(`Found meteor at ${meteor.YCoord+','+meteor.XCoord}`)
                            }
                        }else if(sensorPaused){
                            if(meteor.seen === false){
                                    $( "img[class*='"+meteorId+"']" ).css({"visibility": "hidden"});
                                }
                            }
                         });
                  });
           }else if(key == "recipe"){
        $.each(value, function(key1, value1){
          $.each(value1, function(key2, recipe){
            var recipeId = (recipe.XCoord + "," + recipe.YCoord);
            var flag = false;
            if(!sensorPaused){
              //console.log("sensor active");
            if((currentCell.x + "," + (currentCell.y+1)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if((currentCell.x + "," + (currentCell.y+2)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if((currentCell.x + "," + (currentCell.y-1)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if((currentCell.x + "," + (currentCell.y-2)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

            if(((currentCell.x+1) + "," + currentCell.y) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if(((currentCell.x+2) + "," + currentCell.y) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if(((currentCell.x-1) + "," + currentCell.y) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if(((currentCell.x-2) + "," + currentCell.y) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}

            if(((currentCell.x+1) + "," + (currentCell.y+1)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if(((currentCell.x+1) + "," + (currentCell.y-1)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if(((currentCell.x-1) + "," + (currentCell.y+1)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
            if(((currentCell.x-1) + "," + (currentCell.y-1)) == recipeId){flag = true;$( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                if(flag === true){
                  $( "img[class*='"+recipeId+"']" ).css({"visibility": "visible"});
                  return modifyCaptLog(`Found Recipe at ${recipe.YCoord+','+recipe.XCoord}`)
                }
            }else if(sensorPaused){
              if(recipe.seen===false){
                $( "img[class*='"+recipeId+"']" ).css({"visibility": "hidden"});
              }
            }

          });
        });
      };
 	});
}
