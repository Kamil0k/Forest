const hamburgerButton = document.querySelector('.hamburger__button')
const sideNav = document.querySelector('.nav__side')
const sideNavLinks = document.querySelectorAll('.nav__side-link')

const handleMobileNav = () => {
	sideNav.classList.toggle('nav__side--active')

	sideNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			sideNav.classList.remove('nav__side--active')
		})
	})
}

hamburgerButton.addEventListener('click', handleMobileNav)
