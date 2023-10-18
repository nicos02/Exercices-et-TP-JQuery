$(document).ready(function() {
  var counterValue = 0; // The counter value
  var counterDisplay = $("#counterDisplay"); // The div to display the value

  $("#incrementButton").click(function() {
    // Increment the counter value and display it
    counterValue++;
    displayCounterValue();
  });

  $("#decrementButton").click(function() {
    // Decrement the counter value (if it's greater than 0) and display it
    if (counterValue > 0) {
      counterValue--;
      displayCounterValue();
    }
  });

  function displayCounterValue() {
    // Add a paragraph with the current counter value to the counterDisplay div
    counterDisplay.append("<p>" + counterValue + "</p>");
  }

});
