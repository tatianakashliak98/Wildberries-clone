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

let modalClose = document.getElementsByClassName("modal-close")[0];
modalClose.onclick = function() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none"; // Скрываем модальное окно
}

let mainContainer = document.querySelector("main");

mainContainer.addEventListener('click', modalWindow);

function modalWindow({target}) {
  let nameClass = target.getAttribute("class");
  if (nameClass === "view__container" ) {
    let card = target.closest('.card');
    let title = card.querySelector(".card__name").innerHTML;
    let imageSrc = target.previousElementSibling.src;
    let price = card.querySelector(".price").innerHTML;
  let modal = document.getElementById("myModal");
  let modalTitle = document.getElementById("modal-title");
  let modalImage = document.getElementById("modal-image");
  let modalPrice = document.getElementById("modal-price");

  modalTitle.innerHTML = title;
  modalImage.src = imageSrc;
  modalPrice.innerHTML = price;
  
  modal.style.display = "block";

  } else if (nameClass === "view__card-btn") {
    let card = target.closest('.card');
    let title = card.querySelector(".card__name").innerHTML;
    let price = card.querySelector(".price").innerHTML;
    let imageSrc = target.parentElement.previousElementSibling.src;

    let modal = document.getElementById("myModal");
  let modalTitle = document.getElementById("modal-title");
  let modalImage = document.getElementById("modal-image");
  let modalPrice = document.getElementById("modal-price");

  modalTitle.innerHTML = title;
  modalImage.src = imageSrc;
  modalPrice.innerHTML = price;
  
  modal.style.display = "block";

  }
}

