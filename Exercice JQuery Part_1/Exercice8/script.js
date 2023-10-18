// Attend que le document HTML soit entièrement chargé et prêt à être manipulé
document.addEventListener('DOMContentLoaded', function() {
   // Crée un conteneur <div>
   var container = document.createElement('div');
   container.classList.add('container'); // Ajoute la classe CSS "container" au conteneur
   
   // Crée trois éléments de paragraphe (<p>)
   var paragraph1 = document.createElement('p');
   var paragraph2 = document.createElement('p');
   var paragraph3 = document.createElement('p');
   
   // Ajoute du contenu aux paragraphes
   paragraph1.textContent = 'Ceci est le paragraphe 1';
   paragraph2.textContent = 'Ceci est le paragraphe 2';
   paragraph3.textContent = 'Ceci est le paragraphe 3';
   
   // Ajoute les paragraphes en tant qu'enfants du conteneur
   container.appendChild(paragraph1);
   container.appendChild(paragraph2);
   container.appendChild(paragraph3);
   
   // Ajoute le conteneur au corps de la page
   document.body.appendChild(container);
 });
 