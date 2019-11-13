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
  localStorage.setItem("energy", "1000");
  localStorage.setItem("supplies", "100");
  localStorage.setItem("credits", "100");
  localStorage.setItem("xCoord", "0");
  localStorage.setItem("yCoord", "0");
  makeboard(25, 25);
}
