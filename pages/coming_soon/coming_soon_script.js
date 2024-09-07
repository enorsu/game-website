



// Function to get URL parameters
function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// Function to set the title from the URL parameter
function setTitleFromParameter() {
    // Get the 'title' parameter from the URL
    const title = getURLParameter('t');
    const audio = getURLParameter("a")

    // If a title is provided, update the document title and heading
    if (title) {
        document.title = title + " - Coming Soon";
        document.getElementById('title').textContent = title + " is Coming Soon";
    }

    if (audio) {
        if (audio == "1") {
            music1();
    } else if (audio == "2") {
        music2();
    } else if (audio == "3") {
        music3();
    } else if (audio == "5") { // dd
        music5();
    }
}
}

// Call the function to set the title
setTitleFromParameter();