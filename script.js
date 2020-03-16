const MENU = document.getElementById('menu');
const ANCHORS = document.querySelectorAll('a[href*="#"]');
const FILTER = document.getElementById('portfolio__filter');
const PROJECT = document.getElementById('projects__wrapper');
const PHONE1 = document.getElementById('phone-vertical');
const PHONE2 = document.getElementById('phone-horizontal');
const LEFT_SCREEN = document.getElementById('left');
const RIGHT_SCREEN = document.getElementById('right');
const SUBMIT = document.getElementById('submit');

// menu_pages

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

for (let anchor of ANCHORS) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

//slider_phone

PHONE1.enabled = true;
PHONE2.enabled = true;

PHONE1.addEventListener('click', (event) => {
    if (PHONE1.enabled) {
        PHONE1.enabled = false;
        PHONE1.style.backgroundImage = 'url("./assets/phone-vertical-dis.png")';

    } else {
        PHONE1.enabled = true;
        PHONE1.style.backgroundImage = 'url("assets/phone-vertical.png")';
    }
})

PHONE2.addEventListener('click', (event) => {
    if (PHONE2.enabled) {
        PHONE2.enabled = false;
        PHONE2.style.backgroundImage = 'url("./assets/phone-horizontal-dis.png")';

    } else {
        PHONE2.enabled = true;
        PHONE2.style.backgroundImage = 'url("assets/phone-horizontal.png")';
    }
})

//slider

//portfolio_pages 

FILTER.addEventListener('click', (event) => {
    FILTER.querySelectorAll('button').forEach(el => el.classList.remove('portfolio_filter_active'));
    if (event.target.textContent == "All") {
        PROJECT.innerHTML = `<div class="crop_project"><img src="assets/1.jpg" alt="img1" /></div>
                                    <div class="crop_project"><img src="assets/2.jpg" alt="img2" /></div>
                                    <div class="crop_project"><img src="assets/3.jpg" alt="img3" /></div>
                                    <div class="crop_project"><img src="assets/4.jpg" alt="img4" /></div>
                                    <div class="crop_project"><img src="assets/5.jpg" alt="img5" /></div>
                                    <div class="crop_project"><img src="assets/6.jpg" alt="img6" /></div>
                                    <div class="crop_project"><img src="assets/7.jpg" alt="img7" /></div>
                                    <div class="crop_project"><img src="assets/8.jpg" alt="img8" /></div>
                                    <div class="crop_project"><img src="assets/9.jpg" alt="img9" /></div>
                                    <div class="crop_project"><img src="assets/10.jpg" alt="img10" /></div>
                                    <div class="crop_project"><img src="assets/11.jpg" alt="img11" /></div>
                                    <div class="crop_project"><img src="assets/12.jpg" alt="img12" /></div>
                                `
    } else if (event.target.textContent == "Web Design") {
        PROJECT.innerHTML = `<div class="crop_project"><img src="assets/10.jpg" alt="img10" /></div>
                                    <div class="crop_project"><img src="assets/12.jpg" alt="img12" /></div>
                                    <div class="crop_project"><img src="assets/11.jpg" alt="img11" /></div>
                                    <div class="crop_project"><img src="assets/9.jpg" alt="img9" /></div>
                                    <div class="crop_project"><img src="assets/4.jpg" alt="img4" /></div>
                                    <div class="crop_project"><img src="assets/5.jpg" alt="img5" /></div>
                                    <div class="crop_project"><img src="assets/8.jpg" alt="img8" /></div>
                                    <div class="crop_project"><img src="assets/7.jpg" alt="img7" /></div>
                                    <div class="crop_project"><img src="assets/1.jpg" alt="img1" /></div>
                                    <div class="crop_project"><img src="assets/3.jpg" alt="img3" /></div>
                                    <div class="crop_project"><img src="assets/2.jpg" alt="img2" /></div>
                                    <div class="crop_project"><img src="assets/6.jpg" alt="img6" /></div>
                                `
    } else if (event.target.textContent == "Graphic Design") {
        PROJECT.innerHTML = `<div class="crop_project"><img src="assets/12.jpg" alt="img12" /></div>
                                    <div class="crop_project"><img src="assets/11.jpg" alt="img11" /></div>
                                    <div class="crop_project"><img src="assets/10.jpg" alt="img10" /></div>
                                    <div class="crop_project"><img src="assets/9.jpg" alt="img9" /></div>
                                    <div class="crop_project"><img src="assets/8.jpg" alt="img8" /></div>
                                    <div class="crop_project"><img src="assets/7.jpg" alt="img7" /></div>
                                    <div class="crop_project"><img src="assets/6.jpg" alt="img6" /></div>
                                    <div class="crop_project"><img src="assets/5.jpg" alt="img5" /></div>
                                    <div class="crop_project"><img src="assets/4.jpg" alt="img4" /></div>
                                    <div class="crop_project"><img src="assets/3.jpg" alt="img3" /></div>
                                    <div class="crop_project"><img src="assets/2.jpg" alt="img2" /></div>
                                    <div class="crop_project"><img src="assets/1.jpg" alt="img1" /></div>
                                `
    } else if (event.target.textContent == "Artwork") {
        PROJECT.innerHTML = `<div class="crop_project"><img src="assets/1.jpg" alt="img1" /></div>
                                    <div class="crop_project"><img src="assets/2.jpg" alt="img2" /></div>
                                    <div class="crop_project"><img src="assets/10.jpg" alt="img10" /></div>
                                    <div class="crop_project"><img src="assets/11.jpg" alt="img11" /></div>
                                    <div class="crop_project"><img src="assets/5.jpg" alt="img5" /></div>
                                    <div class="crop_project"><img src="assets/6.jpg" alt="img6" /></div>
                                    <div class="crop_project"><img src="assets/7.jpg" alt="img7" /></div>
                                    <div class="crop_project"><img src="assets/8.jpg" alt="img8" /></div>
                                    <div class="crop_project"><img src="assets/12.jpg" alt="img12" /></div>
                                    <div class="crop_project"><img src="assets/3.jpg" alt="img3" /></div>
                                    <div class="crop_project"><img src="assets/4.jpg" alt="img4" /></div>
                                    <div class="crop_project"><img src="assets/9.jpg" alt="img9" /></div>
                                `
    }

    event.target.classList.add('portfolio_filter_active');
});

PROJECT.addEventListener('click', (event) => {
    PROJECT.querySelectorAll('img').forEach(el => el.classList.remove('projects_wrapper_active'));
    event.target.classList.add('projects_wrapper_active');
});

//form
let dialog = document.querySelector('dialog');
const dialod1 = dialogContext(dialog);


SUBMIT.addEventListener('click', (event) => {

    let text = document.getElementById('text').value;
    let message = document.getElementById('message').value;

    dialod1.setText(text);
    dialod1.setMessage(message);
    dialod1.open();
    // let dialog = document.querySelector('dialog');


    // if ((text.length === 0) && (message.length === 0)) {
    //     alert("Письмо отправлено \n\rТема: Без темы \n\rОписание: Без описания");
    // } else if (text.length === 0) {
    //     alert("Письмо отправлено \n\rТема:  Без темы \n\rОписание: " + (message));
    // } else if (message.length === 0) {
    //     alert("Письмо отправлено \n\rТема: " + (text) + " \n\rОписание: Без описания");
    // } else {
    //     alert("Письмо отправлено \n\rТема: " + (text) + " \n\rОписание: " + (message));
    // }

    
});

// document.querySelector('#submit').onclick = function() {dialod1.open()};
document.querySelector('#close').onclick = function() {dialod1.close()};

/**
 * 
 * @param {HTMLDialogElement } dialogEl 
 */
function dialogContext(dialogEl) {
    let text = null;
    let message = null;

    return {
        text, 
        setText: (newText) => { text = newText },
        message, 
        setMessage: (newMessage) => { message = newMessage },
        open: () => {
            debugger;
            dialogEl.querySelector('#text').value = text;
            dialogEl.querySelector('#message').value = message;
            dialogEl.showModal();
        },
        close: () => {
            dialogEl.close();
        }
    }
}



