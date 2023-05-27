window.onload = function() {
  ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, .contact form, .input-box', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img, .services-container', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){ 
   nextImage();
}, 3000)

function nextImage(){
   count++;
   if(count > 4){
       count=1;
   }
   document.getElementById("radio"+count).checked = true;

}
}


/*===========================================================*/

function runTyped() {
  const typed = new Typed('.multiple-text', {
    strings: ['DevFrontEnd', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}

runTyped();

/* SLIDE SHOW TEST=============================================*/

