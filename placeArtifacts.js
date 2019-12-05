var artifactIds = [];

artifactsObj = JSON.parse(localStorage.getItem("celestialArtifacts"));

//Loads the celestial artifacts from the local storage
function loadArtifacts(){
   
 	$.each(artifactsObj, function( key, value ) {
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, planet){
  					placePlanets(planet);
  					modifyArtLog(planet.Name + ":" + planet.YCoord + "," + planet.XCoord);
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, asteriod){
  					placeAsteriods(asteriod);
					  modifyArtLog(asteriod.Name + ":" + asteriod.YCoord + "," + asteriod.XCoord);
  				});
  			});
  		}else if(key == "stations"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, station){
  					placeStations(station);
					  modifyArtLog(station.Name + ":" + station.YCoord + "," + station.XCoord);
  				});
  			});
		  }else if(key == "meteors"){
        $.each(value, function(key1, value1){
          $.each(value1, function(key2, meteor){
            placeMeteors(meteor);
            modifyArtLog(meteor.Name + ":" + meteor.YCoord + "," + meteor.XCoord);
          });
        });
      }else if(key == "freighters"){
        $.each(value, function(key1, value1){
          $.each(value1, function(key2, freighter){
            placeFreighters(freighter);
            modifyArtLog(freighter.Name + ":" + freighter.YCoord + "," + freighter.XCoord);
          });
        });
      }else if(key == "recipe"){
        $.each(value, function(key1, value1){
          $.each(value1, function(key2, recipe){
            placeRecipe(recipe);
            modifyArtLog(recipe.Name + ":" + recipe.YCoord + "," + recipe.XCoord);
          });
        });
      }
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
function placeFreighters(artifact) {
    var id = (artifact.XCoord + "," + artifact.YCoord);
  rev = id 
    .split(",")
    .reverse()
    .join(",");
    console.log("Artifact: " + artifact.Name + " id: " + rev);
    
    const container = document.getElementById(id);
    let freighter = document.createElement("img");
    freighter.setAttribute("src", "freighter.png");
    freighter.style.width = "100%";
    freighter.style.visibility = "hidden";
    container.appendChild(freighter).className = `artifact`+id;
    artifactIds.push(id);
}

function isArtifact(shipId){
	returnValue = false;
 	$.each(artifactsObj, function( key, value ) {
  		if(key == "planets"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, planet){
  					var planetId = (planet.XCoord + "," + planet.YCoord);
  					if(shipId == planetId && $("#distance").val()==1){
  						//Dock at the space station  						
  						if(prompt("Would you like to land on this planet? Y or N") == 'Y'){
							updateEnergy(Math.abs($("#energy").val() - 1010));
  							var supplies = $("#supplies").val(); 
  							updateSupplies(100 - supplies + 2);
							  alert("You have landed on at the planet and have gained energy and supplies");

  						  returnValue = true;
					    }
					  }else if(shipId == planetId&& $("#distance").val() > 1){
              var ranNum = Math.floor(Math.random() * 15);
              if(ranNum >=6 ){
                alert("You have collided with a planet and have taken some damage!");
                updateEnergy(-10);
                updateSupplies(-10);
              }else{
                updateEnergy(-1000);
                updateSupplies(-100);
                alert("You have collided with a planet and your ship has blown up." + "\n" + "Game Over!");
                //game ends
                window.location.href = "index.html";
              }
					  }
  				});
  			});
  		}else if(key == "asteroids"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, asteriod){
					var asteriodId = (asteriod.XCoord + "," + asteriod.YCoord);
  					if(shipId == asteriodId && $("#distance").val() == 1){
  						returnValue = true;
  						alert("You have collided with an asteriod and have taken damage!");
  						updateEnergy(-20);
  						updateSupplies(-10);
  					}else if(shipId == asteriodId && $("#distance").val() == 1){
              var ranNum = Math.floor(Math.random() * 15);
              if(ranNum >=6 ){
                alert("You have collided with a asteriod and have taken some damage!");
                updateEnergy(-10);
                updateSupplies(-10);
              }else{
                updateEnergy(-1000);
                updateSupplies(-100);
                alert("You have collided with a asteriod and your ship has blown up." + "\n" + "Game Over!");
                //game ends
                window.location.href = "index.html";
              }
            }
  				});
  			});
      }else if(key == "meteors"){
           $.each(value, function(key1, value1){
              $.each(value1, function(key2, meteor){
                var meteorId = (meteor.XCoord + "," + meteor.YCoord);
                if(shipId == meteorId && $("#distance").val() == 1){
                  returnValue = true;
                    alert("You have been hit by a meteor storm and damaged!");
                    updateEnergy(-20);
                    updateSupplies(-10);
                }else if(shipId == meteorId && $("#distance").val() == 1){
                  var ranNum = Math.floor(Math.random() * 15);
                  if(ranNum >=6 ){
                    alert("You have collided with a meteor and have taken some damage!");
                    updateEnergy(-10);
                    updateSupplies(-10);
                  }else{
                    updateEnergy(-1000);
                    updateSupplies(-100);
                    alert("You have collided with a meteor and your ship has blown up." + "\n" + "Game Over!");
                    //game ends
                    window.location.href = "index.html";
                  }
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
  									alert("You did not win this game of chance and lost 50 credits.");
                    var credits = parseInt($("#credits").val()) - 50;
                    $("#credits").val(credits);
  								}
  							}
  						}
  						returnValue = true;
  					}else if(shipId == stationId && $("#distance").val() > 1){
              var ranNum = Math.floor(Math.random() * 15);
              if(ranNum >=6){
                alert("You have collided with a Space Sation and have taken some damage!");
                updateEnergy(-10);
                updateSupplies(-10);
              }else{
                updateEnergy(-1000);
                updateSupplies(-100);
                alert("You have collided with a Space Sation and your ship has blown up." + "\n" + "Game Over!");
                //game ends
                window.location.href = "index.html";
              }
  						returnValue = true;
  					}

  				});
  			});

      }else if(key == "freighters"){
  			$.each(value, function(key1, value1){
  				$.each(value1, function(key2, freighter){
  					var freighterId = (freighter.XCoord + "," + freighter.YCoord);
  					if(shipId == freighterId && $("#distance").val() == 1){
              if(!("energy" in freighter)){
                freighter.energy = parseInt(Math.random()*100 % 100);
                freighter.supplies= parseInt(Math.random()*100 % 100);
              }
						  //Dock at the space freighter  						
						  if("harvested" in freighter){
							  alert("You have already harvested this freighter");
						  }
  						else if(prompt(`Would you to harvest this space freighter? There is ${freighter.energy} energy and ${freighter.supplies} supplies in this freighter. Enter Y or N`) == 'Y'){
                var localEnergy=parseInt(prompt("how much energy?"));
                var localSupplies=parseInt(prompt("How much supplies?"));
                if(localEnergy > freighter.energy){
                  localEnergy = freighter.energy;
                }
                if(localSupplies > freighter.supplies){
                  localSupplies = freighter.supplies;
                }
                freighter.energy-=localEnergy;
                freighter.supplies-=localSupplies;

                updateEnergy(localEnergy);
                  var supplies = parseInt($("#supplies").val());
                  //full supplies amount
                  if(localSupplies+supplies > 100){
                    console.log(localSupplies)
                    updateSupplies(100 - supplies + 2);
                  }else{
                    updateSupplies(localSupplies)
                  }
                  if(freighter.energy === 0 && freighter.supplies === 0){
                    alert("This freighter is now completely harvested.")
                    freighter.harvested =true;
                  }else{
                    alert("You have harvested the freighter and have gained energy and supplies");
                  }
                }
              returnValue = true;
              return;
  					}else if(shipId == freighterId && $("#distance").val() > 1){
              var ranNum = Math.floor(Math.random() * 15);
              if(ranNum >=6){
                alert("You have collided with a freighter and have taken some damage!");
                updateEnergy(-10);
                updateSupplies(-10);
              }else{
                updateEnergy(-1000);
                updateSupplies(-100);
                alert("You have collided with a freighter and your ship has blown up." + "\n" + "Game Over!");
                //game ends
                window.location.href = "index.html";
              }
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
           }else if(key == "freighters"){
           $.each(value, function(key1, value1){
                  $.each(value1, function(key2, freighter){
                         var freighterId = (freighter.XCoord + "," + freighter.YCoord);
                         var flag = false;
                         if(!sensorPaused){
                         //console.log("sensor active");
                         if((currentCell.x + "," + (currentCell.y+1)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if((currentCell.x + "," + (currentCell.y+2)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if((currentCell.x + "," + (currentCell.y-1)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if((currentCell.x + "," + (currentCell.y-2)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         
                         if(((currentCell.x+1) + "," + currentCell.y) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x+2) + "," + currentCell.y) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-1) + "," + currentCell.y) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-2) + "," + currentCell.y) == freighterId){flag = true;$( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});updateSupplies(-2);}
                         
                         if(((currentCell.x+1) + "," + (currentCell.y+1)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x+1) + "," + (currentCell.y-1)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-1) + "," + (currentCell.y+1)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(((currentCell.x-1) + "," + (currentCell.y-1)) == freighterId){flag = true;$( "img[class*='"+freighterId+"']").css({"visibility": "visible"});updateSupplies(-2);}
                         if(flag === true){
                            $( "img[class*='"+freighterId+"']" ).css({"visibility": "visible"});
                            return modifyCaptLog(`Found freighter at ${freighter.YCoord+','+freighter.XCoord}`)
                            }
                        }else if(sensorPaused){
                            if(freighter.seen === false){
                                    $( "img[class*='"+freighterId+"']" ).css({"visibility": "hidden"});
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
