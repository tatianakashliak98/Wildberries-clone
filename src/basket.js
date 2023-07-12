const wrapper = document.querySelector(".wrapper");
const basketModal = document.createElement("div");
basketModal.classList.add("basket__modal");

basketModal.style.display = "none";
const basketContainer = document.createElement("div");
basketContainer.classList.add("basket__container");
basketModal.append(basketContainer);

const basketHeaderModal = document.createElement("div");
basketHeaderModal.classList.add("basket__header-modal");
basketContainer.append(basketHeaderModal);

const basketModalTitle = document.createElement("div");
basketModalTitle.classList.add("basket__title-modal");
basketModalTitle.innerHTML = "Корзина";
basketHeaderModal.append(basketModalTitle);

const basketBtnClose = document.createElement("button");
basketBtnClose.classList.add("basket__btn-close");
basketBtnClose.innerHTML = "X";
basketHeaderModal.append(basketBtnClose);
wrapper.append(basketModal);

const basketList = document.createElement("ul");
basketList.classList.add("basket__list-modal");
basketContainer.append(basketList);

const basketOptions = document.createElement("div");
basketOptions.classList.add("basket__options");
basketContainer.append(basketOptions);

const countProductBasket = document.createElement("div");
countProductBasket.classList.add("basket__count-product");
countProductBasket.innerHTML = `Количество товаров: 0`;
basketOptions.append(countProductBasket);

const basketFullPrice = document.createElement("div");
basketFullPrice.classList.add("basket__full-price");
let totalPrice = 0;
basketFullPrice.innerHTML = `Итого: ${totalPrice}руб`;

const basketBtnClear = document.createElement("button");
basketBtnClear.classList.add("basket__btn-clear");
basketBtnClear.innerHTML = "Очистить Корзину";
basketOptions.append(basketFullPrice, basketBtnClear);

const body = document.querySelector("body");

export function getBasketWindow({ target }) {
  if (target.className === "header__basket-btn") {
    basketModal.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    return;
  }
}

export { basketModal };
export function closeBasketModal({ target }) {
  if (target === basketBtnClose || target === basketModal) {
    basketModal.style.display = "none";
    body.style.overflow-y = "scroll";
  }
}

let basket = [];

export function addToBasket({target}) {
  let card = target.closest(".card");
  if (target.className === "btn-basket") {

    const productInfo = {
      imageSrc: card.querySelector(".product-img").src,
      name: card.querySelector(".card__name").innerText,
      oldPrice: card.querySelector(".old-price").innerText,
      newPrice: card.querySelector(".price").innerText,
    };

    let search = basket.find((x) => x.imageSrc === productInfo.imageSrc);
    if (search === undefined) {
      target.classList.add("btn-basket-ok");
      target.classList.remove("btn-basket");
      basket.push(productInfo);
    } 
    createCard();
    calcPriceAndCount();
    saveToLS();
  } else if (target.className === "btn-basket-ok") {
    let imgSrc = card.querySelector(".product-img").src;
    const index = basket.findIndex(function (item) {
      return item.imageSrc == imgSrc;
    });
    basket.splice(index, 1);
    let list = document.querySelector(".basket__list-modal");
    let cards = list.querySelectorAll(".card__item");
    cards.forEach(function(item){
      let itemSrc = item.querySelector("img").src;
      if (itemSrc === imgSrc) {
        item.remove();
      }
    });
    target.classList.remove("btn-basket-ok");
    target.classList.add("btn-basket");
    saveToLS();
    calcPriceAndCount();
  }
}

function createCard() {
  basketList.innerHTML = "";
  basket.forEach(({imageSrc,name,newPrice,oldPrice}) => {
    const cardHTML = `<li class="card__item">
        <div class="card__basket-modal" >
        <img src=${imageSrc} alt="card-image" class="card__img-modal">
        <div class="basket__description-modal">
        <div class="cart__item-description">${name}</div>
        <div class="item__price">${newPrice}</div>
        <div class="item__old-price">${oldPrice}</div>

        </div>
        <button class="btn_delete-item">Удалить</button></div>
        </li>`;
    basketList.insertAdjacentHTML("beforeend", cardHTML);
  });
}

basketBtnClear.addEventListener("click", clearList);
function clearList({target}) {
  if (target.className === "basket__btn-clear") {
    basketList.innerHTML = "";
    basket = [];
    calcPriceAndCount();
    saveToLS();
    let buttonsBasket = document.querySelectorAll(".btn-basket-ok");
    buttonsBasket.forEach((item)=> {
      item.classList.add("btn-basket");
      item.classList.remove("btn-basket-ok");
    });
  }
}

basketList.addEventListener("click", deleteProduct);

function deleteProduct({ target }) {
  if (target.className === "btn_delete-item") {
    const itemOfList = target.parentElement.closest("li");
    let imgSrc = itemOfList.querySelector("img").src;
    const index = basket.findIndex(function (prod) {
      return prod.imageSrc == itemOfList.querySelector("img").src;
    });
    let buttonsBasket = document.querySelectorAll(".btn-basket-ok");
    buttonsBasket.forEach((item) =>{
      if (
        item.closest(".card__picture").querySelector(".product-img").src ===
        imgSrc
      ) {
        item.classList.remove("btn-basket-ok");
        item.classList.add("btn-basket");
      }
    });
    basket.splice(index, 1);
    itemOfList.remove();
    saveToLS();
    calcPriceAndCount();
  }
}

function calcPriceAndCount() {
  let sum = basket
    .map((el) => parseInt(el.newPrice))
    .reduce((res, current) => res + current, 0);
  basketFullPrice.innerHTML = `Итого: ${sum}руб`;
  let countProd = 0;
  countProd = basket.length;
  countProductBasket.innerHTML = `Количество товаров: ${countProd}`;
}

function saveToLS() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket() {
  if (localStorage.hasOwnProperty("basket")) {
    const arr = JSON.parse(localStorage.getItem("basket"));
    for (let el of arr) {
      basket.push(el);
      createCard();
      calcPriceAndCount();
    }
  }
}

getBasket();
