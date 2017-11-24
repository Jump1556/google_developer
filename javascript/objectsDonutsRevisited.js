/*
 * Programming Quiz: Donuts Revisited (7-6)
 Use the forEach() method to loop over the array and print out the following
 donut summaries using console.log.
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(item, index, array) {
    console.log(donuts[index].type + " donuts cost $" + donuts[index].cost + " each");
});
