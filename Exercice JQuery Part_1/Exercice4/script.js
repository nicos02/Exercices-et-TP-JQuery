$(document).ready(function () {
  // Sélectionne tous les paragraphes de la page
  const paragraphs = $("p"); // Parcours de chaque paragraphe

  paragraphs.each(function () {
    // Ajoute la classe "colorful-paragraph" à chaque paragraphe
    $(this).addClass("colorful-paragraph");
  });
});