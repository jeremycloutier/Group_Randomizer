var theta = ["Altamir", "Anthony", "Brooks", "Charlie", "Chris", "Amber", "Kenzie", "Mark", "Joe", "Scott", "Matthew", "Natalie", "Eric", "Jeremy", "Nathan", "Robby", "Zach", "Sam", "Liz", "Paul"];
var holderTheta = ["Altamir", "Anthony", "Brooks", "Charlie", "Chris", "Amber", "Kenzie", "Mark", "Joe", "Scott", "Matthew", "Natalie", "Eric", "Jeremy", "Nathan", "Robby", "Zach", "Sam", "Liz", "Paul"];
var buttonArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
var groupNames = [];
var randomTheta = [];
var newArray = [];


$(document).ready(function(){
	
	appendButtons();

	$(".numButton").on('click', function(){
		$(".numButton").removeClass("active");
		$(this).toggleClass("active");
	});

	$("#refreshdiv").on('click', '.refresh', appendGroup);

	randomizeArray();

});


function appendButtons() {
	var $el = $('#buttoncontainer');

	for(var i = 0; i < buttonArray.length; i++){
		$el.append("<button class='numButton' data-button-num='" + buttonArray[i] + "'>" + buttonArray[i] + "</button>");
	}

	$('#refreshdiv').append("<button class='refresh'>Refresh</button>");
}


function appendGroup(){

	$("#group").empty();
	groupNames = [];

	var targetActive = $('.active').data('button-num');

	for (var i = 1; i <= targetActive; i++){
		$('#group').append("<div class='studentgroup' data-group-num=" + i + "><h4>Group " + i + "</h4></div>");
	} 

	$(".studentgroup").each(function(){
		 groupNames.push($(this).data("group-num"));
	});

	for (var j = 1; j <= groupNames.length; j++) {
		var $nel;
		$(".studentgroup").each(function() {
			if ($(this).data("group-num") == j) {
				$nel = $(this);
			}
		});

		for (var i = 0; i < (theta.length / groupNames.length); i++) {
			$nel.append("<p>" + theta[i] + "</p>");
		}
	}
}

function randomizeArray() {
	
	while(holderTheta.length != 0){
		var ranNum = randomNumber(0, (holderTheta.length - 1));
		randomTheta = holderTheta.splice(ranNum, 1)[0];
		newArray.push(randomTheta);
		console.log(newArray);

	}

}
	
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// 	// For loop that cycles through theta array and pushes/appends
// 	// student names into the group divs.


	// Reference the currently active button.								Yes!
	// Create a number of divs equal to the current button number.			Yes!
	// Inside each div, place a Group # heading at the top, and 			Yes!
	// Append (theta.length / group-num) of students, plus a remainder.		
	//   ex.) button 7:   20/7 = 






