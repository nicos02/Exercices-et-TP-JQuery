// Attend que le document soit entièrement chargé et prêt à être manipulé
$(document).ready(function() {
   // Sélectionne l'élément avec l'ID "title" et le stocke dans la variable "element"
   var element = $("#title");

   // Remplace le contenu de l'élément avec un paragraphe contenant le texte "Texte du paragraphe"
   element.html("<p>Texte du paragraphe</p>");

   // Crée un nouvel élément h1 avec le texte "Mon titre H1"
   var nouveauElement = $("<h1>Mon titre H1</h1>");

   // Remplace l'élément sélectionné ("#title") par le nouvel élément h1
   element.replaceWith(nouveauElement);
});
