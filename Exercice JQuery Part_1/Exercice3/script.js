$(document).ready(function () {
  // Crée un nouvel élément input
  var inputElement = $("<input>"); // Définit l'attribut type de l'élément input sur "text"

  inputElement.attr("type", "text"); // Définit l'attribut value de l'élément input sur "HelloWorld"

  inputElement.val("HelloWorld"); // Ajoute l'élément input au corps de la page

  $("body").append(inputElement); // Récupère la valeur de l'élément input

  var value = inputElement.val(); // Affiche la valeur dans une boîte d'alerte

  alert(value); // Affiche la valeur dans la console

  console.log(value);
});
