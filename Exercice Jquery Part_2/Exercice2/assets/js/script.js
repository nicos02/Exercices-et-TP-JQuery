
$(document).ready(function() {
  // Select the image by its ID
  var image = $("#image");

  // Add a "mouseenter" event handler to the image
  image.mouseenter(function() {
    // Modify the image size (e.g., double its width)
    image.width(image.width() * 2);
  });

  // Add a "mouseleave" event handler (when the mouse leaves the image)
  image.mouseleave(function() {
    // Restore the original size of the image
    image.width(image.width() / 2);
  });
});
