const btnMain   = document.getElementById('mp--btn-main');
const btnAccess = document.getElementsByClassName('mp-button--access');

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