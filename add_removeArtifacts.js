var celestialArtifacts = {
  planets: [],
  asteroids: [],
  stations: []
};

planetArry = [];
asteroidArry = [];
stationArry = [];

function savePlanet(id) {
  var planet = {
    Name: $("#new_planet" + id).val(),
    XCoord: parseInt($("#planetXCoord_" + id).val()),
    YCoord: parseInt($("#planetYCoord_" + id).val())
  };

  planet.coords = `${planet.XCoord + "," + planet.YCoord}`;

  var arryStr = { Planet: planet };
  planetArry.push(arryStr);
  console.log(planetArry);
}

function deletePlanet(id) {
  var planet = {
    Name: $("#new_planet" + id).val(),
    XCoord: parseInt($("#planetXCoord_" + id).val()),
    YCoord: parseInt($("#planetYCoord_" + id).val())
  };

  planetArry.splice(id - 1, 1);
  console.log(planetArry);
}

function saveAsteroid(id) {
  var asteroid = {
    Name: $("#new_asteroid" + id).val(),
    XCoord: parseInt($("#asteroidXCoord_" + id).val()),
    YCoord: parseInt($("#asteroidYCoord_" + id).val())
  };

  asteroid.coords = `${asteroid.XCoord + "," + asteroid.YCoord}`;
  var arryStr = { Astroid: asteroid };
  asteroidArry.push(arryStr);
  console.log(asteroidArry);
}

function deleteAsteroid(id) {
  var asteroid = {
    Name: $("#new_asteroid" + id).val(),
    XCoord: parseInt($("#asteroidXCoord_" + id).val()),
    YCoord: parseInt($("#asteroidYCoord_" + id).val()),
    coords: `${XCoord + "," + YCoord}`
  };

  asteroidArry.splice(id - 1, 1);
  console.log(asteroidArry);
}

function saveStation(id) {
  var station = {
    Name: $("#new_station" + id).val(),
    XCoord: parseInt($("#stationXCoord_" + id).val()),
    YCoord: parseInt($("#stationYCoord_" + id).val())
  };
  station.coords = `${station.XCoord + "," + station.YCoord}`;

  var arryStr = { Station: station };
  stationArry.push(arryStr);
  console.log(stationArry);
}

function deleteStation(id) {
  var station = {
    Name: $("#new_station" + id).val(),
    XCoord: parseInt($("#stationXCoord_" + id).val()),
    YCoord: parseInt($("#stationYCoord_" + id).val()),
    coords: `${XCoord + "," + YCoord}`
  };
  stationArry.splice(id - 1, 1);
  console.log(stationArry);
}

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

function removePlanet(id) {
  var lastPlanetNum = parseInt(id);
  if (lastPlanetNum >= 1) {
    $(".new_planet" + lastPlanetNum).remove();
    $("#planets").val(lastPlanetNum - 1);
    deletePlanet(id);
    console.log("Removed Planet" + lastPlanetNum);
  }
}

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

function removeAsteroid(id) {
  var lastAsteroidNum = parseInt(id);
  if (lastAsteroidNum >= 1) {
    $(".new_asteroid" + lastAsteroidNum).remove();
    $("#asteroids").val(lastAsteroidNum - 1);
    deleteAsteroid(id);
    console.log("Removed Asteroid" + lastAsteroidNum);
  }
}

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

function removeStation(id) {
  var lastStationNum = parseInt(id);
  if (lastStationNum >= 1) {
    $(".new_station" + lastStationNum).remove();
    $("#stations").val(lastStationNum - 1);
    deleteStation(id);
    console.log("Removed Station" + lastStationNum);
  }
}

function setArtifacts() {
  celestialArtifacts.planets = planetArry;
  celestialArtifacts.asteroids = asteroidArry;
  celestialArtifacts.stations = stationArry;

  localStorage.setItem(
    "celestialArtifacts",
    JSON.stringify(celestialArtifacts)
  );
  window.location.href = "SpaceHunt Core HTML.html";
}
