const navbarNav = document.querySelector('.navbar-nav')
const menu = document.querySelector('#hamburger-menu')

menu.onclick = () => {
    navbarNav.classList.toggle('active')
    console.log('alooo')
}

document.addEventListener('click', (a) => {
    if (!menu.contains(a.target) && !navbarNav.contains(a.target)) {
        navbarNav.classList.remove('active')
    }
})