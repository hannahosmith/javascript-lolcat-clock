var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var timeEvent = document.getElementById("timeEvent");
var catImage = document.getElementById("lolcat");
var partyButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var updateClock = function() {

  if (time == partyTime){
      messageText = "IZ PARTEE TIME!!";	catImage.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    } else if (time == napTime) {
      messageText = "IZ NAP TIME...";		catImage.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } else if (time == lunchTime) {
      messageText = "IZ NOM NOM NOM TIME!!";	catImage.src="https://i.imgur.com/dX179FP.jpg";
    } else if (time == wakeupTime) {
      messageText = "IZ TIME TO GETTUP.";
	     catImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
     } else if (time < noon) {
       messageText = "Good morning!";	catImage.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
     } else if (time > evening) {
       messageText = "Good Evening!";	catImage.src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
     } else {
       messageText = "Good afternoon!";	catImage.src="https://d.newsweek.com/en/full/1517031/tissy-swimming-cat.jpg?w=790&f=7dae03dc1dc21ec7d63cc05bfa8a939e";
     }

     timeEvent.innerText = messageText;

     var showCurrentTime = function()
     {
       // display the string on the webpage
       var clock = document.getElementById('clock');

       var currentTime = new Date();

       var hours = currentTime.getHours();
       var minutes = currentTime.getMinutes();
       var seconds = currentTime.getSeconds();
       var meridian = "AM";

       // Set hours
       if (hours >= noon)
       {
         meridian = "PM";
       }
       if (hours > noon)
       {
         hours = hours - 12;
       }

       // Set Minutes
       if (minutes < 10)
       {
         minutes = "0" + minutes;
       }

       // Set Seconds
       if (seconds < 10)
       {
         seconds = "0" + seconds;
       }

       // put together the string that displays the time
       var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

       clock.innerText = clockTime;
     };

     showCurrentTime();
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);


var partyFunction = function() {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyButton.innerText="Party Over";
		partyButton.style.backgroundColor="#222";
	}
	else {
		isPartyTime = false;
     	time = new Date().getHours();
		partyButton.innerText="Party Time!";
	partyButton.style.backgroundColor="#0A8DAB";
	}
};

partyButton.addEventListener('click',partyFunction);


var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var selectWakeUpTime = function() {
	wakeupTime = wakeUpTimeSelector.value;
};
var selectLunchTime = function() {
	lunchTime = lunchTimeSelector.value;
};
var selectNapTime = function() {
	napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change',selectWakeUpTime);
lunchTimeSelector.addEventListener('change',selectLunchTime);
napTimeSelector.addEventListener('change',selectNapTime);
