$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop:true,
      margin: 15,
      mouseDrag:true,
      dots: 0
    }
  );
});

let menuToggler = document.querySelector('.button')
let nav = document.getElementById('cont-menu')

if (menuToggler) {
	menuToggler.addEventListener('click', e => {
		if (menuToggler.classList.contains('pushed')) {
			menuToggler.classList.remove('pushed')
			nav.classList.remove('opened')
		} else {
			menuToggler.classList.add('pushed')
			nav.classList.add('opened')
		}
	})
}
