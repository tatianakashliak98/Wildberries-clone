import { modalWindow, close__modal } from "./card_modal_window.js";
import { getProducts } from "./api.js";

  getProducts();


let mainContainer = document.querySelector("main");
mainContainer.addEventListener('click', modalWindow);
let modalClose = document.querySelector(".modal__close");
modalClose.addEventListener('click', close__modal);

import { getBasketWindow,closeBasketModal,basketModal } from "./basket.js";

const headerBasket=document.querySelector('.header__basket')
headerBasket.addEventListener('click',getBasketWindow)

basketModal.addEventListener('click',closeBasketModal)



const cardBtnAdd= document.getElementById('btn-basket')
const itemCard=document.querySelector('.card')
const cardImage=document.querySelector('.card__picture')
const fieldBasket=document.querySelector('.discount__and__basket')
cardBtnAdd.addEventListener('click',addToBasket)
function addToBasket(e){
    console.log(e.target.parentElement)
}
