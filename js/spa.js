$(document).ready(function() {

	// convert all a/href to a#href
	$("body").delegate("a", "click", function(){
		var href = $(this).attr("href"); // modify the selector here to change the scope of intercpetion
		console.log("ops");
	

		return false;
	});
});