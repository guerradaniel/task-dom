export const removeDatasRepetidas = (datas) => {

    const datasUnicas = []
    datas.forEach(data => {
        if (datasUnicas.indexOf(data.dataFormat) === -1) {
            datasUnicas.push(data.dataFormat)
        }
    })
    return datasUnicas
}