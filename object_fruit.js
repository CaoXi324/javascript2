var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var value = Object.values(fruit);
 var sum = value.reduce(function(a, b) {
     return a + b;
 }, 0);
console.log(sum);