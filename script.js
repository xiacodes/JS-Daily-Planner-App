$("document").ready(function () {
	//Variables
	var timeBlocks = $(".time-block");
	var currentDay = $("#currentDay");
	var container = $(".container");
	var hourNow = parseInt(moment().format("H"));
	var currentToDoItem = parseInt(moment().format("H"));

	// ---------------------------------------------------- //

	currentDay.text(moment().format("dddd, MMMM do"));

	// FUNCTIONS
	function creatingToDoList() {
		timeBlocks.each(function () {});
	}

	function updateToDoClass(toDoHour) {
		if (toDoHour === hourNow) {
			toDo.addClass("present").removeClass("past future");
		} else if (toDoHour < hourNow) {
			toDo.addClass("past").removeClass("present future");
		} else {
			toDo.addClass("future").removeClass("past present");
		}
	}
});
