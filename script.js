const colorGrid = document.getElementById("color-grid");

let rowCount = 0; // # of displayed rows
let colCount = 0; // # oof displayed cols

/* Nonworking code
let col = document.createElement("th")
let cell = document.createElement("span")
cell.classList.add("cell")
col.appendChild(cell)
*/

let row = document.createElement("tr");
let col = document.createElement("th");

// User can add a row by clicking "Add Row" text on navigation menu

function addRow() {
    colorGrid.insertRow(-1);
    rowCount++;

    for (let i = 0; i <= colCount; i++) {
        colorGrid.insertCell(i)
    }

/* Nonworking code
    let newRow = colorGrid.insertRow(-1);
    rowCount++;

    for (let i = 0; i <= colCount; i++) {
        col = newRow.insertCell(i)
        cell = document.createElement("span")
        cell.classList.add("cell")
        col.appendChild(cell)
    }
 */
}

// User cam add a column by click "Add Column" text on navigation menu

function addCol() {
    /* Nonworking code
    if (rowCount === 0) {
        addRow()
    }
    colCount++;

    let row = document.getElementsByTagName("tr");

    //for (let i = 0; i <= row.length; i++) {
     //   row[i].appendChild(col)
    //}
    */
}

