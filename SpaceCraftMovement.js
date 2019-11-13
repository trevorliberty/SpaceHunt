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
    updateCell(x, y, obj);
  }
  //0 is east
  //90 north
  //180 west
  //270 south
}
