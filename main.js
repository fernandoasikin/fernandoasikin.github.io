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


// var slidePosition = 1;
// SlideShow(slidePosition);

// // forward/Back controls
// function plusSlides(n) {
//   SlideShow(slidePosition += n);
// }

// //  images controls
// function currentSlide(n) {
//   SlideShow(slidePosition = n);
// }

// function SlideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("Containers");
//   var circles = document.getElementsByClassName("dots");
//   if (n > slides.length) {slidePosition = 1}
//   if (n < 1) {slidePosition = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < circles.length; i++) {
//       circles[i].className = circles[i].className.replace(" enable", "");
//   }
//   slides[slidePosition-1].style.display = "block";
//   circles[slidePosition-1].className += " enable";
// } 


// new

var slidePosition2 = 1;
SlideShow2(slidePosition2);

// forward/Back controls
function plusSlides2(o) {
  SlideShow2(slidePosition2 += o);
}

//  images controls
function currentSlide2(o) {
  SlideShow2(slidePosition2 = o);
}

function SlideShow2(o) {
  var j;
  var slides2 = document.getElementsByClassName("Containers2");
  var circles2 = document.getElementsByClassName("dots2");
  if (o > slides2.length) {slidePosition2 = 1}
  if (o < 1) {slidePosition2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  for (j = 0; j < circles2.length; j++) {
      circles2[j].className = circles2[j].className.replace(" enable", "");
  }
  slides2[slidePosition2-1].style.display = "block";
  circles2[slidePosition2-1].className += " enable";
} 




// new

var slidePosition3 = 1;
SlideShow3(slidePosition3);

// forward/Back controls
function plusSlides3(p) {
  SlideShow3(slidePosition3 += p);
}

//  images controls
function currentSlide3(p) {
  SlideShow3(slidePosition3 = p);
}

function SlideShow3(p) {
  var k;
  var slides3 = document.getElementsByClassName("Containers3");
  var circles3 = document.getElementsByClassName("dots3");
  if (p > slides3.length) {slidePosition3 = 1}
  if (p < 1) {slidePosition3 = slides3.length}
  for (k = 0; k < slides3.length; k++) {
      slides3[k].style.display = "none";
  }
  for (k = 0; k < circles3.length; k++) {
      circles3[k].className = circles3[k].className.replace(" enable", "");
  }
  slides3[slidePosition3-1].style.display = "block";
  circles3[slidePosition3-1].className += " enable";
} 

