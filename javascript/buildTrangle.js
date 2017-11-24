/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
//console.log(makeLine(10));
// your code goes here.  Make sure you call makeLine() in your own code.
  function buildTriangle(width) {
    var row = ""
    for (var i = 1; i <= width; i++) {
      row += makeLine(i);
    }
    return row;
  }

console.log(buildTriangle(10));