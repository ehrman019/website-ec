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


/* Birth */

const selectYear = document.getElementById('year');
const now = new Date();
const nowYear = now.getFullYear();
var year = 1910;

while(year<=nowYear){
    if(year === 1990){
        selectYear.innerHTML += `<option value="" id="default">${year}</option>`
    }else{
        selectYear.innerHTML += `<option value="">${year}</option>`
    }
    year++;
}

selectYear.addEventListener('focusin',()=>{
    const def = document.getElementById('default');
    def.setAttribute('selected','');
});


/* Select */

const selects = document.querySelectorAll('.select-hidden');
console.log(selects);
for(const elm of selects){
    elm.addEventListener('focusin',()=>{
        elm.classList.remove('select-hidden');
    })
}


