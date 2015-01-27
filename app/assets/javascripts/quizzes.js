$(document).ready(function(){
	$("button#startquiz").on("click", function(){
		event.preventDefault();
		alert("clicked!");

		$.ajax({
      url: 'http://www.google.com', // which route??? ex. quiz/new or quiz/create
      type: 'POST', // type of http verb?
      data: {}, // data sending, if any?
      // success: function(response){
      //   //what to do with the response?
      // },
      //  error: function(request, status, err){
      //    // some error handling
      //  }
    })
    .done(function() {
      alert( "success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      alert( "complete" );
    });

	});
});