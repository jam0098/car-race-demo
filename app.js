const button = document.querySelector('button')
const selectCoches = document.querySelector('#numCoches')
const container = document.querySelector('#contenedor')
const reset = document.querySelector('#reset')
const tabla = document.querySelector('#scores')
const tabladiv = document.querySelector('.tabla')

const imagenesCoches = [
    { nombre: 'Coche 1', img: 'img/car1.png', delay: '' },
    { nombre: 'Coche 2', img: 'img/car2.png', delay: '' },
    { nombre: 'Coche 3', img: 'img/car3.png', delay: '' },
    { nombre: 'Coche 4', img: 'img/car4.png', delay: '' },
    { nombre: 'Coche 5', img: 'img/car5.png', delay: '' },
    { nombre: 'Coche 6', img: 'img/car6.png', delay: '' },
    { nombre: 'Coche 7', img: 'img/car7.png', delay: '' },
    { nombre: 'Coche 8', img: 'img/car8.png', delay: '' },
    { nombre: 'Coche 9', img: 'img/car9.png', delay: '' },
]

let randomNum = () => Math.floor(Math.random() * (20 - 2)) + 2;
let numCoches = 0

selectCoches.addEventListener('change', function () {
    numCoches = parseInt(selectCoches.value)
    let cochesJugando = [...imagenesCoches.slice(0, numCoches)]
    button.style.display = "inline-block";

    for (i = 0; i < numCoches; i++) {
        const newDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = cochesJugando[i].img
        img.classList.add('coche')
        newDiv.classList.add('coche')
        newDiv.appendChild(img)
        container.appendChild(newDiv)
        let delay = randomNum();
        newDiv.style.setProperty('--delay', delay + 's')
        cochesJugando[i].delay = delay;
    }
    const coches = document.querySelectorAll('#contenedor div')

    button.addEventListener('click', function () {
        let ganadores = [...cochesJugando.sort((a, b) => a.delay - b.delay)]
        let maxDelay = ganadores[ganadores.length - 1].delay;

        for (coche of coches) {
            coche.classList.add('animacion')
        }

        setTimeout(function () {
            for (posicion of ganadores) {
                let asd = document.createElement("li")
                asd.append(posicion.nombre)
                tabla.appendChild(asd)
                tabla.style.display = "inline-block"
            }
        }, maxDelay * 1000)

        button.style.display = "none";
        reset.style.display = "inline-block";
    })
    selectCoches.style.display = "none";

    reset.addEventListener('click', function (e) {
        while (cochesJugando.length > 0) {
            cochesJugando.pop();
        }
        tabla.innerHTML = ''
        container.innerHTML = ''
        selectCoches.selectedIndex = 0
        reset.style.display = "none";
        selectCoches.style.display = "inline-block";
    })
})






