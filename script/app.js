const navSlide = () => {

    const nav = document.querySelector('nav');
    const menuBtn = document.querySelector('.burger-menu');
    const menuLink = document.querySelectorAll('ul li');

    menuBtn.addEventListener('click', () =>{

        nav.classList.toggle('nav-active');

        menuLink.forEach((link,index)=>{

            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
            }

        });

        menuBtn.classList.toggle('toggle');
    });
}

navSlide();
