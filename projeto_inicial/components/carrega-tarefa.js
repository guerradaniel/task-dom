import { Tarefa } from "./cria-tarefa.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""
    tarefasCadastradas.forEach((tarefa) => {
        lista.appendChild(Tarefa(tarefa))
    })
}