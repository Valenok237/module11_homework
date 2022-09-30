function isPrime(num) {
    if (num < 2 || num > 1000) {
        return console.log('ответ неверный');
    };
    
    for (let i = 2; i <= num / 2; i+=1) {
        if (num % i === 0) {
            return console.log('ответ неверный');
        }; 
    };

    return console.log('простое число')
};

isPrime();