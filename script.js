var apikey = '91df4711deb6a6fa8e7c694207940394218396cd'; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
var results;
function searchCallback(results) {
    console.log(results);
    for(var i=0; i < 10; i++) {
    	$(".mainList").append("<div id='" + results[i].id + "'class='col-md-4'>"+results[i].name+"</br><img id='icon' src='"+results[i].image.icon_url+"'/></br><div id='game'>Description: "+results[i].description+"</br>Release Date: "+results[i].original_release_date+"</br>Platform: "+results[i].platforms[0].name+"</div></div>");
    	$(".mainList").on("click", "#"+results[i].id, function(){
    	$(this).children().hide();
    	$(this).siblings().children("#game").hide();
    	$(this).children().slideDown();

    	});
    	}
    	
}

$(document).ready(function() {

var value;
	// Start the search here!
	$("input").on("click", function (e) {
		value = $("#searchval").val();

		search(value);
		console.log(value);
		e.preventDefault();
	});
	// search();



});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}
