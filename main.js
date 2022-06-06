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


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 