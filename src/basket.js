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

const basketItem=document.createElement('li')
basketItem.classList.add('basket__item')
basketList.append(basketItem)

const basketOptions=document.createElement('div')
basketOptions.classList.add('basket__options')
basketContainer.append(basketOptions)


const basketFullPrice=document.createElement('div')
basketFullPrice.classList.add('basket__full-price')
basketFullPrice.innerHTML="Итого: 0"


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
