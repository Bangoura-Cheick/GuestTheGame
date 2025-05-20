// // Améliorer le jeu du “Devine Le nombre”:

// // Le joueur a le droit à 3 essais. Si il dépasse ce nombre, le jeu recommence.
// // Exercice
// // 
// // XT Le jeu choisira un nombre aléatoire entre 1 et 10 (inclus)T
// let min=1;
// let max= 10;
// let essaie=3
// //  Tu as trois essais pour deviner ce nombre
// let 
// function lancerJeu(nombre) {
// }
// // FUtilise la fonction prompt() pour saisir ta proposition de 
// // nombreT
// // 3T Si ton nombre est égal au nombre mystère, tu gagnes !  
// // Sinon tu dois retenter ta chance. Au bout de trois essais, tu 
// // as perd u et le jeu recommencP
// let max=10;
// let essaiMax=3;

// function devineNombre() {
// let choixOrdi = Math.floor(Math.random() * 10) + 1;

//     for (let saisie = 3; saisie > 0; saisie--) {

//         let choixUser =parseInt(prompt(`devine le nombre Essais  restants :${essai}`));
//         if (choixUser === choixOrdi) {
//             alert("Bravo! tu as deviné le nombre mystère");
//             return;// on arrete la fonction car il a gagné
//         }
//         else {
//             alert("raté");

//         }

//     }

//  alert(`Dommage t'as perdu le nombre mystère était${choixOrdi} `);

// }


// devineNombre();
function guessNum(){

    const nombre = Math.floor(Math.random() * 10) + 1;
    console.log(nombre);
    
    for (let index = 0; index < 3; index++) {
        const dialogue = prompt("choisie un nombre entre 1 entre 10");


        if (nombre == dialogue) {
            alert("tu as reussie");
            return;

        } else {
            alert("tu as perdu ");
            
        }
    }
    alert("le nombre mystère était"+nombre);
    guessNum()
}
guessNum()