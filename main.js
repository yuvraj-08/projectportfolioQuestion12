let nav = document.getElementById("navbarNav");
let nlink = document.getElementsByClassName('nav-link');

for (var i = 0; i < nlink.length; i++) {
    nlink[i].addEventListener('click', function() {
        nav.classList.remove("show");
        console.log("0");
    });
}