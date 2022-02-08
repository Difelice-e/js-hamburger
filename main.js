// richiamo elemento menù
const hamburgerMenu = document.querySelector('.hamburger-menu'); 
// console.log(hamburgerMenu);

// richiamo elemento "icona hamburger" 
const hamburgerIcon = document.querySelector('.fas.fa-bars');
// console.log(hamburgerIcon);

// richiamo elemento "icona chiusura"
const hamburgerClose = document.querySelector('.close')
// console.log(hamburgerClose);

hamburgerIcon.addEventListener ("click",   // selezione evento "click" su icona hamburger
    function() {
        hamburgerMenu.style.display="block";   // la proprietà display block sul menù lo rende visibile
    }
);

hamburgerClose.addEventListener ("click",   // selezione evento "click" su icona di chiusura
    function() {
        hamburgerMenu.style.display="none";   // la proprità display none sul menù lo fa scomparire
    }
);






