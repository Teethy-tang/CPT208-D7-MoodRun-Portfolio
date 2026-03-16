// Explore button smooth scroll

document.getElementById("exploreBtn").onclick = function () {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

};



// Dynamic particles background

tsParticles.load("particles-bg", {

    background: {
        color: "#0f172a"
    },

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#22c55e"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 1
        }

    },

    interactivity: {

        events: {

            onHover: {
                enable: true,
                mode: "repulse"
            },

            onClick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            repulse: {
                distance: 100
            },

            push: {
                quantity: 4
            }

        }

    }

});



// Scroll Reveal animations

ScrollReveal().reveal('.hero', {

    distance: '80px',
    duration: 1500,
    origin: 'bottom'

});

ScrollReveal().reveal('.about', {

    distance: '80px',
    duration: 1500,
    origin: 'left',
    delay: 200

});

ScrollReveal().reveal('.card', {

    distance: '80px',
    duration: 1500,
    origin: 'bottom',
    interval: 200

});
