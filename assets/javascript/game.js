$(document).ready(function() {

var rubyPoints = 0;
var diamondPoints = 0;
var citrinePoints = 0;
var emeraldPoints = 0;

// Game Counters
var randomNum = 0;
var winCount = 0;
var lossCount = 0;
var totalScore = 0;

function startGame() {
	totalScore = 0;
	randomNum = Math.floor(Math.random() * 102 + 19);
	rubyPoints = Math.floor(Math.random() * 12 + 1);
	diamondPoints = Math.floor(Math.random() * 12 + 1);
	citrinePoints = Math.floor(Math.random() * 12 + 1);
	emeraldPoints = Math.floor(Math.random() * 12 + 1);


	$("#ruby").click(function() {
		totalScore += rubyPoints;
		console.log(rubyPoints);
		console.log(totalScore);
		document.getElementById("totalCount").innerHTML = totalScore;
		roundComplete();
	})

	$("#diamond").click(function() {
		
		totalScore += diamondPoints;
		console.log(diamondPoints);
		console.log(totalScore);
		document.getElementById("totalCount").innerHTML = totalScore;
		roundComplete();
	})

	$("#citrine").click(function() {
		
		totalScore += citrinePoints;
		console.log(citrinePoints);
		console.log(totalScore);
		document.getElementById("totalCount").innerHTML = totalScore;
		roundComplete();
	})

	$("#emerald").click(function() {
		
		totalScore += emeraldPoints;
		console.log(emeraldPoints);
		console.log(totalScore);
		document.getElementById("totalCount").innerHTML = totalScore;
		roundComplete();
	})

	document.getElementById("totalCount").innerHTML = totalScore; // For when first sets up
	document.getElementById("randNum").innerHTML = randomNum;
	
}

function roundComplete() {

	if (totalScore === randNum) {
		winCount++;
		document.getElementById("winLose").innerHTML = "You Win" ;

		document.getElementById("winsCounter").innerHTML = winCount;
		startGame();
	} else if (totalScore > randomNum) {
		lossCount++;
		document.getElementById("winLose").innerHTML = "You Lose" ;

		document.getElementById("lossesCounter").innerHTML = lossCount;
		startGame();
	}
}

startGame();

})