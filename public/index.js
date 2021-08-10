(() => {
    
    const btnAccess  = document.getElementsByClassName('mp-button--access');
    const cssFile    = 'http://127.0.0.1:5500/style.css'; // change

    /**
     * Base URLs
     */
    const baseUrls = {
        images    : 'http://127.0.0.1:5500/icons', // change
        whatsapp  : 'https://api.whatsapp.com',
        telegram  : 'https://t.me',
        messenger : 'https://m.me',
    };

    const variants = [
        {
            type : 'link',
            function: fnLink,
        },
        {
            type : 'email',
            function: fnEmail,
        },
        {
            type : 'call',
            function: fnCall,
        },
        {
            type : 'sms',
            function: fnSms,
        },
        {
            type : 'snapchat',
            function: fnSnapchat,
        },
        {
            type : 'instagram',
            function: fnInstagram,
        },
        {
            type : 'messenger',
            function: fnMessenger,
        },
        {
            type : 'telegram',
            function: fnTelegram,
        },
        {
            type : 'whatsapp',
            function: fnWhatsapp,
        },
        {
            type : 'main',
            function: fnMain,
        },
    ];

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
     * Link data
     */
    const customLink = {
        url: 'https://google.com',
    };

    /**
     * Opens the link in new tab
     * @param {String} link 
     */
    function openLink(link) {
        window.open(link, '_blank');
    };

    /**
     * Funtion to handle type 'link'
     */
    function fnLink() {
        openLink(customLink.url);
    }

    /**
     * Funtion to handle type 'email'
     */
    function fnEmail() {
        // openLink(link.url);
    }

    /**
     * Funtion to handle type 'call'
     */
     function fnCall() {
        // openLink(link.url);
    }

    /**
     * Funtion to handle type 'call'
     */
    function fnSms() {
        // openLink(link.url);
    }
    
    /**
     * Funtion to handle type 'snapchat'
     */
    function fnSnapchat() {
        // openLink(link.url);
    }
        
    /**
     * Funtion to handle type 'instagram'
     */
     function fnInstagram() {
        // openLink(link.url);
    }

    /**
     * Funtion to handle type 'messenger'
     */
    function fnMessenger() {
        let link = `${baseUrls.messenger}/${messenger.user}`;
        openLink(link);
    }

    /**
     * Funtion to handle type 'telegram'
     */
    function fnTelegram() {
        let link = `${baseUrls.telegram}/${telegram.user}`;
        openLink(link);
    }

    /**
     * Funtion to handle type 'whatsapp'
     */
    function fnWhatsapp() {
        let link = `${baseUrls.whatsapp}/send?phone=${whatsapp.phone}&text=${whatsapp.text}`;
        openLink(link);
    }

    /**
     * Funtion to handle type 'main'
     */
    function fnMain() {
        for (let i = 0; i < btnAccess.length; i++) {

            if (btnAccess[i].classList.contains('mp-button-invisible')){
                btnAccess[i].classList.remove('mp-button-invisible');
                btnAccess[i].classList.add('mp-button-visible');
            }else{
                btnAccess[i].classList.add('mp-button-invisible');
                btnAccess[i].classList.remove('mp-button-visible');
            }
        }
    }

    function getImg(type){
        let img = document.createElement("img");
        img.src = `${baseUrls.images}/${type}.svg`;
        img.alt = type;
        img.classList = "mp-icon--img";

        if(type == 'main'){
            img.classList.add('mp-icon--img-main');
        }

        return img;
    }

    function getBtn(type){
        let btn = document.createElement("div");
        btn.classList = `mp-button--circle mp-button--${type} mp-button--access mp-button-invisible`;
        btn.id = `mp--btn-${type}`;

        if(type == 'main'){
            btn.style.backgroundColor = customized.btnMainColor;
            btn.classList.remove('mp-button-invisible');
            btn.classList.remove('mp-button--access');
        }else{
            btn.style.display = 'none';

            setInterval(function(){
                btn.style.display = '';
            }, 500);
        }

        return btn;
    }

    function appendButtons() {

        // create container
        let container = document.createElement("div");
        container.classList = 'mp-button--container';
        
        for (let i = 0; i < variants.length; i++) {
            const variant = variants[i].type;

            let btn = getBtn(variant);
            btn.appendChild(getImg(variant));
            addEvtListener(btn, variants[i].function);
            container.appendChild(btn);
        }

        // append container
        document.body.appendChild(container);
    }

    function appendCSS () {
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', cssFile);

        document.head.appendChild(link);
    }

    function addEvtListener(element, action){
        element.addEventListener('click', function(evt){
            action();
        });
    }

    appendCSS();
    appendButtons();
})();