

function playmusic(location, volume) {
    var myAudio = new Audio(location); 
    myAudio.volume = volume;
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
}


function music1() {playmusic("/res/audio/waitingmusic.mp3", 0.2);}

function music2() {playmusic("/res/audio/gta_iv.mp3", 0.2);}

