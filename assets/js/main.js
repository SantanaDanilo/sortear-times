const nome = document.querySelector('.nomes__input')
const enviar = document.querySelector('.nomes__btn')
const lista = document.querySelector('.nomes__lista')
const times = document.querySelector('.times')
const timeListaA = document.querySelector('.time__lista-a')
const timeListaB = document.querySelector('.time__lista-b')
const bancoLista = document.querySelector('.banco__lista')
const timeArr = [timeListaA, timeListaB]
const listaArr = []

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

    function adicionaLista() {
        for(let i = 0; i < listaArr.length; i++) {
            const timeLi = document.createElement('li')
    
            timeLi.classList.add('time__nome')
            timeLi.innerText = listaArr[parseInt(Math.random() * listaArr.length)]

            const bancoLi = document.createElement('li')

            bancoLi.classList.add('banco__linha')
            bancoLi.innerText = timeLi.innerText

            let listaAleatorio = parseInt(Math.random() * timeArr.length)
    
            if(timeListaA.childElementCount === 6 || listaAleatorio != 0) {
                timeListaB.appendChild(timeLi)
            } else if(timeListaB.childElementCount === 6 || listaAleatorio == 0) {
                timeListaA.appendChild(timeLi)
            }

            if(listaArr.includes(timeLi.innerText)) {
                listaArr.splice(listaArr.indexOf(timeLi.innerText), 1)
            }
        }
    }

    setInterval(adicionaLista, 1000)
})
