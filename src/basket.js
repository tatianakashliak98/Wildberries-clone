const wrapper=document.querySelector('.wrapper')
const basketModal=document.createElement('div')
basketModal.classList.add('basket__modal')


basketModal.style.display='none'
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



const basketList=document.createElement('ul')
basketList.classList.add('basket__list-modal')
basketContainer.append(basketList)



const basketOptions=document.createElement('div')
basketOptions.classList.add('basket__options')
basketContainer.append(basketOptions)


const basketFullPrice=document.createElement('div')
basketFullPrice.classList.add('basket__full-price')
let totalPrice=0
basketFullPrice.innerHTML=`Итого:${totalPrice}`

const basketBtnClear=document.createElement('button')
basketBtnClear.classList.add('basket__btn-clear')
basketBtnClear.innerHTML='Очистить Корзину'
basketOptions.append(basketFullPrice,basketBtnClear)

export function getBasketWindow({target}){
    if(target.className === "header__basket-btn"){
        basketModal.style.display = "block"
    }
    else{
        return
    }


} 

export {basketModal}
export function closeBasketModal({target}){
    if(target === basketBtnClose || target === basketModal){
        basketModal.style.display = 'none'
    }      
}

let basket=[]
export function addToBasket(e){
 
    if(e.target.className === 'btn-basket'){
        console.log(3213)
        let card = e.target.closest('.card');
       // let modalCard = e.target.closest('.modal')
        // || modalCard.getElementById("modal__image").src,
        // || modalCard.querySelector('#modal__title').innerText,
        // || modalCard.querySelector('#modal__price').innerText, 
        const productInfo = {
       
        imageSrc: card.querySelector(".product-img").src, 
        name: card.querySelector('.card__name').innerText, 
        price: card.querySelector('.price').innerText, 
        }

        let search = basket.find((x) => x.imageSrc === productInfo.imageSrc)
        if(search === undefined){
      
            basket.push(productInfo)
        } else{
            alert('Товар уже есть в корзине')
        }
        createCard()
    calcPrice()
    saveToLS()
    console.log(basket)
 
}
}


function createCard(){
    basketList.innerHTML='';
    basket.forEach((el)=>{
        const cardHTML = `<li class="card__item">
        <div class="card__basket-modal" >
        <img src=${el.imageSrc} alt="card-image" class="card__img-modal">
        <div class="basket__description-modal">
        <div class="cart__item-description">${el.name}
        </div>
        <div class="item__price">${el.price}
        </div></div>
        <button class="btn_delete-item">Удалить</button></div>
        </li>`
        ;
    
        basketList.insertAdjacentHTML('beforeend', cardHTML);
    })
   
}

basketBtnClear.addEventListener('click',clearList)
function clearList(e){
    if (e.target.className === 'basket__btn-clear'){
        basketList.innerHTML="";
        basket=[]
        calcPrice()
        saveToLS()
}       
    }
    

basketList.addEventListener('click',deleteProduct)
   
function deleteProduct({target}){
if(target.className === "btn_delete-item"){
    const itemOfList= target.parentElement.closest('li')
    const imgSrc = itemOfList.querySelector('img').src
    
    const index=basket.findIndex(function(prod){
        return prod.imageSrc == imgSrc
    })
    basket.splice(index,1)
    itemOfList.remove()
    calcPrice()
    saveToLS()
}
}

function calcPrice(){
    let sum=0
   basket.forEach((el)=>{
    sum+=parseInt(el.price)
   return sum
      
})
basketFullPrice.innerHTML=`Итого:${sum}`
}


function saveToLS(){
    localStorage.setItem('basket',JSON.stringify(basket))
}

function getBasket(){
    if(localStorage.hasOwnProperty('basket')){
        const arr = JSON.parse(localStorage.getItem('basket'))
        for (let el of arr){
            basket.push(el)
            createCard()
            calcPrice()
        }
        console.log(basket)
    }  
}


getBasket()