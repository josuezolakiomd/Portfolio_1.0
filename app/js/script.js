const homeLink = document.querySelector('.start')
const homeBody = document.querySelector('.homeBody')
const sobreBody = document.querySelector('.sobreBody')

homeLink.addEventListener('click', ()=>{
  if(homeBody.classList.contains('hide')){
    homeBody.classList.remove('hide')
    sobreBody.classList.add('hide')
  } else {
    homeBody.classList.add('hide')
    sobreBody.classList.remove('hide')
  }
})
