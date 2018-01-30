// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWeight").value;
let color = document.getElementById("colorPicker").value;
//alert("height: "+ height +" width: "+ width);
/*
var table = document.getElementById("pixelCanvas");
var row1 = table.insertRow(0);
var row2 = table.insertRow(1);
var cell1 = row1.insertCell(0);
var cell2 = row2.insertCell(1);

 cell1.innerHTML = "   ";
 cell2.innerHTML = "   ";
return false*/

for( var r=0; r<parseInt(height);r++)
    {
    const x=document.getElementById('pixelCanvas').insertRow(r);
    for(var c=0;c<parseInt(width);c++)  
    {
      const y= x.insertCell(c);
      y.onclick = function() {
        this.style.backgroundColor = color;
    }
    }
    }

}
