let swiper = new Swiper('.swiper-container',{
    spaceBetween:30,
    slidesPerView:1,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    slidesPerView:1,
    pagination:{
        el:'.swiper-pagination',
        clicable:true,
        dynamicBullets:true,
    },
});