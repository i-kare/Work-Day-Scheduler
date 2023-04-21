// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();   // The current date from dayjs
  $('#currentDay').text(today.format('dddd, MMMM D')); // Replace the text of the id currentDay with formatted date
  var currentTime24Hours = today.format('HH')  
  console.log(currentTime24Hours);// 24 hour time of the current time


  var d = new Date("1/1/2013 " + "9:00 PM"); 
  console.log(d.getHours());
  // 9 -> 9
  // 10 -> 10
  // 11 -> 11
  // 12 -> 12PM
  // 13 -> 1PM
  // 14 -> 2PM
  // 15 -> 3PM
  // 16 -> 4PM
  // 17 -> 5PM

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  // How can Day.js be used to get the current hour in 24-hour time?
  var children = $(".container-lg").children()
  //console.log(children)
  for (var i = 0; i < children.length; i++) {
    let child = children[i];
    console.log(child);
   var hour = parseInt(child.getAttribute("id").split("-")[1])
    console.log(hour);
    console.log(typeof hour);
  

    
    // get child element
    // convert to 24hours
    // then compare the child's element to current time in 24 hours
      // then add class

    if (hour == currentTime24Hours) {
      console.log("Present");
      child.classList.add("present")
    } else if(hour < currentTime24Hours){
      console.log("Past");
      child.classList.add("past")
    } else if (hour > currentTime24Hours){
      console.log("Future");
      child.classList.add("future")
    }
   }
 
  //  container-lg 
    // go through all of its children
    // hour-9 to hour-5
    // compare the number with the current hour
      // if current hour is the same -> present
        // add the present class to the element
      // else if number is less than current time -> past
        // add the past class to the element
      // else -> future
        // add the future class to the element

  
//if the ID is equal to AND the same as the current current time  
  //then it is present ===
    //else
      //it is future if greater than the current time >
        //then highlight in green
      //it is pass if lesser than the current time <
        //then highlight in red

 
});




// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?