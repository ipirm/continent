const swiper = new Swiper('#js-swiper__inner', {
	spaceBetween: 0,
	loop: true,
	slidesPerView: 1,
	allowTouchMove: false,
	autoplay: true
});

const swiper2 = new Swiper('#js-swiper-outer', {

	spaceBetween: 0,
	loop: true,
	slidesPerView: 3,
	slidesPerGroup: 3,
	allowTouchMove: false,
	autoplay: true,
	breakpoints: {
  
    600: {
      slidesPerView: 1,
     slidesPerGroup: 1,
    },
   },
});
