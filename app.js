const selectCoches = document.querySelector('#numCoches')
const container = document.querySelector('#contenedor')
const button = document.querySelector('button')
const tabla = document.querySelector('#scores')
const reset = document.querySelector('#reset')

class Coche {
    constructor(name, delay, img){
        this.name = 'Coche ' + name
        this.delay = delay
        this.img = 'img/'+ img + '.png'
    } 
}

class Circuito {
    constructor() {
      this.coches = []
    }

    addCoche(cocheObj) {
        this.coches.push(cocheObj)
    }

    removeCoches(){
        this.coches = []
    }

    displayCoches(){
        while (container.firstChild) {
            container.removeChild(container.firstChild)
          }

        this.coches.forEach(coche => { 
            const div = document.createElement("div");
            const img = document.createElement("img");
            div.classList.add('coche')
            img.classList.add('coche')
            img.src = coche.img
            div.appendChild(img)
            container.appendChild(div)
        })
    }

    runCoches(c){
        this.coches.forEach((coche, i)=> { 
            c[i].style.setProperty('--delay', coche.delay + 's')
            c[i].classList.add('animacion')
        })
    }

    printScores(){
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild)
          }

       let ranking = demo.coches.sort((a, b) => a.delay - b.delay)
       let maxDelay = ranking[ranking.length -1].delay

       setTimeout(function () {
        for (const rank of ranking) {
            let position = document.createElement("li")
            position.append(rank.name)
            tabla.appendChild(position)
            tabla.style.display = "inline-block"
       }
    }, maxDelay * 1000)
       
    }
}

const demo = new Circuito()
let randomNum = () => Math.floor(Math.random() * 15) + 1;

selectCoches.addEventListener('change', function () {
    demo.removeCoches()
    let num = parseInt(selectCoches.value)

    for (i = 1; i <= num; i++) {
        demo.addCoche(new Coche(i, randomNum(), i))
    }
    demo.displayCoches()
})

button.addEventListener('click', function () {
    const coches = document.querySelectorAll('#contenedor div')
    demo.runCoches(coches)
    demo.printScores()
    selectCoches.style.display = "none";
    button.style.display = "none";
    reset.style.display = "inline-block"
})

reset.addEventListener('click', function () {
    tabla.innerHTML = ''
    container.innerHTML = ''
    selectCoches.selectedIndex = 0
    selectCoches.style.display = "inline-block";
    button.style.display = "inline-block";
    tabla.style.display="none"
    reset.style.display = "none"
})

