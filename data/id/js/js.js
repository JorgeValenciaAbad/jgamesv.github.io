let video = document.querySelector("video");
document.getElementById("play").addEventListener("click",(e)=>{
    e.preventDefault();
    video.play();
});
document.getElementById("pause").addEventListener("click",(e)=>{
    e.preventDefault();
    video.pause();
});
document.getElementById("stop").addEventListener("click",(e)=>{
    e.preventDefault();
    video.pause();
    video.currentTime= 0;
});

document.getElementById("rewind").addEventListener("click",(e)=>{
    e.preventDefault();
    video.currentTime= 1;
});
