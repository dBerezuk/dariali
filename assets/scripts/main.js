const heroSmartMediaElements = document.querySelectorAll('.hero__image');
const heroSmartphoneElement = document.querySelector('.hero__smartphone');

window.addEventListener('scroll', onHeroSmartphone);

function onHeroSmartphone(event) {
	heroSmartMediaElements.forEach(heroSmartMediaElement => {
		const rect = heroSmartMediaElement.getBoundingClientRect();
		const elementCenterX = rect.left + rect.width / 2;
		const viewportCenterX = window.innerWidth / 2;

		if (elementCenterX < viewportCenterX) {
			heroSmartMediaElement.style.translate =
				1 + window.pageYOffset / 10 + 'px';
		} else {
			heroSmartMediaElement.style.translate =
				(1 + window.pageYOffset / 10) * -1 + 'px';
		}
	});

	heroSmartphoneElement.style.scale = 1 + window.pageYOffset / 1000 / 4;
}
