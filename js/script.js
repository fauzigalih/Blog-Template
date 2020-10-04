const btns = document.querySelectorAll('nav ul li a.nav-link');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        const active = document.querySelector('nav ul li a.active');
        active.classList.remove('active');
        this.classList.add('active');
    });
}

if(document.querySelector('main.main') || document.querySelector('main.static')) document.body.style.backgroundColor = 'white';

// if(document.querySelector('main').offsetHeight <= vh(100)) document.querySelector('footer').classList.add('fixed');

// if(window.innerHeight <= '100vh') document.querySelector('footer').classList.add('fixed');

const vh = window.innerHeight;
const vh1 = $(window).innerHeight;
const vh2 = $(window).height();
const vh3 = document.body.offsetHeight;
console.log(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0));
