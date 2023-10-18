document.addEventListener('DOMContentLoaded', function() {
   // Créer les deux paragraphes
   var paragraph1 = document.createElement('p');
   var paragraph2 = document.createElement('p');
   
   // Ajouter du contenu aux paragraphes
   paragraph1.textContent = 'Ceci est le paragraphe 1';
   paragraph2.textContent = 'Ceci est le paragraphe 2';
   
   // Ajouter la classe "hidden" pour cacher les paragraphes
   paragraph1.classList.add('hidden');
   paragraph2.classList.add('hidden');
   
   // Ajouter les paragraphes au corps de la page
   document.body.appendChild(paragraph1);
   document.body.appendChild(paragraph2);
});
