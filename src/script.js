import { modalWindow, close__modal } from "./card_modal_window.js";
import { getProducts } from "./api.js";
import { swiper } from "../slider.js";

  getProducts();


let mainContainer = document.querySelector("main");
mainContainer.addEventListener('click', modalWindow);
let modalClose = document.querySelector(".modal__close");
modalClose.addEventListener('click', close__modal);


const headerBasket=document.querySelector('.header__basket')
const wrapper=document.querySelector('.wrapper')
// const buttonBasket=document.getElementById('header__basket-btn')
headerBasket.addEventListener('click',function({target}){
    if(target.className === 'header__basket-btn') getBasketWindow()
})
function getBasketWindow(){
    const basketModal=document.createElement('div')
    basketModal.classList.add('basket__modal')
   
    const basketContainer=document.createElement('div')
    basketContainer.classList.add('basket__container')
    basketModal.append(basketContainer)

    const basketHeaderModal=document.createElement('div')
    basketHeaderModal.classList.add('basket__header-modal')
    basketContainer.append(basketHeaderModal)

    const basketModalTitle=document.createElement('div')
    basketModalTitle.classList.add('basket__title-modal')
    basketModalTitle.innerHTML="Корзина"
    basketHeaderModal.append(basketModalTitle)

    const basketBtnClose=document.createElement('button')
    basketBtnClose.classList.add('basket__btn-close')
    basketBtnClose.innerHTML='X'
    basketHeaderModal.append(basketBtnClose)
    wrapper.append(basketModal)

    basketModal.style.display = "block"
    
    function closeBasketModal({target}){
        if(target === basketBtnClose || target === basketModal){
            basketModal.style.display = 'none'
        }      
    }

    basketModal.addEventListener('click',closeBasketModal)


    const basketList=document.createElement('ul')
    basketList.classList.add('basket__list-modal')
    basketContainer.append(basketList)


    const basketBtnClear=document.createElement('button')
    basketBtnClear.classList.add('basket__btn-clear')
    basketBtnClear.innerHTML='Очистить Корзину'
    basketContainer.append(basketBtnClear)

}
