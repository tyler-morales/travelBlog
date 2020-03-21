const heroBtn = document.querySelector('.hero--btn')
const arrowEl = document.querySelector('.arrow')
const btnTextEl = document.querySelector('.btn--text')

heroBtn.addEventListener('mouseenter', (e) => {
    arrowEl.classList.add('arrow-hover')
    btnTextEl.classList.add('btn-text-hover')
})

heroBtn.addEventListener('mouseleave', (e) => {
    arrowEl.classList.remove('arrow-hover')
    btnTextEl.classList.remove('btn-text-hover')
})

