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
      return;
      9;
    } else if (e.keyCode == 37) {
      moveSpacecraft(270, 1);
      return;
      //left
    } else if (e.keyCode == 38) {
      //up
      moveSpacecraft(0, 1);
      return;
    } else if (e.keyCode == 40) {
      moveSpacecraft(180, 1);
      return;
      //down
    }
    document
      .getElementById("container")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

function makeboard(rows, cols) {
  const container = document.getElementById("container");
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = rows; c >= 0; c--) {
    for (j = 0; j < cols; ++j) {
      let cell = document.createElement("div");
      cell.setAttribute("id", `${c + "," + j}`);
      container.appendChild(cell).className = "grid-item";
      let space = document.createElement("div");
      space.setAttribute("id", "space");
      space.style.width = "20px";
      space.style.height = "20px";
      cell.appendChild(space);
    }
  }
}

function retrieveCell() {
  const xCoord = parseInt(document.getElementById("xCoord").value);
  const yCoord = parseInt(document.getElementById("yCoord").value);
  const x = document.getElementById("xCoord").value;
  const y = document.getElementById("yCoord").value;
  const id = saveCell.id;
  let obj = {
    x: xCoord,
    y: yCoord,
    id: id
  };
  return obj;
}

function updateShip(x, y, lastCell) {
  saveCell.id = lastCell.id;
  document.getElementById("xCoord").value = x;
  document.getElementById("yCoord").value = y;
  saveNode = document.getElementById("ship");
  if (saveNode !== null) {
    saveNode.id = `${lastCell.x + "," + lastCell.y}`;
  }
  let elem = getElement(x, y);
  elem.setAttribute("id", "ship");
  localStorage.setItem("xCoord", toString(x));
  localStorage.setItem("yCoord", toString(y));
}

function getElement(x, y) {
  return document.getElementById(`${x + "," + y}`);
}

function load() {
  //check first if there is a value at these localstorage items
  localStorage.setItem("energy", "1000");
  localStorage.setItem("supplies", "100");
  localStorage.setItem("credits", "100");
  localStorage.setItem("xCoord", "0");
  localStorage.setItem("yCoord", "0");
  var dies = true;
  localStorage.setItem("dies", JSON.stringify(dies));
  var wormholeFixed = true;
  localStorage.setItem("wormholeFixed", JSON.stringify(wormholeFixed));
  makeboard(25, 25);
  saveCell.id = "0,0";
  shipInit();
}

function shipInit() {
  currentCell = retrieveCell();
  let x = currentCell.x;
  let y = currentCell.y;
  updateShip(x, y, currentCell);
}

let ship = {
  xCoord: 0,
  yCoord: 0
};

function moveSpacecraft(angle, distance) {
  checkEnergy();
  checkSupplies();
  let obj = retrieveCell();
  let x = obj.x;
  let y = obj.y;

  distance = parseInt(distance);
  if (angle == 0) {
    if (parseInt(x + distance > 128)) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      x += distance;
    }
  } else if (angle == 90) {
    if (parseInt(y + distance) > 128) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      y += distance;
    }
  } else if (angle == 180) {
    if (parseInt(x - distance) < 0) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      x -= distance;
    }
  } else {
    //angle is 270
    if (parseInt(y - distance) < 0) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      y -= distance;
    }
  }

  if (x != obj.x || y != obj.y) {
    updateShip(x, y, obj);
  }
  //0 is east
  //90 north
  //180 west
  //270 south
}
