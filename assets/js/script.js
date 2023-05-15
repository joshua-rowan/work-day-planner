//wraps the js
$(function () {
  //this creates the var that i use to get day and date from day.js
  var currentDayData = dayjs().format("dddd, MMMM D")
  //this texts the functionality for me
  console.log(currentDayData);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // JQuery to display Current Day obtained from Day.js to html container #currentDay
  $("#currentDay").text(currentDayData);
  
  //event listner made with JQuery to fire from save button
  $(".saveBtn").on("click", function(saveTask) {
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

