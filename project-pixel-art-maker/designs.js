// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWeight").value;
const color = document.getElementById("colorPicker").value;
const colorGrid = document.getElementById("colorPickerGrid").value;


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
    const x = document.getElementById('pixelCanvas').insertRow(r);
    for(var c = 0; c < parseInt(width); c++)  
    {
        const y = x.insertCell(c);
        //x.onmouseover = function() {
        //    this.style.backgroundColor = colorGrid;
        //}
        y.onclick = function() {
            this.style.backgroundColor = color;
            }
    }}


            /*else if(this.style.backgroundColor == color){ 
                this.style.backgroundColor = colorGrid;
            }

            else{
                console.log("ColourGrid " + this.style.backgroundColor.value);    
                console.log("ColourCell " + color);
                this.style.backgroundColor = color;
            }*/
   

document.getElementById("pixelCanvas").style.backgroundColor = colorGrid;

}

/*function clearGrid() {
alert("hi");    
const colorGrid = document.getElementById("colorPickerGrid").value;
const canvas = document.getElementById("pixelCanvas")
console.log(colorGrid)
document.getElementById("clearGrid").onclick = function() {
    console.log("hello")
    canvas.style.backgroundColor = colorGrid;
}
} */