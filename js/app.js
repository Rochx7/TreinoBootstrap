const header = document.querySelector('#header')

//Fixed header
window.onscroll = function () {
    if (window.pageYOffset > 140) {
        header.classList.add('active');
    } else {
        header.classList.remove('active')
    }

}
