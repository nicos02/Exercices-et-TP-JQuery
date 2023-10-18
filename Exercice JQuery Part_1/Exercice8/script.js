$(document).ready(function () {
  
  // Crée un conteneur <div> avec la classe "container"
  var container = $("<div>").addClass("container"); 
  
  // Crée trois éléments de paragraphe (<p>)
  var paragraph1 = $("<p>");
  var paragraph2 = $("<p>");
  var paragraph3 = $("<p>"); 

  // Ajoute du contenu aux paragraphes

  paragraph1.text("Ceci est le paragraphe 1");
  paragraph2.text("Ceci est le paragraphe 2");
  paragraph3.text("Ceci est le paragraphe 3"); 
  
  // Ajoute les paragraphes en tant qu'enfants du conteneur

  container.append(paragraph1);
  container.append(paragraph2);
  container.append(paragraph3); 
  
  // Ajoute le conteneur au corps de la page

  $("body").append(container);
});
