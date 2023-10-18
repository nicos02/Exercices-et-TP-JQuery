// Attend que le document HTML soit entièrement chargé et prêt à être manipulé
document.addEventListener('DOMContentLoaded', function() {
   // Crée et affiche 4 paragraphes
   for (let i = 0; i < 4; i++) {
     // Crée un nouvel élément de paragraphe
     var paragraph = document.createElement('p');
 
     // Définit le texte à afficher dans le paragraphe
     paragraph.textContent = 'Ceci est le paragraphe ' + (i + 1);
 
     // Ajoute le paragraphe au corps de la page
     document.body.appendChild(paragraph);
   }
 
   // Supprime le contenu des paragraphes tout en conservant les éléments
   const paragraphs = document.querySelectorAll('p');
   for (let j = 0; j < paragraphs.length; j++) {
     // Remplace le texte de chaque paragraphe par "hello world"
     paragraphs[j].textContent = 'hello world';
   }
 });
 