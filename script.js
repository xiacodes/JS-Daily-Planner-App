$("document").ready(function () {
	// VARIABLES
	var timeBlocks = $(".time-block");
	var currentDay = $("#currentDay");
	var container = $(".container");
	var hourNow = parseInt(moment().format("H"));
	var currentToDoItem;
	var keyForStoring;
	var textarea;
	var textareaText;
	var keyForHour;

	// ---------------------------------------------------- //

	container.on("click", ".saveBtn", saveToDoItem);

	// FUNCTIONS
	function getTodaysDate() {
		currentDay.text(moment().format("dddd, MMMM do"));
	}

	function creatingToDoList() {
		toDoListHour = parseInt(currentToDoItem.attr("data-hour-time"));
		currentToDoItem = $("this");
		keyForStoring = "hour-" + toDoListHour;
		timeBlocks.each(function () {
			loadToDoFromStorage(keyForStoring);
			updateToDoClass(hourNow, toDoListHour, currentToDoItem);
		});
	}
	function saveToDoItem() {
		textareaText = $(this).parent().children("textarea").val();
		keyForHour = "hour-" + $(this).parent().attr("data-hour-time");
		localStorage.setItem(keyForHour, textareaText);
	}
	function loadToDoFromStorage(keyForStoring) {
		for (var i = 0; i < localStorage.length; i++) {
			if (keyForStoring === localStorage.key(i)) {
				textarea = $(this).children("textarea");
				textarea.val(localStorage.getItem(localStorage.key(i)));
			}
		}
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
