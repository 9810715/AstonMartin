document.addEventListener(`DOMContentLoaded`, function(){
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
})