{
	const btn = $('#button')

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show')
		} else {
			btn.removeClass('show')
		}
	})

	btn.on('click', function (e) {
		e.preventDefault()
		$('html, body').animate({ scrollTop: 0 }, '300')
	})

	const btnScrollDown = $('.scroll-down')

	$(window).scroll(function () {
		if ($(window).scrollTop() > 220) {
			btnScrollDown.addClass('show')
		} else {
			btnScrollDown.removeClass('show')
		}
	})

	btnScrollDown.on('click', function (e) {
		e.preventDefault()
		$('html, body').animate({ scrollTop: $('#about').offset().top }, '300')
	})
}
