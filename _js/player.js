var myVideo=document.getElementById("videoPlayer");
var audio = document.getElementById('videoPlayer');
var isPlaying = false;

function play() {
if (isPlaying) {
myVideo.pause()
} else {
myVideo.play();
}
};
myVideo.onplaying = function() {
isPlaying = true;
};
myVideo.onpause = function() {
isPlaying = false;
}

function ampliar(){
  document.getElementById("videoPlayer").style.width = "1100px";
}    
  
function reduzir(){
  document.getElementById("videoPlayer").style.width ="600px";
}

function telaNormal(){
  document.getElementById("videoPlayer").style.width ="800px";
}

function telaCheia(){
    var elem = document.getElementById("videoPlayer");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
 } 

function maisVolume(){
    if( audio.volume < 1)  audio.volume += 0.1;
    
}

function menosVolume(){
    if( audio.volume > 0)  audio.volume -= 0.1;
    
}
     
function semVolume(){
    if( audio.muted ){
        audio.muted = false;
    }else{
        audio.muted = true;
    }
}

//https://pt.stackoverflow.com/questions/259046/bot%C3%A3o-play-pause-como-reiniciar-a-reprodu%C3%A7%C3%A3o
//https://www.botecodigital.dev.br/javascript/controlando-o-elemento-audio-do-html5-com-javascript/
//https://qastack.com.br/programming/1055214/is-there-a-way-to-make-html5-video-fullscreen 
