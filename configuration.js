var config = {
    energy : "1000",
    supplies : "100",
    credits : "100",
    xCoord : "0",
    yCoord : "0",
    dies : true,
    wormholeFixed : true,
    maxSize : "128",
};

function configure() {

    config.energy = parseInt(document.getElementById("energy").value);
    config.supplies = parseInt(document.getElementById("supplies").value);
    config.credits = parseInt(document.getElementById("credits").value);
    config.xCoord = parseInt(document.getElementById("x").value);
    config.yCoord = parseInt(document.getElementById("y").value);
    config.maxSize = parseInt(document.getElementById("maxSize").value);


    if((!document.getElementById('dying').checked && !document.getElementById('godMode').checked) || (!document.getElementById('fixedWormhole').checked && !document.getElementById('randomWormhole').checked)) {
        alert("Please select which player mode && wormhole behavior");
    }
    else {
        if(document.getElementById('dying').checked) {
            config.dies = JSON.parse(document.getElementById('dying').value);
        }
        else {
            config.dies = JSON.parse(document.getElementById('godMode').value);
        }

        if(document.getElementById('fixedWormhole').checked) {
            config.wormholeFixed = JSON.parse(document.getElementById('fixedWormhole').value);
        }
        else {
            config.wormholeFixed = JSON.parse(document.getElementById('randomWormhole').value);
        }

        localStorage.setItem('config', JSON.stringify(config));
        window.location.href = "SpaceHunt Core HTML.html";
    }


}


