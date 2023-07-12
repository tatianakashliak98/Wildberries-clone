export let arrayProducts;

 let mainCardsDiv = document.querySelector(".main__cards");
 export function getProducts() {
  fetch('https://64a017bfed3c41bdd7a6fc7b.mockapi.io/products', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
      return res.json();
  }
})
  .then(data => {
    printProducts(data)
  })
}


function printProducts(response) {
  response.map(function(item) {
    let {  id,title, price, image, discount } = item;
    let newPrice = Math.round(price - (discount/100*price));
    mainCardsDiv.innerHTML +=
    `<div class="card"  id="${id}">
    <div class="card__picture">
      <img class="product-img" src="${image}" alt="#">
      <div class="view__container">
        <button type="button" class="view__card-btn">
          Быстрый просмотр
        </button>
      </div>
      <div class="discount__and__basket">
        <div class="discount">-${discount}%</div>
        <button type="button" class="btn-basket"></button>
      </div>
    </div>
    <div class="card__description">
      <div class="card__price">
        <p class="hide__card__name">${title}</p>
        <p class="new__price">
          <span class="hide__description">Стоимость : </span> 
          <span class="price">${newPrice}руб</span>
        </p>
        <p>
          <span class="hide__description">Вместо </span>
          <span class="old-price">${price}руб</span>
        </p>
        <button type="button" class="hide__view__card-btn">
          Смотреть подробнее..
        </button>
      </div>
      <div class="card__name">${title}</div>
    </div>
  </div>`;
  });
    let basketItems = JSON.parse(localStorage.getItem('basket'));
    if (basketItems) {
      response.forEach(function(item){
        basketItems.forEach(function(product){
          if(item.image === product.imageSrc) {
            let arrayBtns = document.querySelectorAll(".btn-basket");
            arrayBtns.forEach(function(button) {
              if (button.closest(".card__picture").querySelector("img").src === product.imageSrc) {
                button.classList.remove("btn-basket");
                button.classList.add("btn-basket-ok")
              }
            })
          }
        })
      })
        
      }
}