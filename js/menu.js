(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu =document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();
(function(){
    const nav container = document.querySelector('.container');
        window.addEventListener('scroll' , function(){
            nav container.classList.toggle('active' , this.window.scrollY >0);
        })
})