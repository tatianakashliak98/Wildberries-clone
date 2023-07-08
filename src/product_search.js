export function search(event) {
    let searchValue = event.target.value.toLowerCase().trim();
    let mainHeader = document.getElementById('mainHeader');

    if (searchValue !== '') {
        mainHeader.innerText = 'Результат поиска:';
        mainHeader.classList.remove('main__header');
        mainHeader.classList.add('main__header-search');

        document.querySelector('.swiper-container').style.display = 'none';
    } else {
        mainHeader.innerText = 'Хиты продаж';
        mainHeader.classList.remove('main__header-search');
        mainHeader.classList.add('main__header');

        document.querySelector('.swiper-container').style.display = '';
    }

    let cardNames = document.getElementsByClassName('card__name');

    for (let i = 0; i < cardNames.length; i++) {
        let cardName = cardNames[i];
        let card = cardName.closest('.card');

        let nameText = cardName.textContent;

        if (nameText.toLowerCase().includes(searchValue)) {
            card.classList.remove('hidden');
            card.style.display = 'block';

            let highlightedText = nameText.replace(new RegExp(searchValue, 'gi'),
                function(match) {
                    return '<span class="highlight">' + match + '</span>';
                }
            );
            cardName.innerHTML = highlightedText;
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
            cardName.innerHTML = cardName.textContent;
        }
    }

    console.log(searchValue);
}


