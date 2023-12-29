/* modal */

const buttonOpen = document.getElementById('modalOpen');
const buttonClose = document.getElementById('modalClose');
const modalclick = document.querySelectorAll('.modalnav');

const modal = document.getElementById('modal');
const main = document.getElementById('main');
const footer = document.getElementById('footer');


const changeClass = (Elm,before,after) => {
    console.log('ok');
    Elm.classList.remove(before);
    Elm.classList.add(after);
}

const open = (Elm) => { changeClass(Elm,"fadeOut","fadeIn"); }
const close = (Elm) =>{ changeClass(Elm,"fadeIn","fadeOut"); }
const pagein = (Elm) =>{ changeClass(Elm,"fadeOutpage","fadeInpage"); }
const pageout = (Elm) =>{ changeClass(Elm,"fadeInpage","fadeOutpage"); }

const handle = (event) => {
    event.preventDefault();
}

const modalopen = () => {
    open(modal);
    pageout(main);
    pageout(footer);
    document.addEventListener('touchmove', handle, { passive: false });
    document.addEventListener('mousewheel', handle, { passive: false });
}

const modalclose = () => {
    close(modal);
    pagein(main);
    pagein(footer);
    document.removeEventListener('touchmove', handle, { passive: false });
    document.removeEventListener('mousewheel', handle, { passive: false });
}

var y;
buttonOpen.addEventListener('click',()=>{
    modal.style.display = 'block';
    y=window.scrollY;
    modalopen();
});

buttonClose.addEventListener('click',()=>{
    modalclose();
    window.scroll({
        top:y,
        behavior:"instant"
    });
});

modalclick.forEach(function(Elm){
    Elm.addEventListener('click',()=>{
        modalclose();
    });
});


/* Birth */

const selectYear = document.getElementById('year');
const selectMonth = document.getElementById('month');
const selectDay = document.getElementById('day');
const now = new Date();
const nowYear = now.getFullYear();
var y = 1910;

while(y<=nowYear){
    if(y === 1990){
        selectYear.innerHTML += `<option value="${y}" id="default">${y}</option>`
    }else{
        selectYear.innerHTML += `<option value="${y}" >${y}</option>`
    }
    y++;
}

for(var i=1;i<=12;i++){
    selectMonth.innerHTML += `<option value="${i}">${i}</option>`
}

for(var i=1;i<=31;i++){
    selectDay.innerHTML += `<option value="${i}">${i}</option>`
}

selectYear.addEventListener('focusin',()=>{
    const def = document.getElementById('default');
    def.setAttribute('selected','');
});


const thirtyone = ['1','3','5','7','8','10','12'];
const thirty = ['4','6','9','11'];


selectMonth.addEventListener('click',()=>{
    selectDay.innerHTML = `<option value="" hidden>-</option>`;
    let year = selectYear.value;
    let month = selectMonth.value;
    console.log(month);
    if(year!=='-' && month!=='-'){
        let num = 0;
        if(thirtyone.includes(month)){
            num = 31;
        }else if(thirty.includes(month)){
            num = 30;
        }else if(year%400 === 0 || (year%100!==0 && year%4==0)){
            num = 29;
        }else{
            num = 28;
        }

        for(var i=1;i<=num;i++){
            selectDay.innerHTML += `<option value="${i}">${i}</option>`
        }
    }
})








/* Select */

const selects = document.querySelectorAll('.select-hidden');
console.log(selects);
for(const elm of selects){
    elm.addEventListener('focusin',()=>{
        elm.classList.remove('select-hidden');
    })
}


