

export function close__modal(){
    let modal = document.getElementById("card__preview");
    modal.style.display = "none"; 
}


export function modalWindow({target}) {
  let nameClass = target.getAttribute("class");
  let modal = document.getElementById("card__preview");
  let modalTitle = document.getElementById("modal__title");
  let modalImage = document.getElementById("modal__image");
  let modalPrice = document.getElementById("modal__price");
  if (nameClass === "view__container" ) {
    let card = target.closest('.card');
    let title = card.querySelector(".card__name").innerHTML;
    let imageSrc = target.previousElementSibling.src;
    let price = card.querySelector(".price").innerHTML;
  modalTitle.innerHTML = title;
  modalImage.src = imageSrc;
  modalPrice.innerHTML = price;
  
  modal.style.display = "block";

  } else if (nameClass === "view__card-btn") {
    let card = target.closest('.card');
    let title = card.querySelector(".card__name").innerHTML;
    let price = card.querySelector(".price").innerHTML;
    let imageSrc = target.parentElement.previousElementSibling.src;

  modalTitle.innerHTML = title;
  modalImage.src = imageSrc;
  modalPrice.innerHTML = price;
  
  modal.style.display = "block";

  }
}
