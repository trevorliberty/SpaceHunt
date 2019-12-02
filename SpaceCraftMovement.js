function moveSpacecraft(angle, distance) {
  let obj = retrieveCell();
  let x = obj.x;
  let y = obj.y;
  check = JSON.parse(localStorage.getItem("wormholeFixed"));

  distance = parseInt(distance);
  if (angle === 0) {
    if (parseInt(x + distance) > size) {
      //fallen off the world
      if(check) {
        return teleportShip(0, y, obj, distance);
      }
      else {
        return random(obj, distance);
      }

    } else {
      x += distance;
    }
  } else if (angle === 90) {
    if (parseInt(y + distance) > size) {
      //fallen off the world
      //wormhole options
      if(check) {
        return teleportShip(x, 0, obj, distance);
      }
      else {
        return random(obj, distance);
      }
    } else {
      y += distance;
    }
  } else if (angle === 180) {
    if (parseInt(x - distance) < 0) {
      //fallen off the world
      if(check) {
        return teleportShip(size, y, obj, distance);
      }
      else {
        return random(obj, distance);
      }
    } else {
      x -= distance;
    }
  } else {
    //angle is 270
    if (parseInt(y - distance) < 0) {
      //fallen off the world
      if(check) {
        return teleportShip(x, size, obj, distance);
      }
      else {
        return random(obj, distance);
      }
    } else {
      y -= distance;
    }
  }

  if (x != obj.x || y != obj.y) {
    updateShip(x, y, obj);
    updateEnergy(-(distance * 10));
    updateSupplies(-2);
  }
  checkEnergy();
  checkSupplies();
  return;
  //0 is east
  //90 north
  //180 west
  //270 south
}

function random(obj, distance) {
  var size = JSON.parse(localStorage.getItem("xSize"));   //Size of current board for constraining random numbers generated
  var x = Math.floor(Math.random() * (size + 1));
  var y = Math.floor(Math.random() * (size + 1));

  return teleportShip(x, y, obj, distance);
}

function teleportShip(x, y, obj, distance) {
  updateShip(x, y, obj);
  updateEnergy(-(distance * 10));
  updateSupplies(-2);
}


//Buttons in dashboard dropdown
$("document").ready(function(){
  $('.movement').on("click", function(){
      var dis = $("#distance").val();
      var angle = $(this).val();
      console.log("Angle: " + angle);
      if(angle == "Up"){
        angle = 0;
      }else if(angle == "Down"){
        angle = 180;
      }else if(angle == "Left"){
        angle = 270;
      }else if(angle == "Right"){
        angle = 90;
      }

      if(dis > 1){
        for(var i = 0; i <= dis; ++i){
          var currentCell = retrieveCell();
          moveSpacecraft(angle,1);
          isArtifact(currentCell.x + "," + currentCell.y);
        }
      }else{
          moveSpacecraft(angle,1);
      }
      document.getElementById("ship").scrollIntoView({ behavior: "instant", block: "center" });
  })
});

//Function for the onkeydown (arrow keys)
function moveMore(angle, dis){
      if(angle == "Up"){
        angle = 0;
      }else if(angle == "Down"){
        angle = 180;
      }else if(angle == "Left"){
        angle = 270;
      }else if(angle == "Right"){
        angle = 90;
      }

      if(dis > 1){
        for(var i = 0; i < dis; ++i){
          var currentCell = retrieveCell();
          moveSpacecraft(angle,1);
          isArtifact(currentCell.x + "," + currentCell.y);
        }
      }
}
