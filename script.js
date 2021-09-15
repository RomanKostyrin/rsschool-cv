const listButton = document.querySelectorAll('.navigation__link')
const burger = document.querySelector('.burger-check')

listButton.forEach((el) => {
  el.addEventListener('click', (event) => {
    burger.checked = false
  })
})
