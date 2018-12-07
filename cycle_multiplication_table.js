for (i = 1; i <= 9; i++) {
    for (j = 1; j <= i; j++) {
        document.write(i + '*' + j + '=' + i * j);
        document.write('&nbsp;&nbsp');
    }
    document.write('<br/>');
}