size = 20;
supplies = 0;
energy = 0;
artifacts = JSON.parse(localStorage.getItem("celestialArtifacts"));
locations = new Map();
planets = artifacts.planets;
asteroids = artifacts.asteroids;
stations = artifacts.stations;

visited = [];

if (planets) {
  for (let i = 0; i < planets.length; ++i) {
    let coordinate = planets[i].Planet.coords;
    locations.set(coordinate, "planet");
  }
}
if (asteroids) {
  for (let i = 0; i < asteroids.length; ++i) {
    let coordinate = asteroids[i].Astroid.coords;
    locations.set(coordinate, "asteroid");
  }
}
if (stations) {
  for (let i = 0; i < stations.length; ++i) {
    let coordinate = stations[i].Station.coords;
    locations.set(coordinate, "station");
  }
}
window.addEventListener("keydown", function(e) {
  if (
    (e.keyCode == 38 ||
      e.keyCode == 39 ||
      e.keyCode == 37 ||
      e.keyCode == 40) &&
    e.target == document.body
  ) {
    e.preventDefault();
  }
});
saveCell = {
  xCoord: 0,
  yCoord: 0,
  id: "0,0"
};
document.onkeydown = function(e) {
  if (
    e.keyCode === 39 ||
    e.keyCode === 38 ||
    e.keyCode === 37 ||
    e.keyCode === 40
  ) {
    if (e.keyCode == 39) {
      //right

      moveSpacecraft(90, 1);
      if(!sensorPaused){
        sensor();
      }else{
        sensorPaused = true;
        sensor();
      }
      9;
      currentCell = retrieveCell();
      if (isArtifact(currentCell.x + "," + currentCell.y)) {
        //Move back to previous CP
        moveSpacecraft(270, 1);
      }
    } else if (e.keyCode == 37) {
      //left
      moveSpacecraft(270, 1);
      if(!sensorPaused){
        sensor();
      }else{
        sensorPaused = true;
        sensor();
      }
      currentCell = retrieveCell();
      if (isArtifact(currentCell.x + "," + currentCell.y)) {
        //Move back to previous CP
        moveSpacecraft(90, 1);
      }
    } else if (e.keyCode == 38) {
      //up
      moveSpacecraft(0, 1);
      if(!sensorPaused){
        sensor();
      }else{
        sensorPaused = true;
        sensor();
      }
      currentCell = retrieveCell();
      if (isArtifact(currentCell.x + "," + currentCell.y)) {
        //Move back to previous CP
        moveSpacecraft(180, 1);
      }
    } else if (e.keyCode == 40) {
      //down
      moveSpacecraft(180, 1);
      if(!sensorPaused){
        sensor();
      }else{
        sensorPaused = true;
        sensor();
      }
      currentCell = retrieveCell();
      if (isArtifact(currentCell.x + "," + currentCell.y)) {
        //Move back to previous CP
        moveSpacecraft(0, 1);
      }
    }
    document
      .getElementById("ship")
      .scrollIntoView({ behavior: "instant", block: "center" });
  }
};

function makeboard(rows, cols) {
  const container = document.getElementById("container");
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = rows; c >= 0; c--) {
    for (j = 0; j < cols; ++j) {
      id = `${c + "," + j}`;
      let cell = document.createElement("tr");
      container.appendChild(cell).className = `grid-item ${id}`;
      cell.setAttribute("id", id);
      cell.style.width = "100px";
      cell.style.height = "100px";
    }
  }
}

function retrieveCell() {
  const xCoord = parseInt(document.getElementById("yCoord").value);
  const yCoord = parseInt(document.getElementById("xCoord").value);
  const id = saveCell.id;
  let obj = {
    x: xCoord,
    y: yCoord,
    id: id
  };
  return obj;
}

function updateShip(x, y, lastCell) {
  saveNode = document.getElementById("ship");
  let elem = getElement(x, y);
  elem.setAttribute("id", "ship");
  saveCell.id = lastCell.id;
  document.getElementById("yCoord").value = x;
  document.getElementById("xCoord").value = y;
  if (saveNode !== null) {
    saveNode.id = `${lastCell.x + "," + lastCell.y}`;
  }
  document.getElementById("log").textContent += elem.classList[1] + "\n";
}

function updateCell(x, y, cellId) {
  //send the id that you want to update the cell into here
  document.getElementById(`${x + "," + y}`);
}
function getElement(x, y) {
  return document.getElementsByClassName(`${x + "," + y}`)[0];
}

function updateEnergy(amount) {
  let elem = document.getElementById("energy");
  elem.value = parseInt(elem.value) + amount;
}
function updateSupplies(amount) {
  let elem = document.getElementById("supplies");
  elem.value = parseInt(elem.value) + amount + "%";
  supplies += amount;
}
function load() {
  configObj = JSON.parse(localStorage.getItem("config"));

  localStorage.setItem("energy", configObj.energy);
  localStorage.setItem("supplies", configObj.supplies);
  localStorage.setItem("credits", configObj.credits);
  localStorage.setItem("xCoord", configObj.xCoord);
  localStorage.setItem("yCoord", configObj.yCoord);
  localStorage.setItem("xSize", configObj.xSize);
  localStorage.setItem("ySize", configObj.ySize);
  var dies = configObj.dies;
  localStorage.setItem("dies", JSON.stringify(dies));
  var wormholeFixed = configObj.wormholeFixed;
  localStorage.setItem("wormholeFixed", JSON.stringify(wormholeFixed));

  var xSize = parseInt(localStorage.getItem("xSize"));
  var ySize = parseInt(localStorage.getItem("ySize"));

  document.getElementById("energy").value = parseInt(
    localStorage.getItem("energy")
  );
  document.getElementById("supplies").value = parseInt(
    localStorage.getItem("supplies")
  );
  document.getElementById("xCoord").value = parseInt(
    localStorage.getItem("xCoord")
  );
  document.getElementById("yCoord").value = parseInt(
    localStorage.getItem("yCoord")
  );

  size = xSize;
  makeboard(xSize, ySize + 1);
  saveCell.id = "0,0";
  energy = localStorage.getItem("energy");
  supplies = localStorage.getItem("supplies");
  //credit = localStorage.getItem("credits");
  shipInit();
  document
    .getElementById("ship")
    .scrollIntoView({ behavior: "instant", block: "center" });
}

function shipInit() {
  currentCell = retrieveCell();
  let x = currentCell.x;
  let y = currentCell.y;
  updateShip(x, y, currentCell);
}
