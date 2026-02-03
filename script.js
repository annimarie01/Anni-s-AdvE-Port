let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += ' dark--mode';
    }
    else {
        document.body.classList.remove('dark--mode')
    }
    
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
    .sendForm(
        'service_hcw6lvq',
        'template_kpc51m8',
        event.target,
        'sha_EqBtAvcUuOzyH'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
    }).catch(() => {
        alert(
            "Sorry, something broke >.< Contact me at anni.thekindfairy@gmail.com"
        )
    })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
    document.body.classList += ' modal--open'
}