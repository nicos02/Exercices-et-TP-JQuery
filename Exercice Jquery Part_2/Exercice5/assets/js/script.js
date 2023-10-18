$(document).ready(function() {
  var myInput = $("#myInput");

  // Event handler for focus - Add green border
  myInput.focus(function() {
    myInput.css("border", "2px solid green");
  });

  // Event handler for blur - Add red border
  myInput.blur(function() {
    myInput.css("border", "2px solid red");
  });
});