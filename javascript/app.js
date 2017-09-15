// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 
// * The game ends when the time runs out. The page will reveal the number of 

//that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.



$(document).ready(function() {
 
 var number= 30;
 var count;
 var correctAns= 0;
 var incorrectAns= 0;
 var unAnsQ= 0;

 $("#startBtn").on("click", showQuestions);
 $("#playAgain").on("click", restart);

//counts down the clock. Restarts the clock if 30 sec is up
function startClock() {
	count = setInterval(decrement,1000);
}

function decrement() {
	number--;
	$("#timer").html("<h3>" + number + " seconds" + "</h3>");
	if (number === 0) {
		stop();
		alert("Uh OH, time's up! Try again!");
		restart();
	}
}

//prevents countdown from going negative
function stop() {
	clearInterval(count);
}

//Restarting the game if user cant answer all questions
function restart() {
	location.reload();
}

//hides trivia question page when user first visits site
function hideQuestions() {
	$("#questionPage").hide();
	$("#scorePage").hide();
}
//shows trivia questions after user presses start
function showQuestions() {
	$("#questionPage").show();
	$("#start").html(questionPage);
	startClock();
}
//displays scores after user hits submit
function showScores() {
	$("#scorePage").show();
	$("#questionPage").html(scorePage);
	stop();
}

hideQuestions();

//correct answers
	var answer1= "a";
	var answer2= "d";
	var answer3= "b";
	var answer4= "c";

//function with incorrect and correct instead of separate commands
function Q1() {
	var userAnswer1 = $("input[name=q1]:checked").val() || null;
	console.log(userAnswer1);
	if (userAnswer1 === null) {
		unAnsQ++;
		$("#unanswered").text("Unanswered Questions: " + unAnsQ);
	} else if (userAnswer1 === answer1) {
		correctAns++;
		$("#correct").text("Correct Answers: " + correctAns);
	} else {
		incorrectAns++;
		$("#incorrect").text("Incorrect Answers: " + incorrectAns);
	} 
	console.log("unanswered Q: " + unAnsQ)
	console.log("correct " + correctAns);
	console.log("incorrect " + incorrectAns);
};

function Q2() {
	var userAnswer2 = $("input[name=q2]:checked").val() || null;
	console.log(userAnswer2);
	if (userAnswer2 === null) {
		unAnsQ++;
		$("#unanswered").text("Unanswered Questions: " + unAnsQ);
	} else if (userAnswer2 === answer2) {
		correctAns++;
		$("#correct").text("Correct Answers: " + correctAns);
	} else {
		incorrectAns++;
		$("#incorrect").text("Incorrect Answers: " + incorrectAns);
	} 
	console.log("unanswered Q: " + unAnsQ)
	console.log("correct " + correctAns);
	console.log("incorrect " + incorrectAns);
};

function Q3() {
	var userAnswer3 = $("input[name=q3]:checked").val() || null;
	console.log(userAnswer3);
	if (userAnswer3 === null) {
		unAnsQ++;
		$("#unanswered").text("Unanswered Questions: " + unAnsQ);
	} else if (userAnswer3 === answer3) {
		correctAns++;
		$("#correct").text("Correct Answers: " + correctAns);
	} else {
		incorrectAns++;
		$("#incorrect").text("Incorrect Answers: " + incorrectAns);
	} 
	console.log("unanswered Q: " + unAnsQ)
	console.log("correct " + correctAns);
	console.log("incorrect " + incorrectAns);
};

function Q4() {
	var userAnswer4 = $("input[name=q4]:checked").val() || null;
	console.log(userAnswer4);
	if (userAnswer4 === null) {
		unAnsQ++;
		$("#unanswered").text("Unanswered Questions: " + unAnsQ);
	} else if (userAnswer4 === answer4) {
		correctAns++;
		$("#correct").text("Correct Answers: " + correctAns);
	} else {
		incorrectAns++;
		$("#incorrect").text("Incorrect Answers: " + incorrectAns);
	} 
	console.log("unanswered Q: " + unAnsQ)
	console.log("correct " + correctAns);
	console.log("incorrect " + incorrectAns);
	showScores();
};

$(".submitForm").click(function() {
  $("#submitAnswer").on("click", Q1(), Q2(), Q3(), Q4());
});

});











