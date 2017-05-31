// //Promises -  natively available in Javascript
// if (window.Promise) {
//     console.log('yes browser supports promises');
//     //Create promise
//     var promise = new Promise((resolve, reject) => {
//         var xmlHttpRequest = new XMLHttpRequest();
//         xmlHttpRequest.open('GET', 'http://api.icndb.com/jokes/random');
//         xmlHttpRequest.onload = function (event) {
//             if (this.status === 200) {
//                 resolve(JSON.parse(this.responseText)); // we got data here, so resolve the Promise
//             } else
//                 reject(Error(this.statusText)); // status is not 200 OK, so reject
//         }
//         xmlHttpRequest.onerror = function () {
//             reject(Error('Error fetching the data')); // error occurred, reject the  Promise 
//         }
//         xmlHttpRequest.send(); //send the request
//     });
//     console.log('Asynchronous request made.');
//     // promise.then((data) => {
//     //     console.log('Recieved data - ', data);
//     // }, (error) => {
//     //     console.log('Error - ', error);
//     // });
//     //  another way of implementing then
//     promise.then((data) => {
//         console.log(data.value.joke.replace('Chuck Norris', 'Rajanikant'));
//         // console.log(data.value.joke);
//     }).catch((error) => {
//         console.log(`Error - `, error);
//     })
// } else
//     console.log('no browser does not support promises');

function scrollHandler() {
    console.log('Yuppieeee');
}

window.onscroll = function () {
    scrollHandler();
}