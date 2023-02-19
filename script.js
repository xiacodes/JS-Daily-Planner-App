$("document").ready(function () {
	//Variables
	var timeBlocks = $(".time-block");
	var currentDay = $("#currentDay");
	var container = $(".container");
	var hourNow = parseInt(moment().format("H"));
	var currentToDoItem;

	// ---------------------------------------------------- //

	currentDay.text(moment().format("dddd, MMMM do"));

	// FUNCTIONS
	function creatingToDoList() {
		toDoListHour = parseInt(currentToDoItem.attr("data-hour-time"));
		currentToDoItem = $("this");
		timeBlocks.each(function () {
			updateToDoClass(hourNow, toDoListHour, currentToDoItem);
		});
	}

	function updateToDoClass(hourNow, toDoListHour, currentToDoItem) {
		if (toDoListHour === hourNow) {
			currentToDoItem.addClass("present");
			currentToDoItem.removeClass("past future");
		} else if (toDoListHour < hourNow) {
			currentToDoItem.addClass("past");
			currentToDoItem.removeClass("present future");
		} else {
			currentToDoItem.addClass("future");
			currentToDoItem.removeClass("past present");
		}
	}
});
