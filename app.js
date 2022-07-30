const burger = document.querySelector('.menu-icon-btn')

burger.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open')
})
