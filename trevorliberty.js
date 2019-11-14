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
  const xCoord = parseInt(document.getElementById("yCoord").value);
  const yCoord = parseInt(document.getElementById("xCoord").value);
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

function updateCell(x, y, lastCell) {
  saveCell.id = lastCell.id;
  document.getElementById("yCoord").value = x;
  document.getElementById("xCoord").value = y;
  saveNode = document.getElementById("ship");
  if (saveNode !== null) {
    saveNode.id = `${lastCell.x + "," + lastCell.y}`;
  }
  let elem = getElement(x, y);
  elem.setAttribute("id", "ship");
  localStorage.setItem("yCoord", toString(x));
  localStorage.setItem("xCoord", toString(y));
}

function getElement(x, y) {
  return document.getElementById(`${x + "," + y}`);
}

function load() {
  configObj = JSON.parse(localStorage.getItem("config"));
  document.getElementById("energy").value = configObj.energy;
  document.getElementById("supplies").value = configObj.supplies;
  // localStorage.setItem("energy", configObj.energy);
  // localStorage.setItem("supplies", configObj.supplies);
  localStorage.setItem("credits", configObj.credits);
  localStorage.setItem("xCoord", configObj.xCoord);
  localStorage.setItem("yCoord", configObj.yCoord);
  var dies = configObj.dies;
  localStorage.setItem("dies", JSON.stringify(dies));
  var wormholeFixed = configObj.wormholeFixed;
  localStorage.setItem("wormholeFixed", JSON.stringify(wormholeFixed));
  localStorage.removeItem('config');
  makeboard(25, 26);
  saveCell.id = "0,0";
  shipInit();
}

function shipInit() {
  currentCell = retrieveCell();
  let x = currentCell.x;
  let y = currentCell.y;
  updateCell(x, y, currentCell);
}

let ship = {
  xCoord: 0,
  yCoord: 0
};
