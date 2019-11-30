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
    saveConfig.maxSize = parseInt(localStorage.getItem('maxSize'));
    saveConfig.wormholeFixed = localStorage.getItem('wormholeFixed');
    saveConfig.dies = localStorage.getItem('dies');
    saveConfig.celestialArtifacts = JSON.parse(localStorage.getItem("celestialArtifacts"));

    localStorage.setItem(name, JSON.stringify(saveConfig));
}
function loadSaveState() {

    name = prompt("Enter name to load:");

    if(name == 'null') {
        return;
    }
    else if(!localStorage.getItem(name)) {
        alert(name + " could be found.")
        return;
    } else {
        localStorage.removeItem('config');
        configObj = JSON.parse(localStorage.getItem(name));
        localStorage.setItem('config', JSON.stringify(configObj));
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
        localStorage.setItem("celestialArtifacts", JSON.stringify(configObj.celestialArtifacts));

        window.location.href = "SpaceHunt Core HTML.html";

        document.getElementById("energy").value = parseInt(
            localStorage.getItem("energy")
        );
        document.getElementById("supplies").value = parseInt(
            localStorage.getItem("supplies")
        );
        document.getElementById("credits").value = parseInt(
            localStorage.getItem("credits")
        );
        document.getElementById("xCoord").value = parseInt(
            localStorage.getItem("xCoord")
        );
        document.getElementById("yCoord").value = parseInt(
            localStorage.getItem("yCoord")
        );

        size = maxSize;
        makeboard(maxSize, maxSize + 1);

        saveCell.id = "0,0";

        energy = parseInt(localStorage.getItem("energy"));
        supplies = parseInt(localStorage.getItem("supplies"));
        credits = parseInt(localStorage.getItem("credits"));

        shipInit();
        document
            .getElementById("ship")
            .scrollIntoView({ behavior: "instant", block: "center" });
        window.location.href = "SpaceHunt Core HTML.html";
    }

}