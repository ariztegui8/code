const btnPlay = document.getElementById('btnPlay')
const close = document.getElementById('close')
const videomp4 = document.querySelector('.video-mp4')
const video = document.querySelector('video');

btnPlay.addEventListener('click', ()=>{
 setTimeout(() => {
    videomp4.style.visibility = 'visible';
    videomp4.style.opacity = 1;
    video.play();
 }, 1000);
})

close.addEventListener('click', ()=>{
    videomp4.style.visibility = 'hidden';
    videomp4.style.opacity = 0;
    video.pause();
    video.currentTime = 0;
})


