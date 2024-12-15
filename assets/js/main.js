/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/* Menu hidden */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
const navMenu = document.getElementById('nav-menu')
// When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SWIPER ===============*/
const swiperWatches = new Swiper(".home__swiper", {

	loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0
    },

  },

	pagination: {
		el: ".swiper-pagination",
    clickable: true,
	},

	
})


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__images', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.home__data', 1.8, {opacity: 0, y: -100, delay: .8})
gsap.from('.home__info', 1.8, {opacity: 0, y: -100, delay: 1})

// Scroll animation for navigation links
document.querySelectorAll('.nav__submenu a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target ID
      const targetSection = document.getElementById(targetId); // Find the target section

      if (targetSection) {
          // Smooth scroll to the target section
          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
	const navItems = document.querySelectorAll(".nav__item");

	navItems.forEach((item) => {
		const submenu = item.querySelector(".nav__submenu");

		if (submenu) {
			item.addEventListener("click", function () {
				// Toggle kelas untuk menampilkan submenu
				item.classList.toggle("show-submenu");
			});
		}
	});
});

