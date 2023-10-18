// Attend que le document soit entièrement chargé et prêt à être manipulé
$(document).ready(function() {
   // Sélectionne l'élément avec l'ID "text" et le stocke dans la variable "element"
   var element = $("#text");

   // Ajoute le texte "Lorem ipsum dolor sit amet, consectetur adipiscing elit." à l'élément sélectionné
   element.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
});
