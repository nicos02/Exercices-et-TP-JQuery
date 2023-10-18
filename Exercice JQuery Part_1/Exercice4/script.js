// Attend que le document HTML soit entièrement chargé et prêt à être manipulé
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les paragraphes de la page
  const paragraphs = document.querySelectorAll("p");

// Cette boucle "for" permet de parcourir une collection d'éléments de paragraphe.
for (let i = 0; i < paragraphs.length; i++) {
  
    // Ajoute la classe "colorful-paragraph" à chaque paragraphe
    paragraphs[i].classList.add("colorful-paragraph");
  }
});

