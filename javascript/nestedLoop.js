/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for (var rows = 0; rows < 26; rows++) {
    for (var seats =0; seats < 100; seats++) {
        console.log(rows + "-" + seats);
    }
}
