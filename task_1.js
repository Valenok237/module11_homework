// Задание 1
arr = [4, '.', null, 'cat', 3];

function arrayElement() {
    for (i = 0; i <= arr.length - 1; i++) {
        if (i  == 0) {
            console.log(`${arr[i]} - нулевой элемент`);
        } else if (i % 2 == 0) {
            console.log(`${arr[i]} - чётный элемент`);
        } else {
            console.log(`${arr[i]} - нечётный элемент`);
        }
    };
};

arrayElement();







