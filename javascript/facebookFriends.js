/*
 * Programming Quiz: Facebook Friends (7-5)
 Create an object called facebookProfile. The object should have 3 properties.
 And 4 methods.
 postMessage(message) - adds a new message string to the array
 deleteMessage(index) - removes the message corresponding to the index provided
 addFriend() - increases the friend count by 1
 removeFriend() - decreases the friend count by 1
 */

var facebookProfile = {
    name : "Anastasi Jumper",
    friends : 88,
    messages : ["I love to live", "This weekend would be fun"],
    postMessage : function(message) {
        return facebookProfile.messages.push(message) },
    deleteMessage : function(index) {
        return facebookProfile.messages.splice(index,1) },
    addFriend : function() {
        return facebookProfile.friends += 1; },
    removeFriend: function() {
        return facebookProfile.friends -= 1; }
};
console.log(facebookProfile.removeFriend());