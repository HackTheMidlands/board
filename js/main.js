// Parameters
var displayTime = 10000;
var alertBackgroundColor = "#f15a22";
var normalBackgroundColor = "#2f3c63";
var alertForegroundColor = "black";
var normalForegroundColor = "white";

// Global Varibles
var countClock = document.getElementById("count-clock");
var realClock = document.getElementById("real-clock");
var announcementDiv = document.getElementById("announcement");

function updateTime(){
	var date = new Date();
	var h = date.getHours(); // 0-23 hours
	var m = date.getMinutes(); // 0-59 - minutes
	var s = date.getSeconds(); // 0-59 - seconds

	var time = (h>9?h:("0"+h)) + ":" + (m>9?m:("0"+m)) + ":" + (s>9?s:("0"+s));
	//time formatting as 2 digits

	realClock.innerText = time; // may not work in Firefox
	realClock.textContent = time; // may not work in IE

	setTimeout(updateTime,1000); // calls showRealTime after 1000 ms
}

function setDisplayTimeOnly() {

	// displays only the countdown clock and the real time clock, sets any announcement to empty string 
	countClock.style.display = "block";
	realClock.style.display = "block";
	announcementDiv.style.display = "none";
	announcementDiv.innerText = "";
	announcementDiv.textContent = "";

	//resets the size style of the clocks
	countClock.style.margin = "7vh auto 0px auto";
	countClock.style.fontSize = "15em";
	realClock.style.margin = "0px auto"; 
	realClock.style.fontSize = "3em";

	//reset page style
	document.body.style.background = normalBackgroundColor;
	document.body.style.color = normalForegroundColor;
}

function announcement(announcementText) {	
	// displays the time remaining in small, and the announcement text
	// AUTOMATICALLY RESETS AFTER TIMEOUT

	// set display
	countClock.style.display = "block";
	realClock.style.display = "none";
	announcementDiv.style.display = "block";
	announcementDiv.innerText = announcementText;
	announcementDiv.textContent = announcementText;

	// styles
	countClock.style.margin = "10vh auto 0px auto";
	countClock.style.fontSize = "5em";

	// alert colour
	document.body.style.background = alertBackgroundColor;
	document.body.style.color = alertForegroundColor;

	setTimeout(setDisplayTimeOnly, displayTime);

}

function main() { // the display board logic
	updateTime(); // the timers are always updated;
	setDisplayTimeOnly(); // always start on default display
	announcement("Sample Announcemnt Text");
	//setTimeout(function() {announcement("Text");}, 1000);
}

main(); // always run main to start service

