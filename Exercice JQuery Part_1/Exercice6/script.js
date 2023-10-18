$(document).ready(function () {
  // Créer les deux paragraphes
  var paragraph1 = $("<p>");
  var paragraph2 = $("<p>"); // Ajouter du contenu aux paragraphes

  paragraph1.text("Ceci est le paragraphe 1");
  paragraph2.text("Ceci est le paragraphe 2"); // Ajouter la classe "hidden" pour cacher les paragraphes

  paragraph1.addClass("hidden");
  paragraph2.addClass("hidden"); // Ajouter les paragraphes au corps de la page

  $("body").append(paragraph1);
  $("body").append(paragraph2);
});
