/* Add item in cart */


const addCart = document.querySelector('.add-cart');
const itemQty = document.querySelector('.item-quantity');

let productsInCart = 0;

addCart.addEventListener('click', () => {
    itemQty.style.display = 'flex';
    itemQty.innerHTML =  productsInCart + productValue;
})

/* Add item in cart */


/* Open cart */

const shoppingCartIcon = document.querySelector('.shopping-cart-icon');
const cart = document.querySelector('.cart-of-items');
const cartInfo = document.querySelector('.cart-info');
const hiddenContainer = document.querySelector('.hidden-container');
const body = document.querySelector('body')
const emptyCart = document.querySelector('.empty-cart');
const goBackBtn = document.querySelector('.go-back');
const addCartInfo = document.querySelector('.addcart-info');


shoppingCartIcon.addEventListener('click', () => {
    if (itemQty.style.display !== 'flex') {
        addCartInfo.style.display = 'flex';
        cart.style.display = 'flex';
        emptyCart.style.display = 'flex';
        hiddenContainer.style.display = 'block';
        hiddenContainer.style.opacity = '1';
        body.style.overflow = "hidden";
        goBackBtn.style.marginTop = '-150px';
    } else {
        addCartInfo.style.display = 'flex';
        cart.style.display = 'flex';
        cartInfo.style.display = 'flex';
        hiddenContainer.style.display = 'block';
        hiddenContainer.style.opacity = '1';
        body.style.overflow = "hidden";
        let cartProductNumber = itemQty.innerHTML;
        cartProductNumber = parseInt(cartProductNumber);
        itemNum.innerHTML = cartProductNumber;
        cartProductQty.innerHTML = cartProductNumber;
        total.innerHTML = `$${price * cartProductNumber}`;
        goBackBtn.style.marginTop = '-150px';
    }
})

/* Open cart */


/* Cart product numbers */

const total = document.querySelector('.total-price');
const itemNum = document.querySelector('.item-number');

let price = total.innerHTML;
let cartProductValue = 1;

const cartBtnMinus = document.querySelector('.cart-minus');
const cartBtnPlus = document.querySelector('.cart-plus');
const cartProductQty = document.querySelector('.cart-qty');

cartProductQty.innerHTML = 1;

cartBtnMinus.addEventListener('click', () => {
    setCartProductCounter(-1);
    itemNum.innerHTML = cartProductValue;
    total.innerHTML = `$${price * cartProductValue}`;
});


cartBtnPlus.addEventListener('click', () => {
    setCartProductCounter(1);
    itemNum.innerHTML = cartProductValue;
    total.innerHTML = `$${price * cartProductValue}`;
});


function setCartProductCounter(value) {
    if ((cartProductValue+value)>=1) {
        cartProductValue+=value;
        cartProductQty.innerHTML=cartProductValue;
    }
}

/* Cart product numbers */


/* Product numbers */

let productValue= 1;

const btnMinus = document.querySelector('.minus');
const btnPlus = document.querySelector('.plus');
const productQty = document.querySelector('.qty');

btnMinus.addEventListener('click', () => {
    setProductCounter(-1);
});
btnPlus.addEventListener('click', () => {
    setProductCounter(1);
});

function setProductCounter(value) {
    if ((productValue+value)>=1) {
        productValue+=value;
        productQty.innerHTML=productValue;
    }
}

/* Product numbers */


/* Clean cart */

const cleanCart = document.querySelector('.cart-header a');

cleanCart.addEventListener('click', () => {
    cartInfo.style.display = 'none';
    emptyCart.style.display = 'flex';
})

/* Clean cart */

/* Go to xx99mark1 checkout page */

const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', () => {
    window.location.href = 'checkout.html';
})

/* Go to xx99mark1 checkout page */