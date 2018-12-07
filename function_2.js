var message = "hello";
function reverseString(message) {
    var arr = message.split('');
    var newArr = arr.reverse();
    var newMessage = newArr.join('');

    return newMessage;   
    
}
if (message==reverseString(message)) {
    console.log(message + '是回文串');
} else {
    console.log(message + '不是回文串');
}