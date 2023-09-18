import lottie from 'lottie-web';
import Swiper from 'swiper/bundle';
import gsap from 'gsap';

export function portfolioSlider() {
	let anim = null;
	let isAnimating = false;
	let isReversed = false;
	let yOffset = 0;

	const animationContainer = document.querySelector('.js-lottie-cube');

	const animationOptions = {
		container: animationContainer,
		renderer: 'svg',
		loop: true,
		autoplay: false,
		path: '../../lottie/anim-cube.json',
	};

	anim = lottie.loadAnimation(animationOptions);

	const swiperMain = new Swiper('.js-slider', {
		speed: 2200,
		slidesPerView: 1,
		mousewheel: true,
		centeredSlides: true,
	});

	swiperMain.on('slideChangeTransitionStart', () => {
		const activeSlide = swiperMain.slides[swiperMain.activeIndex];

		swiperMain.slides.forEach((slide) => {
			slide.classList.remove(
				'js-next-slide-animation',
				'js-prev-slide-animation',
			);
		});

		if (swiperMain.activeIndex > swiperMain.previousIndex) {
			activeSlide.classList.add('js-next-slide-animation');
		}
		if (swiperMain.activeIndex < swiperMain.previousIndex) {
			activeSlide.classList.add('js-prev-slide-animation');
		}

		swiperLeft.slideTo(swiperMain.activeIndex, 2200, false);
		swiperTop.slideTo(swiperMain.activeIndex, 2200, false);
	});

	swiperMain.on('slideNextTransitionStart', () => {
		if (!isAnimating) {
			anim.setSpeed(1.05);
			anim.setDirection(1);
			anim.play();
			isReversed = false;
		}
		yOffset -= 20;
		swiperRight.slideTo(swiperMain.activeIndex, 1500, false);
		moveTopAnim(yOffset);
		scaleAnimation();
		noiseAnimation();
	});

	swiperMain.on('slidePrevTransitionStart', () => {
		if (!isAnimating) {
			anim.setSpeed(1.05);
			anim.setDirection(-1);
			anim.play();
			isReversed = true;
		}
		yOffset += 20;
		swiperRight.slideTo(swiperMain.activeIndex, 2800, false);
		moveTopAnim(yOffset);
		scaleAnimation();
		noiseAnimation();
	});

	swiperMain.on('slideChangeTransitionEnd', () => {
		anim.setSpeed(0.0001);
		anim.play();
		isAnimating = false;
	});

	const swiperLeft = new Swiper('.js-slider-left', {
		slidesPerView: 2,
		direction: 'horizontal',
	});

	const swiperTop = new Swiper('.js-slider-top', {
		slidesPerView: 2,
		direction: 'horizontal',
	});

	const swiperRight = new Swiper('.js-slider-right', {
		slidesPerView: 2,
		direction: 'horizontal',
	});
}

function moveTopAnim(yOffset) {
	const animateBlocks = document.querySelectorAll('.js-move-top-anim');

	animateBlocks.forEach((animateBlock) => {
		const animationTop = gsap.to(animateBlock, {
			duration: 3.5,
			y: yOffset,
			ease: 'power1.inOut',
		});
		animationTop.play();
	});
}

function scaleAnimation() {
	const scaleBlocks = document.querySelectorAll('.js-scale-anim');

	const tl = gsap.timeline();

	tl.to(scaleBlocks, { duration: 1.5, scale: 1 });

	tl.to(scaleBlocks, { duration: 2, scale: 0.95 });

	tl.play();
}
function noiseAnimation() {
	const filter = document.getElementById('noise');
	const turbulence = filter.querySelector('#turbulence');
	const displacementMap = filter.querySelector('feDisplacementMap');

	const tl = gsap.timeline({yoyo: true });

	tl.to([turbulence, displacementMap], {
		duration: 0,
		attr: { baseFrequency: '0', octaves: '0', scale: '1' },
	});

	tl.to([turbulence, displacementMap], {
		duration: 1.1,
		attr: { baseFrequency: '.0025', octaves: '5', scale: '50' },
	});

	tl.to([turbulence, displacementMap], {
		duration: 1.1,
		attr: { baseFrequency: '0', octaves: '0', scale: '1' },
	});

	tl.play();
}
