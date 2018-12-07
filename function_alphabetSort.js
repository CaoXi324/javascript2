function alphabetSort(message) {
    var arr = message.split('');//将字符串转换为数组
    arr.sort();
    var result = arr.join('');
    return result;
}
console.log(alphabetSort('hello'));