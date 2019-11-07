function makeboard(rows, cols){
    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};
function load(){
    localStorage.setItem('health', '100');
    localStorage.setItem('supplies', '100');
    localStorage.setItem('credits', '100');
    localStorage.setItem('xCoordinate', '0'); 
    localStorage.setItem('yCoordinate', '0');
    makeboard(5,5);
}
