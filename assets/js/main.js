const nome = document.querySelector('.nomes__input')
const enviar = document.querySelector('.nomes__btn')
const lista = document.querySelector('.nomes__lista')
const listaArr = []

enviar.addEventListener('click', () => {
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

    linhaBtn.addEventListener('click', () => {
        if(listaArr.includes(linhaLi.innerText)) {
            listaArr.splice(listaArr.indexOf(linhaLi.innerText), 1)
        }

        linha.style.display = 'none'
    })
})
