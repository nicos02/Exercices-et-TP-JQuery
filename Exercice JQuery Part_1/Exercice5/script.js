$(document).ready(function () {
  // Crée et affiche 4 paragraphes
  for (let i = 0; i < 4; i++) {
    // Crée un nouvel élément de paragraphe
    var paragraph = $("<p>"); // Définit le texte à afficher dans le paragraphe

    paragraph.text("Ceci est le paragraphe " + (i + 1)); // Ajoute le paragraphe au corps de la page

    $("body").append(paragraph);
  } // Sélectionne tous les paragraphes de la page

  const paragraphs = $("p"); // Supprime le contenu des paragraphes tout en conservant les éléments

  paragraphs.empty();
});
