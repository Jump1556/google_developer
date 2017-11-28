/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!
*/

// don't change this variable!
var article2, article3;

article2 = $(".article-item");
article2.toggleClass('featured');
article3 = article2.next('featured');
