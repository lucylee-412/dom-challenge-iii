const colorGrid = document.getElementById("color-grid");

let rowCount = 0; // # of displayed rows
let colCount = 0; // # of displayed cols

//let row = document.createElement("tr");
let col = document.createElement("td");




// User can add a row by clicking "Add Row" text on navigation menu

function addRow() {
    let newRow = colorGrid.insertRow(-1);
    rowCount++;

    for (let i = 0; i <= colCount; i++) {
        newRow.insertCell(i)
        let col = document.getElementsByTagName("td");
        let cell = document.createElement("span")
        cell.classList.add("cell")
        Array.from(col, i => i.appendChild(cell));
    }
}

// User cam add a column by click "Add Column" text on navigation menu

function addCol() {
    if (rowCount === 0) {
        addRow()
        return
    }
    colCount++;

    for (let i = 0; i <= rowCount; i++) {
        let row = document.getElementsByTagName("tr");
        let col = document.createElement("td");
        let cell = document.createElement("span")
        cell.classList.add("cell")
        col.appendChild(cell)
        console.log(col)
        Array.from(row, i => i.appendChild(col));
    }
}

