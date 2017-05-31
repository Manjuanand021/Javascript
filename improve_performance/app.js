// function scrollHandler() {
//     console.log('Yuppieeee');
// }

// // window.onscroll = _.debounce(scrollHandler, 3000);
// window.onscroll = _.throttle(scrollHandler, 3000);


//##############################
// Animation starts - requestAnimationFrame
//##############################

// var start = null;
// var element = document.getElementById('SomeElementYouWantToAnimate');
// element.style.position = 'absolute';

// // Takes in the timestamp of the current frame
// function step(timestamp) {
//     if (!start) start = timestamp;

//     console.log('start-', start);
//     console.log('timestamp-', timestamp);
//     // calculate total time passed
//     var progress = timestamp - start;

//     // get the number of pixels the element should move every frame
//     element.style.left = Math.min(progress / 10, 500) + 'px';

//     // only animate if time passed is lesser than 2000ms or 2 seconds
//     if (progress < 2000) {
//         window.requestAnimationFrame(step);
//     }   
// }
// window.requestAnimationFrame(step);

//##############################
// Animation starts - requestAnimationFrame
//##############################