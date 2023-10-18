$(document).ready(function() {
  // Select the button by its ID
  var button = $("#monBouton");

  // Add a "click" event handler to the button
  button.click(function(event) {
    // Display the event type in an alert
    alert("Event Type: " + event.type);

    // Display the event type in the console
    console.log("Event Type: " + event.type);
  });
});

