import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);


export default function sliderApp() {
	sliderHomePage()
}


function sliderHomePage() {


	const swiper = new Swiper('.sliderMain', {
		slidesPerView: 1,
		loop: true,
		speed: 1500,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: '.sliderMain-button-next',
			prevEl: '.sliderMain-button-prev',
		},
	});

}

