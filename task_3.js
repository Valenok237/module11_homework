function sum(x) {
    return function(y) {
        return x + y;
    };
};

console.log( sum(5)(3), sum(35)(84) );