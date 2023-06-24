let swiper = new Swiper('.swiper-container',{
    spaceBetween:50,
    slidesPerView:1,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clicable:true,
        dynamicBullets:true,
    },
    loop:true,
});