const toggleButton = document.getElementById('botonMenu')
const navWrapper = document.getElementById('navG')

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