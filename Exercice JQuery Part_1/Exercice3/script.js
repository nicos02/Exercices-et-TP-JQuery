// Attend que le document HTML soit entièrement chargé et prêt à être manipulé
document.addEventListener('DOMContentLoaded', function() {
   // Crée un nouvel élément input
   var inputElement = document.createElement('input');

   // Définit l'attribut type de l'élément input sur "text"
   inputElement.setAttribute('type', 'text');

   // Définit l'attribut value de l'élément input sur "HelloWorld"
   inputElement.setAttribute('value', 'HelloWorld');

   // Ajoute l'élément input au corps de la page
   // document.body.appendChild est utilisé pour ajouter un élément en tant qu'enfant du corps de la page.
   document.body.appendChild(inputElement);

   // Récupère la valeur de l'élément input
   var value = inputElement.value;

   // Affiche la valeur dans une boîte d'alerte
   alert(value);

   // Affiche la valeur dans la console
   console.log(value);
});
