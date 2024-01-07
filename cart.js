/* Cart */

const cartPrice = document.querySelectorAll('.cart-price');
const cartPcs = document.querySelectorAll('.pcs-input');
const cartSubtotal = document.querySelectorAll('.cart-subtotal');
const cartTotal = document.getElementById('cart-total');

const calcPrice = () =>{

    if(cartPrice === null) return;
    

    let sum = 0;

    const sz = cartPrice.length;
    
    for(let i=0;i<sz;i++){

        const p = cartPrice[i].getAttribute('data-price');
        const num = cartPcs[i].value;

        cartSubtotal[i].innerText = new Intl.NumberFormat().format(p*num);

        sum += p*num;

    }
    
    cartTotal.innerText = new Intl.NumberFormat().format(sum);
    
    
}

calcPrice();

const cartButton = document.getElementById('cart-calc-button');

cartButton.addEventListener('click',()=>{
    calcPrice();
});