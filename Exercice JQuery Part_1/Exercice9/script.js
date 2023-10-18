$(document).ready(function () {
  // Crée un paragraphe
  var paragraph = $("<p>"); 
  
  // Ajoute du contenu au paragraphe

  paragraph.text("Ceci est un paragraphe."); 
  
  // Ajoute la classe "hide" au paragraphe

  paragraph.addClass("hide"); 
  
  // Ajoute le paragraphe au corps de la page

  $("body").append(paragraph);
});
