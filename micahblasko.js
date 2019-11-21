//document.getElementById("energy") = localStorage.getItem("energy");
function saveState(){
    configure(document.getElementById("savestate-name").value)
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