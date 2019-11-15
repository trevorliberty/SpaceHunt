function moveSpacecraft(angle, distance) {
  checkEnergy();
  checkSupplies();
  let obj = retrieveCell();
  let x = obj.x;
  let y = obj.y;

  distance = parseInt(distance);
  if (angle === 0) {
    if (parseInt(x + distance) > size) {
      //fallen off the world
    } else {
      x += distance;
    }
  } else if (angle === 90) {
    if (parseInt(y + distance) > size) {
      //fallen off the world
    } else {
      y += distance;
    }
  } else if (angle === 180) {
    if (parseInt(x - distance) < 0) {
      //fallen off the world
    } else {
      x -= distance;
    }
  } else {
    //angle is 270
    if (parseInt(y - distance) < 0) {
      //fallen off the world
    } else {
      y -= distance;
    }
  }

  if (x != obj.x || y != obj.y) {
    updateShip(x, y, obj);
    updateEnergy(-(distance * 10));
    updateSupplies(-2);
  }

  //0 is east
  //90 north
  //180 west
  //270 south
}
