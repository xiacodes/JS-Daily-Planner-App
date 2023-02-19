$(document).ready(function () {
	// VARIABLES
	var hourRightNow = getCurrentHour();
	var timeBlocks = $(".time-block");
	var container = $(".container");

	// FUNCTION TO GO
	displayCurrentDate();
	creatingToDoList(hourRightNow, timeBlocks);
	container.on("click", ".saveBtn", newToDoItem);

	// BIG FUNCTIONS
	function creatingToDoList(hourRightNow, timeBlocks) {
		timeBlocks.each(function () {
			var listToDoItem = $(this);
			var listHour = parseInt(listToDoItem.attr("data-hour"));
			var key = "hour-" + listHour;
			var timeClass = getTimeClass(listHour, hourRightNow);
			listToDoItem.addClass(timeClass);

			var textarea = listToDoItem.children("textarea");
			var localStorageValue = localStorage.getItem(key);
			if (localStorageValue) {
				textarea.val(localStorageValue);
			}
		});
	}
	function getTimeClass(listHour, hourRightNow) {
		if (listHour === hourRightNow) {
			return "present";
		} else if (listHour < hourRightNow) {
			return "past";
		} else {
			return "future";
		}
	}
	function newToDoItem() {
		var saveButton = $(this);
		var toDoTextArea = saveButton.parent().children("textarea");
		var val = toDoTextArea.val();
		var hour = "hour-" + saveButton.parent().attr("data-hour");
		localStorage.setItem(hour, val);
	}

	// SMALL FUNCTIONS
	function displayCurrentDate() {
		var currentDateElement = $("#currentDay");
		var currentDateString = getCurrentDate();
		currentDateElement.text(currentDateString);
	}
	function getCurrentDate() {
		return moment().format("dddd, MMMM Do");
	}
	function getCurrentHour() {
		return parseInt(moment().format("H"));
	}
});
