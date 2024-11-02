function btn1() {
	window.open('avengers.html', '_blank')
}

function btn2() {
	window.open('spiderman.html', '_blank')
}

function btn3() {
	window.open('strange.html', '_blank')
}

function btn4() {
	window.open('batman.html', '_blank')
}

function btn5() {
	window.open('captain.html', '_blank')
}

function btn6() {
	window.open('ironman.html', '_blank')
}


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/serviceworker.js")
        .then((req) => console.log("Service Worker Registered", req))
        .catch((err) => console.log("Service Worker registration failed", err));
    
}