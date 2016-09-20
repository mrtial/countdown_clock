(function(){

	// store the DOM query, so don't have to do it over and over
	var $displayTime = document.getElementsByClassName("time");
	var $displayUnit = document.getElementsByClassName("unit");

	// set target time & get local timezone offset
	var target = new Date('2017-01-01');
	var localTimeOffSet = target.getTimezoneOffset(); // in minuts

	// set timer to get current time and update colck every second
	var timerID = window.setInterval(function(){
		var current = new Date();
		var remainTime = target - current + localTimeOffSet*1000*60;
		var clock = formatTime(remainTime);

		// adjust Singular
		var unit = ["DAY","HOUR","MINUTE","SECOND"];

		for(var i=0;i<4;i++){
			$displayTime[i].innerHTML = clock[i];

			if(+clock[i]<2){
				$displayUnit[i].innerHTML = unit[i];
			}
		}

	},1000)

	// format
	function formatTime(remainTime){
		var seconds = Math.floor((remainTime/1000)%60),
				minutes = Math.floor((remainTime/(1000*60))%60),
				hours = Math.floor((remainTime/(1000*60*60))%24),
				days = Math.floor((remainTime/(1000*60*60*24)))

		dyas = (days <10) ? "0"+days : days;
		hours = (hours < 10) ? "0" + hours : hours;
	  minutes = (minutes < 10) ? "0" + minutes : minutes;
	  seconds = (seconds < 10) ? "0" + seconds : seconds;

	  return [days,hours,minutes,seconds]
	}

})()