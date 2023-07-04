import { modalWindow, close__modal } from "./card_modal_window.js";
import { getProducts } from "./api.js";
import { search } from "./product_search.js";

  getProducts();


let mainContainer = document.querySelector("main");
mainContainer.addEventListener('click', modalWindow);
let modalClose = document.querySelector(".modal__close");
modalClose.addEventListener('click', close__modal);


import { getBasketWindow,closeBasketModal,basketModal } from "./basket.js";

const headerBasket=document.querySelector('.header__basket')
headerBasket.addEventListener('click',getBasketWindow)

basketModal.addEventListener('click',closeBasketModal)

mainContainer.addEventListener('click', addToBasket)


import { addToBasket } from "./basket.js";

document.getElementById('searchInput').addEventListener('input', search); 

