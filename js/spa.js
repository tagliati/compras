$(document).ready(function() {

	// convert all a/href to a#href
	$("body").delegate("a", "click", function(){
		var href = $(this).attr("href"); // modify the selector here to change the scope of intercpetion
		console.log("ops");
	
		 // Push this URL "state" onto the history hash.
		$.bbq.pushState(href,2);

		// Prevent the default click behavior.
		return false;
	});
});