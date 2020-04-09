/********* ANIMATE HOME BTN *********/
const heroBtn = document.querySelector('.hero--btn')
const arrowEl = document.querySelector('.arrow')
const btnTextEl = document.querySelector('.btn--text')

const animateCTABtn = () => {
    arrowEl.classList.toggle('arrow-hover')
    btnTextEl.classList.toggle('btn-text-hover')
}

heroBtn.addEventListener('mouseenter', animateCTABtn)
heroBtn.addEventListener('mouseleave', animateCTABtn)

/********* ADD COUNTRIES, STATES, CITIES ON HOME PAGE *********/
// add countries
const countriesvisited = ['🇺🇸 United States', '🇪🇨 Ecuador', '🇨🇦 Canada']

// add states
const statesVisited = ['Arizona', 'Illinois', "California", 'Florida', 'New York', "Massachutes", 'Washington', 'Colorado', 'Minnesota', 'Wisconsin', 'Utah', 'Michigan', 'Indiana', 'Massachutes', 'Nebraska', 'Iowa', 'Nevada']

// add cities
const citiesVisited = ['Chicago', 'Boston', "New York City", 'Denver', 'Fort Collins', 'Quito', 'Quebec City', 'Tuscon', 'Seattle', 'Los Angeles', 'St. Paul']

const countriesEl = document.getElementById('countries')
const citiesEl = document.getElementById('cities')
const statesEl = document.getElementById('states')

populateDestination(countriesEl, countriesvisited, countries)
populateDestination(statesEl, statesVisited, states)
populateDestination(citiesEl, citiesVisited, cities)

/********* CHANGE VOYAGES *********/
const nextBtn = document.querySelector('.controls--right')

const voyageImage = document.querySelector('.voyages')
const voyageTitleEl = document.querySelector('.voyages--name')
const voyageGroup = document.querySelector('.table')

const voyageTitle = document.querySelector('.voyages--name')
const voyageName = document.querySelector('.table--name')
const voyageDescription = document.querySelector('.table--description')
const voyageDate = document.querySelector('.table--date')

nextBtn.addEventListener('click', (e) => {
    voyageGroup.classList.add('trans')
    voyageTitleEl.classList.add('trans')
    voyageImage.classList.add('fadeIn')
    
    voyageImage.style.backgroundImage = 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .5)),url("images/ecuador-1.jpg")'
    voyageTitle.textContent = 'Ecuador'
    voyageName.textContent = 'Quito'
    voyageDescription.textContent = 'Exploring the unknown'
    voyageDate.textContent = '2018'
})