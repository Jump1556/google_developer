/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").children("ul");
articleItems.remove();


// Second variant to solve quiz
//articleItems = $(".article-item");
//ul = articleItems.find("ul");
//ul.remove();