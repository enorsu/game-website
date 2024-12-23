
var myAudio;

function playmusic(location, volume) {
    myAudio = new Audio(location); 
    myAudio.volume = volume;
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
}


function music1() {playmusic("/res/audio/waitingmusic.mp3", 0.2);}

function music2() {playmusic("/res/audio/gta_iv.mp3", 0.2);}

function music3() {playmusic("/res/audio/red_sun.mp3", 0.2);}

function music4() {playmusic("/res/audio/mva-cover1.mp3", 0.5);}

function music5() {playmusic("/res/audio/m_music1.mp3", 0.5);}

function music6() {playmusic("/res/audio/overwatch_1.mp3", 0.5);} //fuck my first javascript ever UPDATE: didnt work :(

function music7() {playmusic("/res/audio/suomi.mp3", 0.5);}

function music8() {playmusic("/res/audio/wait_01.mp3", 0.5);}

function music69() {playmusic("/res/audio/69.mp3", 0.5);}

function stopmusic() {
    if (myAudio) {
        myAudio.pause();         // Pause the audio
        myAudio.currentTime = 0; // Reset the playback position to the start
        myAudio = null;          // Clear the audio object
        btn1.style.display = "none";
    } else {
        console.log("no audio playing");
        btn1.style.display = "none";
    }
}



// for the button id: mute
const btn1 = document.getElementById("mute");
btn1.addEventListener("click", stopmusic);