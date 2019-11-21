

//document.getElementById("energy") = localStorage.getItem("energy");
function saveState(){
    configure(prompt("Enter Save Name:"));
}

function configure(name) {

    var saveConfig = {};

    saveConfig.energy = document.getElementById('energy').value;
    saveConfig.supplies = document.getElementById('supplies').value;
    saveConfig.credits = document.getElementById('credits').value;
    saveConfig.xCoord = document.getElementById('xCoord').value;
    saveConfig.yCoord = document.getElementById('yCoord').value;
    saveConfig.maxSize = document.getElementById('maxSize').value;
    saveConfig.wormholeFixed = document.getElementById('wormholeFixed').value;
    saveConfig.dies = document.getElementById('dies').value;


    localStorage.setItem(name, JSON.stringify(saveConfig));
}

function loadSaveState() {
    name = prompt("Enter name to load:");
    
    configObj = JSON.parse(localStorage.getItem(name));
  
    localStorage.setItem("energy", configObj.energy);
    localStorage.setItem("supplies", configObj.supplies);
    localStorage.setItem("credits", configObj.credits);
    localStorage.setItem("xCoord", configObj.xCoord);
    localStorage.setItem("yCoord", configObj.yCoord);
    localStorage.setItem("maxSize", configObj.maxSize);
    var dies = configObj.dies;
    localStorage.setItem("dies", JSON.stringify(dies));
    var wormholeFixed = configObj.wormholeFixed;
    localStorage.setItem("wormholeFixed", JSON.stringify(wormholeFixed));
  
    var maxSize = parseInt(localStorage.getItem("maxSize"));
  
    /*  
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
    */
  
    size = maxSize;
    makeboard(maxSize, maxSize + 1);
  
    saveCell.id = "0,0";
    energy = parseInt(localStorage.getItem("energy"));
    supplies = parseInt(localStorage.getItem("supplies"));
    //credit = parseInt(localStorage.getItem("credits"));
    shipInit();
    document
      .getElementById("ship")
      .scrollIntoView({ behavior: "instant", block: "center" });
  }