const fs = require('fs')
const series = require( '../models/series.json' )

const filledIDs = series.map(element => (element.id))
const writeJSON = (phrase) => {
    fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf8', function(err){
        if (err) {
            return res.status(424).send({message: err})
        }
    console.log(`${phrase}`)
        })
    }

const getAllSeries = (req, res) => {
    res.status(200).send(series)
}

const getByID = (req, res) => {
    const id = req.params.id
    let serieByID = series.find(element => element.id == id)
    res.status(200).send(serieByID)    
}

const postSerie = (req, res) => {
    const {id, name, genre, synopsis, liked, seasons} = req.body
    console.log(id)

    if (filledIDs.indexOf(id) != -1) {
        res.status(201).send(`Não foi possível adicionar a série ${name} ao arquivo pois a ID escolhida (${id}) já está preenchida. Por favor, escolha números diferentes de ${filledIDs} para a nova série a ser cadastrada.`)
    } else {
        series.push({id, name, genre, synopsis, liked, seasons})
            function compare(a,b) {
                if (a.id < b.id)
                return -1;
                if (a.id > b.id)
                return 1;
                return 0;
            }
        series.sort(compare);
        writeJSON(`A série "${name}" foi adicionada no ID ${id}!`)
        res.status(201).send(series)    
    }
}

// const putSerie = (req, res) => {
// }

const deleteSerie = (req, res) => {
    const id = parseInt(req.params.id)
    if (filledIDs.indexOf(id) == -1) {
        res.status(201).send(`A série com o ID solicitado para a deleção (id: ${id}) não existe no banco de dados. Os IDs passíveis de deleção são ${filledIDs}.`)
        } else {
        const serieToDelete = series.find(element => element.id == id)
        const index = series.indexOf(serieToDelete)
            series.splice(index, 1)
            writeJSON(`A série com o id ${id} foi deletada!`) 
        res.status(201).send(series)
            }
}

// const patchSerie = (req, res) => {
// }

module.exports = {
    getAllSeries,
    getByID,
    postSerie,
    // putSerie,
    deleteSerie,
    // patchSerie
}