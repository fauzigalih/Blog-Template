const btns = document.querySelectorAll('nav ul li a.nav-link');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        const active = document.querySelector('nav ul li a.active');
        active.classList.remove('active');
        this.classList.add('active');
    });
}