/* When element loaded appear */

const headphoneInfo = document.querySelector('.headphone-description');
const headphoneImg = document.querySelector('.headphone-image img');
window.addEventListener('load', appear);

function appear() {
    setTimeout(() => {
        headphoneImg.style.opacity = '1';
    }, 500);
    setTimeout(() => {
        headphoneInfo.style.opacity = '1';
    }, 2000);
}


/* When element loaded it will appear */


/* When scroll down elements will appear */

const zx9Speaker = document.querySelector('.zx9-speaker-card');
const zx7speaker = document.querySelector('.zx7-speaker-card');
const yx1Img = document.querySelector('.yx1-earphone-img img');
const yx1Name = document.querySelector('.yx1-earphone-name');
const someInfo = document.querySelector('.some-info');


/* initial style */
zx9Speaker.style.opacity = '0';
zx7speaker.style.opacity = '0';
yx1Img.style.opacity = '0';
yx1Name.style.opacity = '0';
someInfo.style.opacity = '0';
/* initial style */

if (window.matchMedia("(min-width: 680px)").matches) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            zx9Speaker.style.opacity = '1';
        } if (window.scrollY > 1000) {
            zx7speaker.style.opacity = '1';
        } if (window.scrollY > 1500) {
            yx1Img.style.opacity = '1';
            setTimeout(() => {
                yx1Name.style.opacity = '1';
            }, 500);
        } if (window.scrollY > 2000) {
            someInfo.style.opacity = '1';
        }
    })
}

/* changing scroll down effect when screen gets smaller */

if (window.matchMedia("(max-width: 680px)").matches) {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            zx9Speaker.style.opacity = '1';
        } if (window.scrollY > 1600) {
            zx7speaker.style.opacity = '1';
        } if (window.scrollY > 2100) {
            yx1Img.style.opacity = '1';
            setTimeout(() => {
                yx1Name.style.opacity = '1';
            }, 500);
        } if (window.scrollY > 2800) {
            someInfo.style.opacity = '1';
        }
    })
}


/* changing scroll down effect when screen gets smaller */


/* When scroll down elements will appear */

/* Empty cart */

const shoppingCartIcon = document.querySelector('.shopping-cart-icon');
const itemQty = document.querySelector('.item-quantity');
const cart = document.querySelector('.cart-of-items');
const mainHeadphone = document.querySelector('.main-headphone');
const hiddenContainer = document.querySelector('.hidden-container');
const body = document.querySelector('body')
const emptyCart = document.querySelector('.empty-cart');
const clickBtn = document.querySelector('.click-btn');
const addCartInfo = document.querySelector('.addcart-info');

shoppingCartIcon.addEventListener('click', () => {
    if (itemQty.style.display !== 'flex') {
        addCartInfo.style.display = 'flex';
        cart.style.display = 'flex';
        emptyCart.style.display = 'flex';
        hiddenContainer.style.display = 'block';
        body.style.overflow = "hidden";
        mainHeadphone.style.marginTop = '-240px';
    }
})

clickBtn.addEventListener('click', () => {
    cart.style.display = 'none';
    addCartInfo.style.display = 'none';
    emptyCart.style.display = 'none';
    hiddenContainer.style.display = 'none';
    body.style.overflow = "visible";
    mainHeadphone.style.marginTop = '0';
})

/* Empty cart */


/* appears main headphone background image and main headphone description */

if (window.matchMedia("(max-width: 500px)").matches) {
    mainHeadphone.style.opacity = '0';
    window.addEventListener('load', appearBackImg);

    function appearBackImg() {
        setTimeout(() => {
            mainHeadphone.style.opacity = '1';
        }, 500);
        setTimeout(() => {
            headphoneInfo.style.opacity = '1';
        }, 2000);
    }
}

/* appears main headphone background image and main headphone description */


