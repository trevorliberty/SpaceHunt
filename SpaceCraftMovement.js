function moveSpacecraft(angle, distance) {
  checkEnergy();
  let xCoordloc = parseInt(document.getElementById("xCoord").value);
  let yCoordloc = parseInt(document.getElementById("yCoord").value);
  distance = parseInt(distance);
  if (angle === 0) {
    if (parseInt(xCoordloc - distance < 0)) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      xCoordloc -= distance;
      document.getElementById("xCoord").value = xCoordloc;
    }
  } else if (angle === 90) {
    if (parseInt(yCoordloc + distance) > 128) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      yCoordloc += distance;
    }
  } else if (angle === 180) {
    if (xCoordloc - distance > 128) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      xCoordloc += distance;
    }
  } else {
    //angle is 270
    if (yCoordloc - distance < 0) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      yCoordloc -= distance;
    }
  }

  document.getElementById("xCoord").value = xCoordloc;
  document.getElementById("yCoord").value = yCoordloc;

  localStorage.setItem("xCoord", toString(xCoordloc));
  localStorage.setItem("yCoord", toString(yCoordloc));
  //0 is east
  //90 north
  //180 west
  //270 south
}
