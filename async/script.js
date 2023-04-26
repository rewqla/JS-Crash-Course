function Task1() {
    getPromise("Hi from past", 3000).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}
Task1();

function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        if (message == '')
            reject(null);
        else {
            setTimeout(() => {
                resolve(message);
            }, delay);
        }
    });
}

function Task2() {
    calcArrProduct([3, 4, 5]).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });

    calcArrProduct([3, "d", 5]).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}
Task2();

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        if (arr.some(item => typeof item !== 'number')) {
            reject('Error! Incorrect array!');
        } else {
            const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
            resolve(product);
        }
    });
}