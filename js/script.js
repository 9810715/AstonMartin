document.addEventListener(`DOMContentLoaded`, function(){
    AOS.init();
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
    var swiper = new Swiper(".newsSwiper", {
      loop: true,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})