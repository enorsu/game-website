

function music1() {
    var myAudio = new Audio('/res/audio/waitingmusic.mp3'); 
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
}