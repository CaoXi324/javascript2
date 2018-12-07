var message = "hello";
function reverseString(message) {
    var num = message.length; var newMessage = '';
    for (i = 0; i <= num; i++) {
        newMessage += message.charAt(num - i);// wirte your code here
    }
    return newMessage;
}
console.log(reverseString(message));