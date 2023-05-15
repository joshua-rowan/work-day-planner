//wraps the js
$(function () {
  //this creates the var that i use to get day and date from day.js
  var currentDayData = dayjs().format("dddd, MMMM D")
  //this texts the functionality for me
  console.log(currentDayData);
  //assigns my var for the current hour so that I can highlight the time rows appropriately
  var currentHour = dayjs().hour();

  //removes any existing time classes
  $(".row").removeClass("present future past");
  
  //function to seek rows in the past
  $(".row").each(function() {
    var rowHour = parseInt($(this).attr("id").split("-")[1]);
    if (rowHour < currentHour) {
      $(this).addClass("past");
    }
  })

  //JQuery to seek current hour and apply present class
  $("#" + "hour-" + currentHour).addClass("present");

  //JQuery to seek all future hours and apply future class
  $(".row").each(function() {
    var rowHour = parseInt($(this).attr("id").split("-")[1]);
    if (rowHour > currentHour) {
      $(this).addClass("future");
    }
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // JQuery to display Current Day obtained from Day.js to html container #currentDay
  $("#currentDay").text(currentDayData);
  
  //event listner made with JQuery to fire from save button
  $(".saveBtn").on("click", function() {
    //this pulls the user's text input from the planner's textarea
    var userInput = $(this).siblings(".description").val();
    //this identifies what time block this input was put in
    var hourId = $(this).parent().attr("id");
    //this sets the hour and input to local storage
    localStorage.setItem(hourId, userInput);
    //this creates the var to get the input
    var planInput = localStorage.getItem(hourId); 
    // this prints to console so that I can test functionality
    console.log(hourId + ": " + planInput);
  });
});

