/* modal */

const buttonOpen = document.getElementById('modalOpen');
const buttonClose = document.getElementById('modalClose');

const modal = document.getElementById('modal');
const header = document.querySelector('.header:after');
const main = document.getElementById('main');
const footer = document.getElementById('footer');


const open = (Elm) =>{
    Elm.style.display='block';
    Elm.classList.add("fadeIn");
    Elm.classList.remove("fadeOut");
    
}

const close = (Elm) =>{
    Elm.classList.add("fadeOut");
    Elm.classList.remove("fadeIn");
    //Elm.style.display='none';
}

var y;
buttonOpen.addEventListener('click',()=>{

    y=window.scrollY;
    open(modal);
    close(main);
    close(footer);
    
});

buttonClose.addEventListener('click',()=>{
 
    close(modal);
    
    open(main);
    open(footer);

    window.scroll({
        top:y,
        behavior:"instant"
    });
    
});
