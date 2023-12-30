/* modal */

const buttonOpen = document.getElementById('modalOpen');
const buttonClose = document.getElementById('modalClose');
const modalclick = document.querySelectorAll('.modalnav');

const modal = document.getElementById('modal');
const main = document.getElementById('main');
const footer = document.getElementById('footer');


const changeClass = (Elm,before,after) => {
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
const nowYear = new Date().getFullYear();

const thirtyone = ['1','3','5','7','8','10','12'];
const thirty = ['4','6','9','11'];

const createList = (l,r,elm,def) =>{
    if(def===undefined){
        for(var i=l;i<=r;i++){
            elm.innerHTML += `<option value="${i}">${i}</option>`
        }
    }else{
        for(var i=l;i<=r;i++){
            if(i === def){
                elm.innerHTML += `<option value="${i}" id="default">${i}</option>`
            }else{
                elm.innerHTML += `<option value="${i}" >${i}</option>`
            }
        }
    }
}

if(selectYear !== null){

    createList(nowYear-120,nowYear,selectYear,1990);
    createList(1,12,selectMonth);
    createList(1,31,selectDay);

    selectYear.addEventListener('focusin',()=>{
        const def = document.getElementById('default');
        def.setAttribute('selected','');
    });

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

            createList(1,num,selectDay);
        }
    })
}


/* Select */

const selects = document.querySelectorAll('.select-hidden');
if(selects !== null){
    selects.forEach((elm)=>{
        elm.addEventListener('focusin',()=>{
            elm.classList.remove('select-hidden');
        });
    });
}


/* pcs */

const decButton = document.getElementById('pcs-dec');
const incButton = document.getElementById('pcs-inc');
const pcsNum = document.getElementById('pcs-input');

if(pcsNum !== null){
    pcsNum.value = 1;
    decButton.addEventListener('click',()=>{
        if(pcsNum.vaule!==0){
            pcsNum.value--;
        }
    });

    incButton.addEventListener('click',()=>{
        if(pcsNum.value!==99){
            pcsNum.value++;
        }
    });
}


/* Product Img */

const showimages = (img,thumbnails,imagelist) =>{
    var i=1;
    imagelist.forEach((image)=>{
        if(i === 1){
            img.innerHTML += `<img src="${image}" alt="product-img${i}" class="fadeIn">`;
            thumbnails.innerHTML += `<img src="${image}" alt="product-img${i}" class="show">`;
        }else{
            img.innerHTML += `<img src="${image}" alt="product-img${i}" class="fadeOut">`;
            thumbnails.innerHTML += `<img src="${image}" alt="product-img${i}" >`;
        }
        i++;
    });
}

const getImgIndex = (list) =>{
    const num = list.length;
    for(var i=0;i<num;i++){
        if(list[i].classList.contains('show')){
            return i;
        }
    }
}


const productImg = document.getElementById('product-img');
const productThumbnails = document.getElementById('product-thumb-list');
const thumbPrev = document.getElementById('thumb-prev');
const thumbNex = document.getElementById('thumb-nex');

const imagelist1 = [
    './img/pierce2ver1.jpg',
    './img/pierce2ver2.jpg',
    './img/pierce2ver3.jpg',
    './img/pierce2ver4.jpg',
]


if(productImg !== null){
    showimages(productImg,productThumbnails,imagelist1);

    const thumbnails = document.querySelectorAll('.product-thumb-list img');
    const images = document.querySelectorAll('.product-img img');
    const num = thumbnails.length;

    for(var i=0;i<num;i++){
        thumbnails[i].addEventListener('click',function(){
            let nowIndex = getImgIndex(thumbnails);
            thumbnails[nowIndex].classList.remove('show');
            images[nowIndex].style.display='block';     
            close(images[nowIndex])

            this.classList.add('show');
            nowIndex = getImgIndex(thumbnails);
            
            open(images[nowIndex]);
        });
    }

    thumbPrev.addEventListener('click',()=>{
        let nowIndex =  getImgIndex(thumbnails);

        thumbnails[nowIndex].classList.remove('show');
        images[nowIndex].style.display='block';
        close(images[nowIndex])

        nowIndex+=num-1;
        nowIndex%=num;

        thumbnails[nowIndex].classList.add('show');
        open(images[nowIndex]);
    });

    thumbNex.addEventListener('click',()=>{
        let nowIndex =  getImgIndex(thumbnails);

        thumbnails[nowIndex].classList.remove('show');
        images[nowIndex].style.display='block';
        close(images[nowIndex])

        nowIndex++;
        nowIndex%=num;

        thumbnails[nowIndex].classList.add('show');
        open(images[nowIndex]);
    });


    







}








