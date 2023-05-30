ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-text, .sobre-text, abordagem-img, .heading', { origin: 'top' });
ScrollReveal().reveal('.intersection, .container-box, .btn, .mapa', { origin: 'bottom' });
ScrollReveal().reveal('.home-text h1, .img-sobre, .sobre-text h1, .input-box, .servicos-container h2, .lado-esquerdo', { origin: 'left' });
ScrollReveal().reveal('.img-home, .home-text h2, .home-text p, .sobre-text h2, .abordagem p, textarea, .servicos-container p', { origin: 'right' });

//=====================================================================================================================================================================
function mostrarSlide(slideIndex) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("mostrar");
    }
    slides[slideIndex].classList.add("mostrar");
  }

//=====================================================================================================================================================================

var intervaloSlide; // Variável global para armazenar o intervalo de passagem automática do slide
var cont = 0; // Variável global para armazenar o índice do slide atual

function proximoSlide() {
  cont++;
  if (cont >= buttons.length) {
    cont = 0;
  }
  buttons[cont].click();
}

function alterarMargem(margem) {
  var primeiroSlide = document.querySelector('.slide.primeiro');
  primeiroSlide.style.marginLeft = margem + '%';
}

function iniciarIntervaloSlide() {
  intervaloSlide = setInterval(function() {
    proximoSlide();
  }, 5000); // Intervalo de 5 segundos (5000 milissegundos) para passagem automática do slide
}

function reiniciarIntervaloSlide() {
  clearInterval(intervaloSlide); // Limpa o intervalo anterior
  iniciarIntervaloSlide(); // Inicia o intervalo novamente
}

document.addEventListener('DOMContentLoaded', function() {
  iniciarIntervaloSlide(); // Inicia a passagem automática do slide ao carregar o site
});

// Adicione o código a seguir para reiniciar o intervalo de tempo ao clicar em um botão
var buttons = document.querySelectorAll('.botao button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    cont = Array.from(buttons).indexOf(this);
    reiniciarIntervaloSlide(); // Reinicia o intervalo de passagem automática do slide ao clicar em um botão

    // Adicione o código abaixo para alterar a cor de fundo dos botões
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].style.backgroundColor = ''; // Limpa a cor de fundo de todos os botões
      buttons[j].style.boxShadow = ''; // Limpa a cor de fundo de todos os botões
    }
    this.style.backgroundColor = 'hsl(192, 80%, 48%)'; // Define a cor de fundo do botão atual como vermelho
    this.style.boxShadow = 'rgb(14, 178, 184) 0px 0px 1.8px 0.5px'
  });
}

// SCROOLL TO BOTTOM=========================================================
const scrollToBottom = document.querySelector('.loc a');

scrollToBottom.addEventListener('click', e => {
  e.preventDefault();
  const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
});

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}
//============================================================================================

function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');

  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');
  menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
  closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
}

