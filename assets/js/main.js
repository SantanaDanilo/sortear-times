const nome = document.querySelector('.nomes__input')
const enviar = document.querySelector('.nomes__btn')
const lista = document.querySelector('.nomes__lista')
const times = document.querySelector('.times')
const timeListaA = document.querySelector('.time__lista-a')
const timeListaB = document.querySelector('.time__lista-b')
const bancoLista = document.querySelector('.banco__lista')
const timeArr = [timeListaA, timeListaB]
const listaArr = []
let banco = []

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

enviar.addEventListener('click', () => {
    lista.classList.remove('nomes__lista--none')
    lista.classList.add('nomes__lista')

    times.style.display = 'none'

    const linha = document.createElement('div')
    const linhaLi = document.createElement('li')
    const linhaBtn = document.createElement('button')
    
    linhaLi.innerText = nome.value
    linhaBtn.innerText = 'X'

    linha.appendChild(linhaLi)
    linha.appendChild(linhaBtn)

    linha.classList.add('lista__div')
    linhaLi.classList.add('lista__linha')
    linhaBtn.classList.add('lista__btn')

    lista.appendChild(linha)
    
    listaArr.push(linhaLi.innerText)

    nome.value = ""
    nome.focus()

    linhaBtn.addEventListener('click', () => {
        if(listaArr.includes(linhaLi.innerText)) {
            listaArr.splice(listaArr.indexOf(linhaLi.innerText), 1)
        }

        linha.style.display = 'none'
    })
})

const sortear = document.querySelector('.sortear')

sortear.addEventListener('click', () => {
    lista.classList.remove('nomes__lista')
    lista.classList.add('nomes__lista--none')
    
    times.style.display = 'inline'

    if(listaArr.length > 12) {
        shuffle(listaArr)
        banco = listaArr.slice(12)
        listaArr.splice(12)
    }

    function adicionaLista() {
        for(let i = 0; i < listaArr.length; i++) {
            const timeLi = document.createElement('li')
    
            timeLi.classList.add('time__nome')
            timeLi.innerText = listaArr[parseInt(Math.random() * listaArr.length)]

            const bancoLi = document.createElement('li')

            bancoLi.classList.add('banco__linha')
            bancoLi.innerText = banco[parseInt(Math.random() * banco.length)]

            for(let i = 0; i < banco.length; i++) {
                bancoLista.appendChild(bancoLi)
            }

            let listaAleatorio = parseInt(Math.random() * timeArr.length)

            if(listaAleatorio === 0 && timeListaA.childElementCount < 6) {
                timeListaA.appendChild(timeLi)
            } else if(listaAleatorio !== 0 && timeListaA.childElementCount < 6) {
                timeListaA.appendChild(timeLi)
            } else {
                timeListaB.appendChild(timeLi)
            }

            if(listaArr.includes(timeLi.innerText)) {
                listaArr.splice(listaArr.indexOf(timeLi.innerText), 1)
            }

            if(banco.includes(bancoLi.innerText)) {
                banco.splice(banco.indexOf(bancoLi.innerText), 1)
            }
        }
    }

    setInterval(adicionaLista, 1000)
})
