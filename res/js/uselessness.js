
const secret_btn = document.getElementById("nodas");
secret_btn.addEventListener("click", sdfkljsdklfj);


const secret = document.getElementById("secret");
var playerEl


function sdfkljsdklfj() {
    applyThings();
    var sound      = document.createElement('audio');
    sound.id       = 'audio-player';
    sound.controls = 'controls';
    sound.src      = '/res/audio/pig.mp3';
    sound.type     = 'audio/mpeg';
    sound.style    = 'display: none';

    document.getElementById("secret").appendChild(sound);
    playerEl = document.getElementById("audio-player");
    
    playerEl.play();
    
    
}


function applyThings() {
    secret_btn.style.display = "none";
    secret.innerHTML = "you got trolled xDDD";

}

function stopskksksksks() {
    document.getElementById("audio-player").pause();
}