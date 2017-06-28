const promise = require('promise');
const promise1 = new promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 3000);
});
const promise2 = new promise(function (resolve, reject) {
    setTimeout(() => {
        reject('Promise rejected');
    }, 3000);
});

promise1.then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
});
promise2.then(function (result) {
    console.log(result);
}, function (err) {
    console.log(err);
});