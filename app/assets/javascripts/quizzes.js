var quiz;
var flashCards;
var numOfAttempts;

function renderQuizScreen() {
	$("#quiz").empty();
	$("#quiz").append("<div>" + flashCards[0].question + "</div>");
	$("#quiz").append('<br><input id="answer-text" type="text" placeholder="type answer here"><br><br><button id="answer">Submit Answer</button>');
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

		$("#answer-text").val() = "";


		if (attempt == flashCards[0].answer) {
			flashCards.shift();

		}

	});



});