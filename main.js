const hamburgermenu = document.querySelector('#nagivation .iconnagivation');

const contentnagivation = document.querySelector('#contentnagivation');

const closenagivationbutton =  document.querySelector('#contentnagivation .closebutton');

const scrollButton = document.querySelector('.scroll-top')


if(scrollButton){
    window.addEventListener('scroll', ()=>{
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollButton.style.display = 'flex';
        }
        else{
            scrollButton.style.display = 'none';
        }
    })
    scrollButton.addEventListener('click', ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}


hamburgermenu.addEventListener('click', ()=>{
    contentnagivation.classList.add('show');
    document.body.style.overflow="hidden";
})


closenagivationbutton.addEventListener('click', ()=>{
    contentnagivation.classList.remove('show');
    document.body.style.overflow="auto";
})


