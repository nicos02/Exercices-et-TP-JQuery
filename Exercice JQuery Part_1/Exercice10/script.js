$(document).ready(function() {
  // Crée un élément h1
  var heading = $('<h1></h1>');
  
  // Ajoute du contenu à l'élément h1
  heading.text('Titre H1');
  
  // Ajoute la classe "resize-animation" à l'élément h1
  heading.addClass('resize-animation');
  
  // Ajoute l'élément h1 au corps de la page
  $('body').append(heading);
});