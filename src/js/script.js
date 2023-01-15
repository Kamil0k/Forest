const hamburgerButton = document.querySelector('.hamburger__button')
const sideNav = document.querySelector('.nav__side')
const sideNavLinks = document.querySelectorAll('.nav__side-link')
const year = document.querySelector('.year')

const handleMobileNav = () => {
	sideNav.classList.toggle('nav__side--active')

	sideNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			sideNav.classList.remove('nav__side--active')
		})
	})
}

const handleSideItemsAnimation = () => {
	let delayTime = 0
	sideNavLinks.forEach(link => {
		link.classList.toggle('nav-side-animation')
		link.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleYear = () => {
	const d = new Date()
	year.innerText = d.getFullYear()
}

handleYear()
hamburgerButton.addEventListener('click', handleMobileNav)
hamburgerButton.addEventListener('click', handleSideItemsAnimation)
