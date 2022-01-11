const colorGrid = document.getElementById("color-grid");

let rowCount = 0;
let colCount = 0;

let row = document.getElementsByTagName("tr");


function addRow() {
    let newRow = colorGrid.insertRow(-1);
    rowCount++;

    for (let i = 0; i <= colCount; i++) {
        newRow.insertCell(i)
    }
}

function addCol() {
    colCount++;

    for (let i = 0; i <= colorGrid.rows.length; i++) {
        newRow.insertCell(colCount);
    }
}

