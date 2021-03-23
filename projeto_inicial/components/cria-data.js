import { Tarefa } from "./cria-tarefa.js"

export const criaData = (data) => {

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []



    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    tarefas.forEach((tarefa) => {
        const dia = moment(tarefa.dataFormat, 'DD/MM/YYYY')

        const diff = dataMoment.diff(dia)
        if (diff == 0) dataTopo.appendChild(Tarefa(tarefa))

    })

    return dataTopo
}