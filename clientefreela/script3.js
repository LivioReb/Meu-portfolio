ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.card1, card3, .txbotox1 h2, .home1 h1', { origin: 'top' });
ScrollReveal().reveal('.card2, card4, .txbotox1 p,.home1 h2', { origin: 'bottom' });
ScrollReveal().reveal('.txbotox h2, .parallax1 h2,  .parallax1 p, .card1 p, .card2 h2, .card3 p, .card4 h2', { origin: 'left' });
ScrollReveal().reveal('.txbotox p, .parallax1 p, .parallax2 h2, .card1 h2, .card2 p, .card3 h2, .card4 p, .txt-container ul', { origin: 'right' });


window.sr = ScrollReveal({ reset:true});
sr.reveal('.parallax1 h1, .parallax2 h1, .parallax3 h1', { duration: 4000 });