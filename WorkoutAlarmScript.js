var startButton = document.getElementById("startWorkout");
// var hours = document.getElementById("hours");
// var minutes = document.getElementById("mins");
var seconds = document.getElementById("secs").textContent;
var breakBlock = document.getElementById("breakBlock").textContent;
var breakTime = document.getElementById("breakTime").textContent;

startButton.addEventListener("click", function(){
	countdownBy30secs();
	
	setInterval(countdownBy30secs, 45000);
})
	
function countdownBy30secs(){
	var startAt = seconds;
	//var endAt = startAt - 30;
	var countdown =	setInterval(function(){
		startAt--;
		document.getElementById("secs").textContent = startAt;
		if(startAt == 0) {
			clearInterval(countdown);
			resetAfter15secs();
			}
	}, 1000);	
}

function resetAfter15secs(){
	document.getElementById("breakBlock").innerHTML = "break for 15 seconds";

	var startAt = 15;
	document.getElementById("breakTime").textContent = startAt;
	var countdown =	setInterval(function(){
		startAt--;
		document.getElementById("breakTime").textContent = startAt;
		if(startAt == 0) clearInterval(countdown);
	}, 1000);
	
	document.getElementById("secs").textContent = 30;
}


function alertSound(){

}
