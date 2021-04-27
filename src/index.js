const mainHome = document.querySelector('.js-main-home')
const mainBookmarked = document.querySelector('.js-main-bookmarked')
const mainCreate = document.querySelector('.js-main-create')
const mainProfile = document.querySelector('.js-main-profile')

const buttonHome = document.querySelector('.js-button-home')
const buttonBookmarked = document.querySelector('.js-button-bookmarked')
const buttonCreate = document.querySelector('.js-button-create')
const buttonProfile = document.querySelector('.js-button-profile')

buttonHome.addEventListener('click', () => {
  mainHome.classList.remove('hidden')
  mainBookmarked.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')

  buttonHome.classList.add('active')
  buttonBookmarked.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonBookmarked.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmarked.classList.remove('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')

  buttonHome.classList.remove('active')
  buttonBookmarked.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmarked.classList.add('hidden')
  mainCreate.classList.remove('hidden')
  mainProfile.classList.add('hidden')

  buttonHome.classList.remove('active')
  buttonBookmarked.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.add('hidden')
  mainBookmarked.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.remove('hidden')

  buttonHome.classList.remove('active')
  buttonBookmarked.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
})

const buttonAnswer = document.querySelector('.quiz-card__button')
const answer = document.querySelector('.quiz-card__answer')

buttonAnswer.addEventListener('click', () => {
  answer.classList.toggle('hidden')
})

const bookmarkFlag = document.querySelector('.quiz-card__bookmark')

bookmarkFlag.addEventListener('click', () => {
  bookmarkFlag.classList.toggle('quiz-card__bookmark--checked')
})

const buttonDarkmode = document.querySelector('.js-button-darkmode')
const body = document.querySelector('body')
buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})
