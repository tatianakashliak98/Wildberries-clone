import { modalWindow, close__modal } from "./card_modal_window.js";
import { getProducts } from "./api.js";


  getProducts();
  
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

let mainContainer = document.querySelector("main");
mainContainer.addEventListener('click', modalWindow);
let modalClose = document.querySelector(".modal__close");
modalClose.addEventListener('click', close__modal);
