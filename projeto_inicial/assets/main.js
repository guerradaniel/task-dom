import BotaoConclui from '../components/conclui-tarefa.js'
import BotaoDeleta from '../components/deleta-tarefa.js'


const handleNovoItem = (evento) => {
    evento.preventDefault()
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)

    const dataFormat = data.format('DD/MM/YYYY')

    const divErro = document.querySelector('[data-erro]')
    const erro = `<p class="mensagem-erro">Campo vazio!</p>`

    if (valor == '') {
        divErro.innerHTML = erro
        return
    } else {
        divErro.innerHTML = ''
    }

    list.appendChild(tarefa)
    input.value = " "

}

const criarTarefa = () => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${dataFormat} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', handleNovoItem)


// parei em ultima video-aula JS na web