// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()


function makeGrid() {
//declare size and color variables 
const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWeight").value;
let color;
const colorGrid = document.getElementById("colorPickerGrid").value;
const canvas = document.getElementById('pixelCanvas');

//prevent duplication of grid
for (let r = 0; r < canvas.rows.length; r++) {
    canvas.deleteRow(r)
}

//creating grid
for( var r=0; r<parseInt(height);r++)
    {
    const x = canvas.insertRow(r);
    for(var c = 0; c < parseInt(width); c++)  
    {
        const y = x.insertCell(c);
        //x.onmouseover = function() {
        //    this.style.backgroundColor = colorGrid;
        //}
        y.onclick = function() {
            color = document.getElementById("colorPicker").value;
            this.style.backgroundColor = color;
            }
    }}

//painting grid
canvas.style.backgroundColor = colorGrid;
}


function clearGrid() {
    //declare table and color variables
    const canvas = document.getElementById('pixelCanvas');
    const colorGrid = document.getElementById("colorPickerGrid").value;
    
    //reseting color of table
    for (let r = 0; r < canvas.rows.length; r++) {
        for (let c = 0; c < canvas.rows[r].cells.length; c++) {
            canvas.rows[r].cells[c].style.backgroundColor = colorGrid;
        }
    }    
} 

