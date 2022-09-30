const intervalId = setInterval(function(a,b) {
    i = a;
    m = b;
    while(i <= m) {
        console.log(i++);
    };
}, 1000, 3, 8,);