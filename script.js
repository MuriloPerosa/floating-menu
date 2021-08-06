const btnMain        = document.getElementById('mp--btn-main');
const btnMessenger   = document.getElementById('mp--btn-messenger');
const btnWhatsapp    = document.getElementById('mp--btn-whatsapp');
const btnTelegram    = document.getElementById('mp--btn-telegram');
const btnAccess = document.getElementsByClassName('mp-button--access');

// Event listener to main button
btnMain.addEventListener('click', ()=>{
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
btnMessenger.addEventListener('click', ()=>{
    alert('messenger');
});

// Event listener to whatsapp button
btnWhatsapp.addEventListener('click', ()=>{
    alert('whatsapp');
});

// Event listener to telegram button
btnTelegram.addEventListener('click', ()=>{
    alert('telegram');
});