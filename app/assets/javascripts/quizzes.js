var quiz;
var rawScorePerCard;
var flashCards;
var numOfAttempts = 0;
var scores = []
var startTime;

function renderQuizScreen() {
	$("#quiz").empty();
	startTime = Date.now();
	$("#quiz").append("<div>" + flashCards[0].question + "</div>");
	$("#quiz").append('<br><input id="answer-text" type="text" placeholder="type answer here"><br><br><button id="answer">Submit Answer</button>');
}

function scoring (timeTaken, attempts) {
	var score = rawScorePerCard

	if (attempts == 1) {
		score = score * 0.75;
	} else if (attempts == 2) {
		score = score * 0.5;
	}

	// requirements don't account for in between 10-11secs and 20-21secs

	if (timeTaken > 10.0 && timeTaken < 20.0) {
		score = score * 0.9;
	} else if (timeTaken > 21.0 && timeTaken < 30.0) {
		score = score * 0.8;
	} else if (timeTaken > 30) {
		score = score * 0.75
	}

	return score;

}

$(document).ready(function(){
	$("button#startquiz").on("click", function(){
		event.preventDefault();

		$.ajax({
      url: 'quizzes/new',
      type: 'GET',
    })
    .done(function(response) {
      quiz = response.quiz;
      flashCards = response.flash_cards;
      rawScorePerCard = 100 / flashCards.length;

      $("#topheading").text("Now take Quiz #" + quiz.id);
      $("#quiz").empty();
      $("#flash-cards-menu").remove();

      renderQuizScreen();
      
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });
	});

	$(document).on("click", "button#answer", function(){
		event.preventDefault();

		if (flashCards.length > 1) {
			attempt = $("#answer-text").val();

			$("#answer-text").val("");

			if (attempt == flashCards[0].answer) {

				var endTime = Date.now();

				var totalTimeInSeconds = (endTime - startTime)/1000;

				scores.push(scoring(totalTimeInSeconds));

				console.log(scores);

				flashCards.shift();
				renderQuizScreen();
			} else if (numOfAttempts == 2) {
				flashCards.shift();
				renderQuizScreen();
			} else {
				numOfAttempts ++;
			}

		console.log(flashCards.length);

		} else {
			// render endQuiz
		}


	});



});