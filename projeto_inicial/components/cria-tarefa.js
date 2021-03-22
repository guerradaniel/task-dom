import BotaoConclui from './conclui-tarefa.js'
import BotaoDeleta from './deleta-tarefa.js'

export const handleNovoItem = (evento) => {
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormat = data.format('DD/MM/YYYY')

    const divErro = document.querySelector('[data-erro]')
    const erro = `<p class="mensagem-erro">Campo vazio!</p>`
    if (valor == '') return divErro.innerHTML = erro
    else divErro.innerHTML = ''

    const dados = {
        valor,
        dataFormat
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

}

export const Tarefa = ({ valor, dataFormat }) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormat} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}