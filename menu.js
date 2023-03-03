const toggleButton = document.getElementById('botonMenu')
const navWrapper = document.getElementById('navG')
const linkItem = document.querySelectorAll('.linkItem')

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click', e => {
    if (e.target.id === 'navG') {
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close')
    }
})

linkItem.forEach(e=>{
    e.addEventListener('click',e=>{
        navWrapper.classList.remove('show')
        toggleButton.classList.remove('close') 
    })
})