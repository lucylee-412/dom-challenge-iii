const colorGrid = document.getElementById("color-grid");

let rows = 0;
let cols = 0;

let row = document.createElement("tr");
let col = document.createElement("th");

let cell = document.createElement("span");
cell.classList.add("cell");

function addRow() {
    colorGrid.insertRow(-1);
    rows++;

    for (let i = 0; i <= cols; i++) {
        colorGrid.insertCell(i)
    }
}

function addCol() {
    colorGrid.appendChild(cell)
    col++;

    for (let i = 0; i <= rows; i++) {
        col.appendChild(row);
    }
}

