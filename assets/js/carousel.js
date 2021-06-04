// selecionando todos os itens do carousel
const carousel = document.querySelectorAll('[data-js="carousel__item"]')

// selecionando os botoes
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

// identifico o ultimo item do carousel
const lastCarouselItem = carousel.length -1

// item do carousel atual
let currentCarouselItem = 0

// 
const classRemove = () => carousel.forEach(item => item.classList.remove('carousel__item--visible'))
const classAdd = () => carousel[currentCarouselItem].classList.add('carousel__item--visible')

// escuta os botoes
nextButton.addEventListener('click', () => {
    currentCarouselItem === lastCarouselItem ? currentCarouselItem = 0 : currentCarouselItem ++
    classRemove()
    classAdd()
})
prevButton.addEventListener('click', () => {
    currentCarouselItem === 0 ? currentCarouselItem = lastCarouselItem : currentCarouselItem --
    classRemove()
    classAdd()
})