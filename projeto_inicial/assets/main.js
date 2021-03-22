import { handleNovoItem } from '../components/cria-tarefa.js'
import { carregaTarefa } from '../components/carrega-tarefa.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefa()


// parei em ultima video-aula JS na web