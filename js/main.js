function updateTime(){
	var date = new Date();
	var h = date.getHours(); // 0-23 hours
	var m = date.getMinutes(); // 0-59 - minutes
	var s = date.getSeconds(); // 0-59 - seconds

	var time = (h>9?h:("0"+h)) + ":" + (m>9?m:("0"+m)) + ":" + (s>9?s:("0"+s));
	//time formatting as 2 digits

	document.getElementById("real-clock").innerText = time; // may not work in Firefox
	document.getElementById("real-clock").textContent = time; // may not work in IE

	setTimeout(updateTime,1000); // calls showRealTime after 1000 ms
}

function setDisplayTimeOnly() {
	var normalColor = "#2f3c63";

	var countClock = document.getElementById("count-clock");
	var realClock = document.getElementById("real-clock");
	var announcement = document.getElementById("announcement");

	// displays only the countdown clock and the real time clock, sets any announcement to empty string 
	countClock.style.display = "block";
	realClock.style.display = "block";
	announcement.style.display = "none";
	announcement.innerText = "";
	announcement.textContent = "";

	//resets the size style of the clocks
	countClock.style.margin = "20vh auto 0px auto";
	countClock.style.fontSize = "15em";
	realClock.style.margin = "0px auto"; 
	realClock.style.fontSize = "3em";

	//reset page style
	document.body.style.background = normalColor;
}

function announcement(announcementText) {	
	// displays the time remaining in small, and the announcement text
	// AUTOMATICALLY RESETS AFTER TIMEOUT
	var displayTime = 10000;
	var alertColor = "#f15a22";
	var normalColor = "#2f3c63";

	var countClock = document.getElementById("count-clock");
	var realClock = document.getElementById("real-clock");
	var announcement = document.getElementById("announcement");

	// set display
	countClock.style.display = "block";
	realClock.style.display = "none";
	announcement.style.display = "block";
	announcement.innerText = announcementText;
	announcement.textContent = announcementText;

	// styles
	countClock.style.margin = "10vh auto 0px auto";
	countClock.style.fontSize = "5em";

	// alert colour
	document.body.style.background = alertColor;

	setTimeout(setDisplayTimeOnly, displayTime);

}

function main() { // the display board logic
	updateTime(); // the timers are always updated;
	setDisplayTimeOnly(); // always start on default display
	setTimeout(function() {announcement("Text");}, 1000);
}

main(); // always run main to start service

