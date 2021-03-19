import BotaoConclui from '../components/conclui-tarefa.js'
import BotaoDeleta from '../components/deleta-tarefa.js'


const criarTarefa = (evento) => {

    evento.preventDefault()

    const list = document.querySelector('[data-list]')

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const divErro = document.querySelector('[data-erro]')
    const erro = `<p class="mensagem-erro">Campo vazio!</p>`

    if (valor == '') {
        divErro.innerHTML = erro
        return
    } else {
        divErro.innerHTML = ''
    }

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    list.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)


