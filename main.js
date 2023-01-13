// // # Instructions :
// // >*Mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*
// // >*Cherche des methodes pour résoudre les énoncés suivants :*


// // ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa classe.

let tartine = document.getElementsByClassName('tartine')[0];
console.log(tartine.innerHTML);

// // ### 2. Affiche le contenu textuel du premier paragraphe contenant l'id "toast", utilise une méthode pour récupérer un élémént via son id.

let toast = document.getElementById('toast');
console.log(toast.innerHTML);

// // ### 3. Affiche le dernier élément ayant la classe tartine ( pas son contenu, l'élément entier)

let tartines = document.getElementsByClassName('tartine');
console.log(tartines[tartines.length - 1].innerHTML);