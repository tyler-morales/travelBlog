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


// add states
let statesVisited = ['Arizona', 'Illinois', "California", 'Florida', 'New York', "Massachutes", 'Washington', 'Colorado', 'Minnesota']

// add cities
let citiesVisited = ['Chicago', 'Boston', "New York City", 'Denver', 'Fort Collins', 'Quito', 'Quebec City', 'Tuscon', 'Seattle', 'Los Angeles', 'St. Paul']

let citiesEl = document.getElementById('cities')
let statesEl = document.getElementById('states')

populateDestination(citiesEl, citiesVisited, cities)
populateDestination(statesEl, statesVisited, states)