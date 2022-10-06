const goBackLink = document.querySelector('.go-back a');

goBackLink.addEventListener('click', () => {
    history.back();
});

/* For name input */

const nameInput = document.querySelector('.name-input');
const nameInputWarning = document.querySelector('.name-input-warning');
const nameLabel = document.querySelector('.name-label');

nameInput.addEventListener('focusout', () => {
    if (nameInput.value.length == 0) {
        nameInputWarning.style.display = 'flex';
        nameLabel.style.color = '#CD2C2C'
        nameInput.style.border = '1px solid #CD2C2C';
    } else {
        nameInputWarning.style.display = 'none';
        nameInput.style.border = '1px solid gray';
        nameLabel.style.color = 'black'
    }
})

/* For name input */


/* For email input */

const emailInput = document.querySelector('.email-input');
const emailInputWarning = document.querySelector('.email-input-warning');
const emailLabel = document.querySelector('.email-label');

emailInput.addEventListener('focusout', () => {
    if (emailInput.value.length == 0) {
        emailInputWarning.style.display = 'flex';
        emailLabel.style.color = '#CD2C2C'
        emailInput.style.border = '1px solid #CD2C2C';
    } else {
        emailInputWarning.style.display = 'none';
        emailInput.style.border = '1px solid gray';
        emailLabel.style.color = 'black'
    }
})

/* For email input */


/* For phone input */

const phoneInput = document.querySelector('.phone-input');
const phoneInputWarning = document.querySelector('.phone-input-warning');
const phoneLabel = document.querySelector('.phone-label');

phoneInput.addEventListener('focusout', () => {
    if (phoneInput.value.length == 0) {
        phoneInputWarning.style.display = 'flex';
        phoneLabel.style.color = '#CD2C2C'
        phoneInput.style.border = '1px solid #CD2C2C';
    } else {
        phoneInputWarning.style.display = 'none';
        phoneInput.style.border = '1px solid gray';
        phoneLabel.style.color = 'black'
    }
})

/* For phone input */


/* For address input */

const addressInput = document.querySelector('.address-input');
const addressInputWarning = document.querySelector('.address-input-warning');
const addressLabel = document.querySelector('.address-label');

addressInput.addEventListener('focusout', () => {
    if (addressInput.value.length == 0) {
        addressInputWarning.style.display = 'flex';
        addressLabel.style.color = '#CD2C2C'
        addressInput.style.border = '1px solid #CD2C2C';
    } else {
        addressInputWarning.style.display = 'none';
        addressInput.style.border = '1px solid gray';
        addressLabel.style.color = 'black'
    }
})

/* For address input */


/* For zipcode input */

const zipcodeInput = document.querySelector('.zipcode-input');
const zipcodeInputWarning = document.querySelector('.zipcode-input-warning');
const zipcodeLabel = document.querySelector('.zipcode-label');

zipcodeInput.addEventListener('focusout', () => {
    if (zipcodeInput.value.length == 0) {
        zipcodeInputWarning.style.display = 'flex';
        zipcodeLabel.style.color = '#CD2C2C'
        zipcodeInput.style.border = '1px solid #CD2C2C';
    } else {
        zipcodeInputWarning.style.display = 'none';
        zipcodeInput.style.border = '1px solid gray';
        zipcodeLabel.style.color = 'black'
    }
})

/* For zipcode input */


/* For city input */

const cityInput = document.querySelector('.city-input');
const cityInputWarning = document.querySelector('.city-input-warning');
const cityLabel = document.querySelector('.city-label');

cityInput.addEventListener('focusout', () => {
    if (cityInput.value.length == 0) {
        cityInputWarning.style.display = 'flex';
        cityLabel.style.color = '#CD2C2C'
        cityInput.style.border = '1px solid #CD2C2C';
    } else {
        cityInputWarning.style.display = 'none';
        cityInput.style.border = '1px solid gray';
        cityLabel.style.color = 'black'
    }
})

/* For city input */


/* For country input */

const countryInput = document.querySelector('.country-input');
const countryInputWarning = document.querySelector('.country-input-warning');
const countryLabel = document.querySelector('.country-label');

countryInput.addEventListener('focusout', () => {
    if (countryInput.value.length == 0) {
        countryInputWarning.style.display = 'flex';
        countryLabel.style.color = '#CD2C2C'
        countryInput.style.border = '1px solid #CD2C2C';
    } else {
        countryInputWarning.style.display = 'none';
        countryInput.style.border = '1px solid gray';
        countryLabel.style.color = 'black'
    }
})

/* For country input */


/* For e-money number input */

const eMoneyNumberInput = document.querySelector('.e-money-number-input');
const eMoneyNumberInputWarning = document.querySelector('.e-money-number-input-warning');
const eMoneyNumberLabel = document.querySelector('.e-money-number-label');

eMoneyNumberInput.addEventListener('focusout', () => {
    if (eMoneyNumberInput.value.length == 0) {
        eMoneyNumberInputWarning.style.display = 'flex';
        eMoneyNumberLabel.style.color = '#CD2C2C'
        eMoneyNumberInput.style.border = '1px solid #CD2C2C';
    } else {
        eMoneyNumberInputWarning.style.display = 'none';
        eMoneyNumberInput.style.border = '1px solid gray';
        eMoneyNumberLabel.style.color = 'black'
    }
})

/* For e-money number input */


/* For e-money number input */

const eMoneyPinInput = document.querySelector('.e-money-pin-input');
const eMoneyPinInputWarning = document.querySelector('.e-money-pin-input-warning');
const eMoneyPinLabel = document.querySelector('.e-money-pin-label');

eMoneyPinInput.addEventListener('focusout', () => {
    if (eMoneyPinInput.value.length == 0) {
        eMoneyPinInputWarning.style.display = 'flex';
        eMoneyPinLabel.style.color = '#CD2C2C'
        eMoneyPinInput.style.border = '1px solid #CD2C2C';
    } else {
        eMoneyPinInputWarning.style.display = 'none';
        eMoneyPinInput.style.border = '1px solid gray';
        eMoneyPinLabel.style.color = 'black'
    }
})

/* For e-money pin input */

/* Changed radio buttnos when clicked */

const cashOnDelivery = document.querySelector('#payment-cash-on-delivery');
const cashEmoney = document.querySelector('#payment-emoney');
const cashOnDeliveryLabel = document.querySelector('.radio-label-cash-on-delivery');
const cashEmoneyLabel = document.querySelector('.radio-label-emoney');

cashOnDelivery.addEventListener('click', () => {
    cashEmoney.checked = false;
    cashOnDeliveryLabel.style.border = '1px solid var(--orange)';
    cashEmoneyLabel.style.border = '1px solid rgb(207, 207, 207)';
})

cashOnDeliveryLabel.addEventListener('focusout', () => {
    if (cashOnDeliveryLabel.style.border = '1px solid var(--orange)') {
        cashOnDeliveryLabel.style.border = '1px solid rgb(207, 207, 207)'
    }
})

cashEmoneyLabel.addEventListener('focusout', () => {
    if (cashEmoneyLabel.style.border = '1px solid var(--orange)') {
        cashEmoneyLabel.style.border = '1px solid rgb(207, 207, 207)'
    }
})

cashEmoney.addEventListener('click', () => {
    cashOnDelivery.checked = false;
    cashEmoneyLabel.style.border = '1px solid var(--orange)';
    cashOnDeliveryLabel.style.border = '1px solid rgb(207, 207, 207)';
})

/* Changed radio buttnos when clicked */

/* When click cash on delivery label */

const eMoneyNumber = document.querySelector('.e-money-number');
const eMoneyPin = document.querySelector('.e-money-pin');
const cashOnDeliveryContainer = document.querySelector('.cash-on-delivery');

cashOnDeliveryLabel.addEventListener('click', () => {
    eMoneyNumber.style.display = 'none'
    eMoneyPin.style.display = 'none';
    cashOnDeliveryContainer.style.display = 'flex';
})

cashEmoneyLabel.addEventListener('click', () => {
    cashOnDeliveryContainer.style.display = 'none';
    eMoneyNumber.style.display = 'block'
    eMoneyPin.style.display = 'block';
})


/* When click cash on delivery label */


/* Pay button */

const payBtn = document.querySelector('.pay button');
const body = document.querySelector('body');
const orderInfo = document.querySelector('.order-info-container');

payBtn.addEventListener('click', () => {
    if (nameInput.value.length == 0) {
        nameInputWarning.style.display = 'flex';
        nameLabel.style.color = '#CD2C2C'
        nameInput.style.border = '1px solid #CD2C2C';
    } if (emailInput.value.length == 0) {
        emailInputWarning.style.display = 'flex';
        emailLabel.style.color = '#CD2C2C'
        emailInput.style.border = '1px solid #CD2C2C';
    } if (phoneInput.value.length == 0) {
        phoneInputWarning.style.display = 'flex';
        phoneLabel.style.color = '#CD2C2C'
        phoneInput.style.border = '1px solid #CD2C2C';
    } if (addressInput.value.length == 0) {
        addressInputWarning.style.display = 'flex';
        addressLabel.style.color = '#CD2C2C'
        addressInput.style.border = '1px solid #CD2C2C';
    } if (zipcodeInput.value.length == 0) {
        zipcodeInputWarning.style.display = 'flex';
        zipcodeLabel.style.color = '#CD2C2C'
        zipcodeInput.style.border = '1px solid #CD2C2C';
    } if (cityInput.value.length == 0) {
        cityInputWarning.style.display = 'flex';
        cityLabel.style.color = '#CD2C2C'
        cityInput.style.border = '1px solid #CD2C2C';
    } if (countryInput.value.length == 0) {
        countryInputWarning.style.display = 'flex';
        countryLabel.style.color = '#CD2C2C'
        countryInput.style.border = '1px solid #CD2C2C';
    } if (eMoneyNumberInput.value.length == 0) {
        eMoneyNumberInputWarning.style.display = 'flex';
        eMoneyNumberLabel.style.color = '#CD2C2C'
        eMoneyNumberInput.style.border = '1px solid #CD2C2C';
    } if (eMoneyPinInput.value.length == 0) {
        eMoneyPinInputWarning.style.display = 'flex';
        eMoneyPinLabel.style.color = '#CD2C2C'
        eMoneyPinInput.style.border = '1px solid #CD2C2C';
    } else {
        orderInfo.style.display = 'flex';
    }
})

/* Pay button */


/* back to home buttun */

const homeBtn = document.querySelector('.home-btn');

homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
})

/* back to home buttun */


/* Menu bar */

const openMenuBar = document.querySelector('.icon-open-menu');
const closeMenuBar = document.querySelector('.icon-close-menu');
const openMenuBarBackground = document.querySelector('.hidden-container');
const menuCardsContainer = document.querySelector('.menu-cards-container');
const productName = document.querySelector('.detail-page-name');

openMenuBar.addEventListener('click', () => {
    if (document.body.contains(productName)) {
        productName.style.transform = 'scaleY(0)';
        productName.style.display = 'none';
    };
    menuCardsContainer.style.transform = 'translateY(0px)';
    openMenuBarBackground.style.display = 'flex';
    setTimeout(() => {
        openMenuBarBackground.style.opacity = '1';
    }, 100);
    openMenuBar.style.display = 'none';
    openMenuBar.style.transform = 'scale(0)';
    closeMenuBar.style.display = 'flex';
    setTimeout(() => {
        closeMenuBar.style.transform = 'scale(1)';
    }, 1200);
});

closeMenuBar.addEventListener('click', () => {
    if (document.body.contains(productName)) {
        productName.style.display = 'flex';
        productName.style.transform = 'scaleY(1)';
    };
    menuCardsContainer.style.transform = 'translateY(-1050px)';
    openMenuBarBackground.style.opacity = '0';
    setTimeout(() => {
        openMenuBarBackground.style.display = 'none';
    }, 1000);
    closeMenuBar.style.display = 'none';
    closeMenuBar.style.transform = 'scaleY(0)';
    openMenuBar.style.display = 'flex';
    setTimeout(() => {
        openMenuBar.style.transform = 'scale(1)';
    }, 1000);
})

/* Menu bar */