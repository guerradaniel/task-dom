import { criaData } from "./cria-data.js"
import { Tarefa } from "./cria-tarefa.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""
    tarefasCadastradas.forEach((tarefa) => {
        const dia = moment(tarefa.dataFormat, 'DD/MM/YYYY')
        lista.appendChild(criaData(dia))
    })
}