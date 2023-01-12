const hamburgerButton = document.querySelector('.hamburger__button')
const sideNav = document.querySelector('.side-nav')
const sideNavLinks = document.querySelectorAll('.side-nav__link')

const handleMobileNav = () => {
	sideNav.classList.toggle('side-nav--active')

	sideNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			sideNav.classList.remove('side-nav--active')
		})
	})
}

hamburgerButton.addEventListener('click', handleMobileNav)
