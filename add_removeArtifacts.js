var celestialArtifacts = {
  planets: [],
  asteroids: [],
  stations: [],
  meteors: [],
  receip: []
};

var planetArry = [];
var asteroidArry = [];
var stationArry = [];
var meteorArry = [];
var recipeArry = [];

//Save a planet to the array of planets//
function savePlanet(id) {
  var planet = {
    Name: $("#new_planet" + id).val(),
    XCoord: parseInt($("#planetXCoord_" + id).val()),
    YCoord: parseInt($("#planetYCoord_" + id).val()),
    seen: false
  };

  var arryStr = { Planet: planet };
  planetArry.push(arryStr);
  console.log(planetArry);
}

//Remove a planet from the array of planets//
function deletePlanet(id) {
  var planet = {
    Name: $("#new_planet" + id).val(),
    XCoord: parseInt($("#planetXCoord_" + id).val()),
    YCoord: parseInt($("#planetYCoord_" + id).val()),
    seen: false
  };

  planetArry.splice(id - 1, 1);
  console.log(planetArry);
}

//Save a astriod to the array of asteriod//
function saveAsteroid(id) {
  var asteroid = {
    Name: $("#new_asteroid" + id).val(),
    XCoord: parseInt($("#asteroidXCoord_" + id).val()),
    YCoord: parseInt($("#asteroidYCoord_" + id).val()),
    seen: false
  };

  var arryStr = { Astroid: asteroid };
  asteroidArry.push(arryStr);
  console.log(asteroidArry);
}

//Remove a asteriod from the array of asteriod//
function deleteAsteroid(id) {
  var asteroid = {
    Name: $("#new_asteroid" + id).val(),
    XCoord: parseInt($("#asteroidXCoord_" + id).val()),
    YCoord: parseInt($("#asteroidYCoord_" + id).val()),
    seen: false
  };

  asteroidArry.splice(id - 1, 1);
  console.log(asteroidArry);
}

//Save a sapace station to the array of stations//
function saveStation(id) {
  var station = {
    Name: $("#new_station" + id).val(),
    XCoord: parseInt($("#stationXCoord_" + id).val()),
    YCoord: parseInt($("#stationYCoord_" + id).val()),
    seen: false
  };

  var arryStr = { Station: station };
  stationArry.push(arryStr);
  console.log(stationArry);
}

//Remove a space station from the array of stations//
function deleteStation(id) {
  var station = {
    Name: $("#new_station" + id).val(),
    XCoord: parseInt($("#stationXCoord_" + id).val()),
    YCoord: parseInt($("#stationYCoord_" + id).val()),
    seen: false
  };
  stationArry.splice(id - 1, 1);
  console.log(stationArry);
}
//Save a meteor storm to the arry of meteors
function saveMeteor(id) {
  var meteor = {
    Name: $("#new_meteor" + id).val(),
    XCoord: parseInt($("#meteorXCoord_" + id).val()),
    YCoord: parseInt($("#meteorYCoord_" + id).val()),
    seen: false
  };
  var arrStr = { Meteor: meteor };
  meteorArry.push(arrStr);
  console.log(meteorArry);
}

//Remove a meteor storm from the array of meteor
function deleteMeteor(id) {
  var meteor = {
    Name: $("#new_meteor" + id).val(),
    XCoord: parseInt($("#meteorXCoord_" + id).val()),
    YCoord: parseInt($("#meteorYCoord_" + id).val()),
    seen: false
  };
  meteorArry.splice(id - 1, 1);
  console.log(meteorArry);
}

//Adds the planet input fields to the settings.html page//
function addPlanet() {
  var newPlanetNum = parseInt($("#planets").val()) + 1;
  var newPlanetInput =
    "<div class='new_planet" +
    newPlanetNum +
    "'><input type='text' id='new_planet" +
    newPlanetNum +
    "' style='margin:10px;' placeholder='Planet Name'><input type='text'id='planetXCoord_" +
    newPlanetNum +
    "'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='planetYCoord_" +
    newPlanetNum +
    "'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='" +
    newPlanetNum +
    "' onclick='savePlanet(this.id)'>Save</a><a href='#' id='" +
    newPlanetNum +
    "' onclick='removePlanet(this.id)'>Remove</a></div>";

  $("#newPlanets").append(newPlanetInput);
  $("#planets").val(newPlanetNum);
  console.log("Added Planet" + newPlanetNum);
}

//Removes the planet input fields to the settings.html page//
function removePlanet(id) {
  var lastPlanetNum = parseInt(id);
  if (lastPlanetNum >= 1) {
    $(".new_planet" + lastPlanetNum).remove();
    $("#planets").val(lastPlanetNum - 1);
    deletePlanet(id);
    console.log("Removed Planet" + lastPlanetNum);
  }
}

//Adds the asteriod input fields to the settings.html page//
function addAsteroid() {
  var newAsteroidNum = parseInt($("#asteroids").val()) + 1;
  var newAsteroidInput =
    "<div class='new_asteroid" +
    newAsteroidNum +
    "'><input type='text' id='new_asteroid" +
    newAsteroidNum +
    "' style='margin:10px;' value='Asteroid " +
    newAsteroidNum +
    "'><input type='text'id='asteroidXCoord_" +
    newAsteroidNum +
    "'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='asteroidYCoord_" +
    newAsteroidNum +
    "'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='" +
    newAsteroidNum +
    "' onclick='saveAsteroid(this.id)'>Save</a><a href='#' id='" +
    newAsteroidNum +
    "' onclick='removeAsteroid(this.id)'>Remove</a></div>";

  $("#newAsteroids").append(newAsteroidInput);
  $("#asteroids").val(newAsteroidNum);
  console.log("Added Asteroid" + newAsteroidNum);
}

//Removes the asteorid input fields to the settings.html page//
function removeAsteroid(id) {
  var lastAsteroidNum = parseInt(id);
  if (lastAsteroidNum >= 1) {
    $(".new_asteroid" + lastAsteroidNum).remove();
    $("#asteroids").val(lastAsteroidNum - 1);
    deleteAsteroid(id);
    console.log("Removed Asteroid" + lastAsteroidNum);
  }
}

//Adds the space station input fields to the settings.html page//
function addStation() {
  var newStationNum = parseInt($("#stations").val()) + 1;
  var newStationInput =
    "<div class='new_station" +
    newStationNum +
    "'><input type='text' id='new_station" +
    newStationNum +
    "' style='margin:10px;' value='Space Station " +
    newStationNum +
    "'><input type='text'id='stationXCoord_" +
    newStationNum +
    "'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='stationYCoord_" +
    newStationNum +
    "'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='" +
    newStationNum +
    "' onclick='saveStation(this.id)'>Save</a><a href='#' id='" +
    newStationNum +
    "' onclick='removeStation(this.id)'>Remove</a></div>";

  $("#newStations").append(newStationInput);
  $("#stations").val(newStationNum);
  console.log("Added Station" + newStationNum);
}

//Removes the planet input fields to the settings.html page//
function removeStation(id) {
  var lastStationNum = parseInt(id);
  if (lastStationNum >= 1) {
    $(".new_station" + lastStationNum).remove();
    $("#stations").val(lastStationNum - 1);
    deleteStation(id);
    console.log("Removed Station" + lastStationNum);
  }
}

//Adds the meteor input fields to the settings.html page
function addMeteor() {
  var newMeteorNum = parseInt($("#meteors").val()) + 1;
  var newMeteorInput =
    "<div class='new_meteor" +
    newMeteorNum +
    "'><input type='text' id='new_meteor" +
    newMeteorNum +
    "' style='margin:10px;' placeholder='Meteor Name'><input type='text'id='meteorXCoord_" +
    newMeteorNum +
    "'style='margin:5px;' size='10' placeholder='X-Coordinate'><input type='text'id='meteorYCoord_" +
    newMeteorNum +
    "'style='margin:5px;'size='10' placeholder='Y-Coordinate'><a href='#' id='" +
    newMeteorNum +
    "' onclick='saveMeteor(this.id)'>Save</a><a href='#' id='" +
    newMeteorNum +
    "' onclick='removeMeteor(this.id)'>Remove</a></div>";

  $("#newMeteors").append(newMeteorInput);
  $("#meteors").val(newMeteorNum);
  console.log("Added Meteor" + newMeteorNum);
}

//Removes the meteor input fields to the settings.html page//
function removeMeteor(id) {
  var lastMeteorNum = parseInt(id);
  if (lastMeteorNum >= 1) {
    $(".new_meteor" + lastMeteorNum).remove();
    $("#meteors").val(lastMeteorNum - 1);
    deleteMeteor(id);
    console.log("Removed Meteor" + lastMeteorNum);
  }
}

function randomXCoord(){
  configObj = JSON.parse(localStorage.getItem("config"));
  var x = Math.floor(Math.random() * configObj.maxSize) + 1; 
  console.log("X: ", + x);
  return x;
}

function randomYCoord(){
  configObj = JSON.parse(localStorage.getItem("config"));
  var y = Math.floor(Math.random() * configObj.maxSize) + 1;
  console.log("Y: " + y);
  return y;
}

function setRecipe(){
    var recipe = {
      Name: "Koca Kola recipe",
      XCoord: parseInt(randomXCoord()),
      YCoord: parseInt(randomYCoord()),
      seen: false
  };

  var arryStr = { Recipe: recipe };
  recipeArry.push(arryStr);
  console.log(recipe);
}

function randomArtifacts(){
  //To determine how many of each artifacts should be placed into the game
  var randomNum = Math.floor(Math.random() * 10) + 1;
  console.log("Random number of artifacts: " + randomNum);
  var counter = 1;
  var i;
    for(i = 1; i <= randomNum; i++) {
      var planet = {
        Name: "Planet" + counter,
        XCoord: parseInt(randomXCoord()),
        YCoord: parseInt(randomYCoord()),
      };

      var arryStr = { Planet: planet };
      planetArry.push(arryStr);
      console.log(planetArry);

      var asteroid = {
        Name: "Asteroid" + counter,
        XCoord: parseInt(randomXCoord()),
        YCoord: parseInt(randomYCoord()),
      };

      var arryStr = { Astroid: asteroid };
      asteroidArry.push(arryStr);
      console.log(asteroidArry);

      var station = {
        Name: "Station" + counter,
        XCoord: parseInt(randomXCoord()),
        YCoord: parseInt(randomYCoord()),
      };

      var arryStr = { Station: station };
      stationArry.push(arryStr);
      console.log(stationArry);

      counter++;
    }

    setRecipe();
}

//Saves the celertial artifacts to the local storage//
function setArtifacts() {
  randomArtifacts();
  celestialArtifacts.planets = planetArry;
  celestialArtifacts.asteroids = asteroidArry;
  celestialArtifacts.stations = stationArry;
  celestialArtifacts.meteors = meteorArry;
  celestialArtifacts.recipe = recipeArry;
  localStorage.setItem(
    "celestialArtifacts",
    JSON.stringify(celestialArtifacts)
  );
  window.location.href = "SpaceHunt Core HTML.html";
}
