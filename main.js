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


// new

var slidePosition4 = 1;
SlideShow4(slidePosition4);

// forward/Back controls
function plusSlides4(p) {
  SlideShow4(slidePosition4 += p);
}

//  images controls
function currentSlide4(p) {
  SlideShow4(slidePosition4 = p);
}

function SlideShow4(p) {
  var k;
  var slides4 = document.getElementsByClassName("Containers4");
  var circles4 = document.getElementsByClassName("dots4");
  if (p > slides4.length) {slidePosition4 = 1}
  if (p < 1) {slidePosition4 = slides4.length}
  for (k = 0; k < slides4.length; k++) {
      slides4[k].style.display = "none";
  }
  for (k = 0; k < circles4.length; k++) {
      circles4[k].className = circles4[k].className.replace(" enable", "");
  }
  slides4[slidePosition4-1].style.display = "block";
  circles4[slidePosition4-1].className += " enable";
} 

var slidePosition5 = 1;
SlideShow5(slidePosition5);

// forward/Back controls
function plusSlides5(p) {
  SlideShow5(slidePosition5 += p);
}

//  images controls
function currentSlide5(p) {
  SlideShow5(slidePosition5 = p);
}

function SlideShow5(p) {
  var k;
  var slides5 = document.getElementsByClassName("Containers5");
  var circles5 = document.getElementsByClassName("dots5");
  if (p > slides5.length) {slidePosition5 = 1}
  if (p < 1) {slidePosition5 = slides5.length}
  for (k = 0; k < slides5.length; k++) {
      slides5[k].style.display = "none";
  }
  for (k = 0; k < circles5.length; k++) {
      circles5[k].className = circles5[k].className.replace(" enable", "");
  }
  slides5[slidePosition5-1].style.display = "block";
  circles5[slidePosition5-1].className += " enable";
} 