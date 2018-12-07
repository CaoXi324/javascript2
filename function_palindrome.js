var message = "hello";
function palindrome(message) {
    for (i = 0; i <= (message.length / 2); i++) {
        if (message.charAt(i) == message.charAt(message.length - 1 - i)) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(palindrome(message));
