{
	;('use strict')

	window.addEventListener('scroll', () => {
		const header = document.querySelector('header')
		header.classList.toggle('sticky', window.scrollY > 0)
	})

	const projectsModels = document.querySelectorAll('.projects-model')
	const imgCards = document.querySelectorAll('.img-card')
	const projectsBtns = document.querySelectorAll('.projects-close-btn')

	const projectOn = click => projectsModels[click].classList.add('active')

	imgCards.forEach((i, index) => {
		i.addEventListener('click', () => projectOn(index))
	})

	document.addEventListener('keydown', key => {
		key.keyCode == 27
			? projectsModels.forEach(e => e.classList.remove('active'))
			: ''
	})

	projectsBtns.forEach(i => {
		i.addEventListener('click', () => {
			projectsModels.forEach(j => {
				j.classList.remove('active')
			})
		})
	})

	window.addEventListener('scroll', () => {
		const sections = document.querySelectorAll('section')
		const scrollY = window.pageYOffset

		sections.forEach(actual => {
			let sectionHeight = actual.offsetHeight
			let sectionTop = actual.offsetTop - 50
			let id = actual.getAttribute('id')

			scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
				? document
						.querySelector(`.nav-elements a[href*=${id}]`)
						.classList.add('active')
				: document
						.querySelector(`.nav-elements a[href*=${id}]`)
						.classList.remove('active')
		})
	})

	const menuBtn = document.querySelector('.nav-menu-btn')
	const navigation = document.querySelector('.navigation')
	const navElements = document.querySelectorAll(
		'.nav-elements div, .nav-elements a'
	)

	navElements.forEach(e => {
		e.addEventListener('click', () => {
			navigation.classList.remove('active')
		})
	})

	menuBtn.addEventListener('click', () => {
		navigation.classList.toggle('active')
	})

	ScrollReveal({
		// reset: true,
		distance: '60px',
		duration: 2500,
		delay: 100,
	})

	ScrollReveal().reveal('.home .bio .bio-title, .section-subtitle', {
		delay: 600,
		origin: 'left',
	})

	ScrollReveal().reveal(
		'.home .bio .bio-subtitle, .home .bio p, .description',
		{
			delay: 600,
			origin: 'right',
		}
	)
	ScrollReveal().reveal('.home .bio .btn, .about-info .btn', {
		delay: 500,
		origin: 'bottom',
	})
	ScrollReveal().reveal('.contact-left li, .about-img', {
		delay: 500,
		origin: 'left',
		interval: 200,
	})
	ScrollReveal().reveal('.home-img', {
		delay: 700,
		origin: 'top',
	})
	ScrollReveal().reveal('.contact-right', {
		delay: 500,
		origin: 'right',
		interval: 200,
	})
	ScrollReveal().reveal('.projects .img-card', {
		delay: 500,
		origin: 'bottom',
		interval: 200,
	})
	ScrollReveal().reveal('footer', {
		delay: 500,
		origin: 'top',
		interval: 200,
	})
}
