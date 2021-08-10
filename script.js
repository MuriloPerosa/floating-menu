/**
 * Handled elements
 */
const btnMain        = document.getElementById('mp--btn-main');
const btnMessenger   = document.getElementById('mp--btn-messenger');
const btnWhatsapp    = document.getElementById('mp--btn-whatsapp');
const btnTelegram    = document.getElementById('mp--btn-telegram');
const btnAccess      = document.getElementsByClassName('mp-button--access');

/**
 * Customized stuff
 */
const customized = {
    btnMainColor : '#DC143C',
};

/**
 * Facebook messenger data
 */
const messenger = {
    user: 'murilo.perosa.18',
};

/**
 * WhatsApp data
 */
const whatsapp = {
    phone: '5554996443378',
    text : 'Bom dia, bão?',
};

/**
 * Telegram data
 */
const telegram = {
    user: 'murilo_perosa',
};

/**
 * Base URLs
 */
const baseUrls = {
    whatsapp  : 'https://api.whatsapp.com',
    telegram  : 'https://t.me',
    messenger : 'https://m.me',
};

/**
 * Opens the link in new tab
 * @param {String} link 
 */
 let openLink = function(link) {
    window.open(link, '_blank');
};

/**
 * Apply all the customizations
 */
let applyCustomizations = function (){
    btnMain.style.backgroundColor = customized.btnMainColor;
};

applyCustomizations();

// Event listener to main button
btnMain.addEventListener('click', (event)=>{
    event.preventDefault();
    for (let i = 0; i < btnAccess.length; i++) {

        if (btnAccess[i].classList.contains('mp-button-invisible')){
            btnAccess[i].classList.remove('mp-button-invisible');
            btnAccess[i].classList.add('mp-button-visible');
        }else{
            btnAccess[i].classList.add('mp-button-invisible');
            btnAccess[i].classList.remove('mp-button-visible');
        }
    }
});

// Event listener to messenger button
btnMessenger.addEventListener('click', (event)=>{
    event.preventDefault();
    let link = `${baseUrls.messenger}/${messenger.user}`;
    openLink(link);
});

// Event listener to whatsapp button
btnWhatsapp.addEventListener('click', (event)=>{
    event.preventDefault();
    let link = `${baseUrls.whatsapp}/send?phone=${whatsapp.phone}&text=${whatsapp.text}`;
    openLink(link);
});

// Event listener to telegram button
btnTelegram.addEventListener('click', (event)=>{
    event.preventDefault();
    let link = `${baseUrls.telegram}/${telegram.user}`;
    openLink(link);
});