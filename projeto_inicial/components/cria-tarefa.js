import { carregaTarefa } from './carrega-tarefa.js'
import BotaoConclui from './conclui-tarefa.js'
import BotaoDeleta from './deleta-tarefa.js'

export const handleNovoItem = (evento) => {
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormat = data.format('DD/MM/YYYY')

    const divErro = document.querySelector('[data-erro]')
    const erro = `<p class="mensagem-erro">Campo vazio!</p>`
    if (valor == '') return divErro.innerHTML = erro
    else divErro.innerHTML = ''

    const concluida = false


    const dados = {
        valor,
        dataFormat,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()

}

export const Tarefa = ({ valor, horario, concluida }, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`

    if (concluida) {
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}