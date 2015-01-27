var quiz;
var flashCards;
var numOfAttempts = 0;
var scores = []

function renderQuizScreen() {
	$("#quiz").empty();
	$("#quiz").append("<div>" + flashCards[0].question + "</div>");
	$("#quiz").append('<br><input id="answer-text" type="text" placeholder="type answer here"><br><br><button id="answer">Submit Answer</button>');
}

function scoring () {

	// Create a scoring function
	// 	- Calculate raw base score as 100 / # of cards
	// 	- Multiply base score by the following:
	// 		- if 0 attempted, then * 1
	// 		- if 1 attempted, then * 0.75
	// 		- if 2 attempted, then * 0.5
	// 		- if 3 or > attempts, then * 0
	// 	Multiply resulting base score by attempts by the following:
	// 		- if time taken = 0-10 seconds, then * 1
	// 		- if time taken = 11-20 seconds, then * 0.9
	// 		- if time taken = 21-30 seconds, then * 0.8
	// 		- if time taken > 30 seconds, then * 0.75

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


// A pinto bean!

	$(document).on("click", "button#answer", function(){
		event.preventDefault();


		attempt = $("#answer-text").val();

		$("#answer-text").val("");

		if (attempt == flashCards[0].answer) {
			flashCards.shift();
			renderQuizScreen();
		} else if (numOfAttempts == 2) {
			flashCards.shift();
			renderQuizScreen();
		} else {
			numOfAttempts ++;
		}

	});



});