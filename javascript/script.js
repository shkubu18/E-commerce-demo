/* Changing nav links color */

const homePage = document.getElementById('home-page');
const homePagelink = document.getElementById('home-link');

function homeLink() {
    homePagelink.style.color = 'var(--orange)';
}

const headphonePage = document.getElementById('headphone-detail-page')
const headphonePageLink = document.getElementById('headphone-link');

function headphoneLink() {
    headphonePageLink.style.color = 'var(--orange)';
}

const speakerPage = document.getElementById('speaker-detail-page')
const speakerPageLink = document.getElementById('speaker-link');

function speakerLink() {
    speakerPageLink.style.color = 'var(--orange)';
}


const earphonePage = document.getElementById('earphone-detail-page')
const earphonePageLink = document.getElementById('earphone-link');

function earphoneLink() {
    earphonePageLink.style.color = 'var(--orange)';
}

/* Changing nav links color */



/* Headphone,speaker,earphone's span style when hovered */

const headphoneCard = document.getElementById('headphone-card');
const headphoneSpan = document.getElementById('headphone-span');

headphoneCard.addEventListener('mouseover', () => {
    headphoneSpan.style.color = 'var(--orange)';
});

headphoneCard.addEventListener('mouseout', () => {
    headphoneSpan.style.color = 'gray';
});


const speakerCard = document.getElementById('speaker-card');
const speakerSpan = document.getElementById('speaker-span');

speakerCard.addEventListener('mouseover', () => {
    speakerSpan.style.color = 'var(--orange)';
});

speakerCard.addEventListener('mouseout', () => {
    speakerSpan.style.color = 'gray';
});


const earphoneCard = document.getElementById('earphone-card');
const earphoneSpan = document.getElementById('earphone-span');

earphoneCard.addEventListener('mouseover', () => {
    earphoneSpan.style.color = 'var(--orange)';
});

earphoneCard.addEventListener('mouseout', () => {
    earphoneSpan.style.color = 'gray';
});

/* And off headphone,speaker,earphone's span style when hovered */


/* Go to detail pages when clicked */

headphoneCard.addEventListener('click', () => {
    location.href = ('headphone.html');
})

speakerCard.addEventListener('click', () => {
    location.href = ('speaker.html');
})

earphoneCard.addEventListener('click', () => {
    location.href = ('earphone.html');
})

/* Go to detail pages when clicked */


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


const firstSection = document.querySelector('.first-section');


if (document.body.contains(productName)) {
    firstSection.style.padding = '0';
}

