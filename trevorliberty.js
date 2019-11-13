function makeboard(rows, cols) {
  const container = document.getElementById("container");
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows; c++) {
    for (j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("id", `${c + "," + j}`);
      container.appendChild(cell).className = "grid-item";
      let space = document.createElement("div");
      space.setAttribute("id", "space");
      space.style.width = "20px";
      space.style.height = "20px";
      /*let img = document.createElement("img");
      img.style.width = "100%";
      img.style.height = "auto";
      img.setAttribute("src", "./ship.png");*/
      cell.appendChild(space);
      //space.appendChild(img);
    }
  }
}

function load() {
  configObj = JSON.parse(localStorage.getItem('config'));
  localStorage.setItem("energy", configObj.energy);
  localStorage.setItem("supplies", configObj.supplies);
  localStorage.setItem("credits", configObj.credits);
  localStorage.setItem("xCoord", configObj.xCoord);
  localStorage.setItem("yCoord", configObj.yCoord);
  var dies = configObj.dies;
  localStorage.setItem("dies", JSON.stringify(dies));
  var wormholeFixed = configObj.wormholeFixed;
  localStorage.setItem("wormholeFixed", JSON.stringify(wormholeFixed));
  localStorage.removeItem('config');
  makeboard(25, 25);
}
