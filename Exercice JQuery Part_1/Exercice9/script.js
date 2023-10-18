document.addEventListener('DOMContentLoaded', function() {
  // Créer un paragraphe
  var paragraph = document.createElement('p');
  
  // Ajouter du contenu au paragraphe
  paragraph.textContent = 'Ceci est un paragraphe.';
  
  // Ajouter la classe "hide" au paragraphe
  paragraph.classList.add('hide');
  
  // Ajouter le paragraphe au corps de la page
  document.body.appendChild(paragraph);
});