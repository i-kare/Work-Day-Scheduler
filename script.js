// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs(); // The current date from dayjs
  $("#currentDay").text(today.format("dddd, MMMM D")); // Replace the text of the id currentDay with formatted date
  var currentTime24Hours = today.format("HH"); //the current time in 24 hour format
  var children = $(".container-lg").children(); //children of section class titled container-lg


  //For loop that goes through the children then gets the attribute that corresponds to each child by id 
  //Each id attributes is the hour
  for (var i = 0; i < children.length; i++) {
    let child = children[i];
    var hour = parseInt(child.getAttribute("id").split("-")[1]);


    //classifying children by comparing the current time to the class time
    if (hour == currentTime24Hours) {
      child.classList.add("present");
    } else if (hour < currentTime24Hours) {
      child.classList.add("past");
    } else if (hour > currentTime24Hours) {
      child.classList.add("future");
    }
  }

  //saves information inputted by user into local storage for each time block
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var id = event.currentTarget.id;
    var hour = parseInt(id.split("-")[1]);
    var textHour = `#text-${hour}`;
    var textAreaVal = $(textHour).val();

    localStorage.setItem(textHour, textAreaVal);
  });

  //For loop that checks local storage via timeblock key for saved text
  // if there's saved text then we replace each hour's text with that saved text 
  for (let i = 9; i < 18; i++) {
    if (localStorage.getItem(`#text-${i}`) !== null) {
      $(`#text-${i}`).val(localStorage.getItem(`#text-${i}`));
    }
  }
});