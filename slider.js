  
let swiper = new Swiper('.swiper',{
    spaceBetween:300,
    slidesPerView:1,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
    },
    loop:true,
   
});

export {swiper}