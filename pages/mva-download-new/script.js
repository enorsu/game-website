

function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}


function checkIfNoAudioFromUrl() {
    const audio = getURLParameter("noaudio")
    if (audio == "true") {
        
    } else {
        music2();
    }
}

checkIfNoAudioFromUrl();