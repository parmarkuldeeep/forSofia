var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;
document.addEventListener("DOMContentLoaded", function() {
    var sweetMessages = [
        "No matter the distance, you're always close to my heart.",
        "I can’t wait for the day I finally get to hold you close.",
        "Every day feels brighter knowing you’re out there.",
        "You are the reason I smile, even when we're miles apart.",
        "Even though we've never met, I feel like I’ve known you forever.",
        "I dream about the day we can finally be together.",
        "You make the world a little softer and kinder, even from afar.",
        "You’ve captured my heart, and I can’t wait to meet you in person.",
        "Our story is just beginning, and I’m excited for every chapter."
    ];

    // Function to display a sweet message
    function showSweetMessage() {
        var messageElement = document.getElementById("message");
        var randomIndex = Math.floor(Math.random() * sweetMessages.length);
        messageElement.innerHTML = sweetMessages[randomIndex];
    }

    // Call the function to display a message
    showSweetMessage();
});

// Timer function
function timer() {
    var start = new Date(2018, 0, 27, 20, 53);
    var t = new Date() - start;
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    if (h < 10) {
        h = "0" + h;
    }
    var m = Math.floor(t / 1000 / 60 % 60);
    if (m < 10) {
        m = "0" + m;
    }
    var s = Math.floor(t / 1000 % 60);
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

// Fade-in function for content
function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

// Start the intervals
var fadeInterval;
var fadeinInterval;

// Initialize the timer
timer();
setInterval(timer, 1000);

// Fade in the content
fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);

// Change sweet message every 5 seconds
setInterval(showSweetMessage, 5000);
