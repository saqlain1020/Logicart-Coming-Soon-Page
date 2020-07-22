

var video = document.querySelector('video');
var heading = document.querySelector('h1');

// video.style.display = "none";
var interval = setInterval(() => {
  console.log(heading.innerHTML);
  heading.innerHTML += "."
  if(heading.innerHTML == "Loading......")
    heading.innerHTML = "Loading"
}, 800);
video.addEventListener("canplaythrough",function(){
  clearInterval(interval);
  heading.style.fontSize = `0px`
  heading.innerHTML = "Coming Soon..."
  video.style.animation = `video 1s ease-in 1 forwards`
  heading.style.animation = `heading 600ms ease-out 10s 1 forwards`
  setTimeout(() => {
    video.play();
  }, 1000);
})
video.addEventListener("play",function(){
  
  
})


// $("video").on("loadstart", function() {
//   setTimeout(function(){
//     document.getElementById("video").play();
//   }, 200);
//   console.log("ready");
//   let heading = document.querySelector('h1');
//   heading.style.animation = `heading 600ms ease-out 10s 1 forwards`;
// });

//   import CanvasNest from 'canvas-nest.js';

// const config = {
//   color: '100,100,100',
//   count: 88,
// };

// Using config rendering effect at 'element'.

// const cn = new CanvasNest(document.querySelector('canvas'), config);

// destroy
// cn.destroy();