// Drop-Down menu in Navbar for smaller screens
const dropDown = document.getElementById('Navbar-Drop-Down');
const navbarUl = document.getElementById('Navbar-ul');

dropDown.addEventListener('click', () => {
    navbarUl.classList.toggle('Navbar-active');
    setTimeout(() => {
        navbarUl.classList.toggle('Navbar-active2');
    }, 0);
});

// Remove Drop-Down menu after clicking a link
var navbarLinks = document.getElementsByClassName('Navbar-Links');

for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', () => {
        navbarUl.classList.remove('Navbar-active');
        navbarUl.classList.remove('Navbar-active2');
    });
};

