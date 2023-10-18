$(document).ready(() => {
  // Select buttons with the "color-button" class
  $(".color-button").click(function() {
    // Get the color from the "data-color" attribute of the clicked button
    var color = $(this).data("color");
    // Change the text color of the title
    $("#mainTitle").css("color", color);
  });
});