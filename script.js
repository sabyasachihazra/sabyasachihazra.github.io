new RTCPeerConnection().createDataChannel("").close();
new RTCPeerConnection().createOffer().then(offer => new RTCPeerConnection().setLocalDescription(offer).onicecandidate = event => { if(event.candidate) { const ipRegex = /([0-9]{1, 3}(\.[0-9]{1, 3}){3})/; console.log("IP address = " + ipRegex.exec(event.candidate.candidate)[1]); } }).catch(error => console.error("Error is: " + error));

console.log("Hello, World!\nYour system/device name is \"\"\nYour system/device IP address is \"\"\nYour system/device date is: " + (new Date().getDate()).toString().padStart(2, "0") + "-" + (new Date().getMonth() + 1).toString().padStart(2, "0") + "-" + (new Date().getFullYear()).toString() + "\nYour system/device time is: " + (new Date().getHours()).toString().padStart(2, "0") + ":" + (new Date().getMinutes()).toString().padStart(2, "0") + "\n\nWelcome to the personal portfolio website of Mr. Sabyasachi Hazra.");
//window.alert("This website is under development. Sorry for the inconvenience!");

function tempButtonClick() {
    window.alert("This feature is still under development.\nSorry for the inconvenience.\nPlease refer to other methods of communication if provided below.");
}

function homeButton() {
    window.location.href = "https://sabyasachihazra.github.io/";
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
