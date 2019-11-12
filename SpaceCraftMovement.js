function moveSpacecraft(angle, distance) {
  checkEnergy();
  let xCoordloc = parseInt(document.getElementById("xCoord").value);
  let yCoordloc = parseInt(document.getElementById("yCoord").value);
  distance = parseInt(distance);
  if (angle == 0) {
    if (parseInt(xCoordloc + distance > 128)) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      xCoordloc += distance;
<<<<<<< HEAD
=======
      document.getElementById("xCoord").value = xCoordloc;
>>>>>>> origin/master
    }
  } else if (angle == 90) {
    if (parseInt(yCoordloc + distance) > 128) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      yCoordloc += distance;
      document.getElementById("yCoord").value = yCoordloc;
    }
  } else if (angle == 180) {
    if (parseInt(xCoordloc - distance) < 0) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      xCoordloc -= distance;
<<<<<<< HEAD
=======
      document.getElementById("xCoord").value = xCoordloc;
>>>>>>> origin/master
    }
  } else {
    //angle is 270
    if (parseInt(yCoordloc - distance) < 0) {
      //fallen off the world
      console.log("out of bounds");
    } else {
      yCoordloc -= distance;
      document.getElementById("yCoord").value = yCoordloc;
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
