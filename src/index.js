import getElement from './utils/getElement'

const mainHome = getElement('.js-main-home')
const mainBookmarked = getElement('.js-main-bookmarked')
const mainCreate = getElement('.js-main-create')
const mainProfile = getElement('.js-main-profile')

const buttonHome = getElement('.js-button-home')
const buttonBookmarked = getElement('.js-button-bookmarked')
const buttonCreate = getElement('.js-button-create')
const buttonProfile = getElement('.js-button-profile')

const buttonAnswer = document.querySelector('.quiz-card__button')
const answer = document.querySelector('.quiz-card__answer')

const bookmarkFlag = document.querySelector('.quiz-card__bookmark')

const buttonDarkmode = getElement('.js-button-darkmode')
const body = getElement('body')

buttonHome.addEventListener('click', () => {
  allPagesHidden()
  mainHome.classList.remove('hidden')

  allButtonsNotActive()
  buttonHome.classList.add('active')
})

buttonBookmarked.addEventListener('click', () => {
  allPagesHidden()
  mainBookmarked.classList.remove('hidden')

  allButtonsNotActive()
  buttonBookmarked.classList.add('active')
})

buttonCreate.addEventListener('click', () => {
  allPagesHidden()
  mainCreate.classList.remove('hidden')

  allButtonsNotActive()
  buttonCreate.classList.add('active')
})

buttonProfile.addEventListener('click', () => {
  allPagesHidden()
  mainProfile.classList.remove('hidden')

  allButtonsNotActive()
  buttonProfile.classList.add('active')
})

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

bookmarkFlag.addEventListener('click', () => {
  bookmarkFlag.classList.toggle('quiz-card__bookmark--checked')
})

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})

function allButtonsNotActive() {
  buttonHome.classList.remove('active')
  buttonBookmarked.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
}

function allPagesHidden() {
  mainHome.classList.add('hidden')
  mainBookmarked.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
}

/* function changePage(page) {
  allPagesHidden()
  page.classList.remove('hidden')
} */
