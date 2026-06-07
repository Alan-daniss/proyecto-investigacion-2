
document.addEventListener("DOMContentLoaded", function() {
    
    window.addEventListener('scroll', function() {
        var intro = document.getElementById('intro-imagen');
        if (intro) {
            var scrollPos = window.scrollY;
            if (scrollPos > 50) {
                intro.classList.add('zoom-out');
            } else {
                intro.classList.remove('zoom-out');
            }
        }
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.2 
    });

    var hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach(function(el) {
        observer.observe(el);
    });

    var botonMenu = document.getElementById("boton-menu");
    if (botonMenu) {
        botonMenu.addEventListener("click", function() {
            var menu = document.getElementById("menu-desplegable");
            if (menu) {
                menu.classList.toggle("menu-visible");
            }
        });
    }
});


window.addEventListener('scroll', function() {
    var titulo = document.querySelector('.titulo');
    if (titulo) {
        var scrollPos = window.scrollY;
        

        if (scrollPos < 200) {
            titulo.style.color = '#ff0055';
            titulo.style.textShadow = '0 0 20px #ff0055';
        } else {
            titulo.style.color = '#40F2FE';
            titulo.style.textShadow = '0 0 20px #40F2FE';
        }
    }
});