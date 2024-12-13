const body = document.body

// NAVBAR TOGGLE
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hambur');

hamburger.onclick = () => {
    navbarNav.classList.toggle('nav-active')
}

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('nav-active')
    }
})
// NAVBAR TOGGLE END

// TOMBOL MENU
const makanan = document.querySelector('#makanan');
const minuman = document.querySelector('#minuman');
const camilan = document.querySelector('#camilan');

const menuMakan = document.querySelector('.container-makan')
const menuMinum = document.querySelector('.container-minum')
const menuCamil = document.querySelector('.container-camil')

makanan.onclick = () =>{
    makanan.classList.add('btn-active')
    minuman.classList.remove('btn-active')
    camilan.classList.remove('btn-active')

    menuMakan.classList.remove('d-none')
    menuMinum.classList.add('d-none')
    menuCamil.classList.add('d-none')
}
minuman.onclick = () =>{
    makanan.classList.remove('btn-active')
    minuman.classList.add('btn-active')
    camilan.classList.remove('btn-active')

    menuMakan.classList.add('d-none')
    menuMinum.classList.remove('d-none')
    menuCamil.classList.add('d-none')
}
camilan.onclick = () =>{
    makanan.classList.remove('btn-active')
    minuman.classList.remove('btn-active')
    camilan.classList.add('btn-active')

    menuMakan.classList.add('d-none')
    menuMinum.classList.add('d-none')
    menuCamil.classList.remove('d-none')
}
// TOMBOL MENU END