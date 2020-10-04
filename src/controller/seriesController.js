const series = require ('../model/series.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
}

const getByID = (req, res) => {
    const id = req.params.id

    const serieFiltrada = series.find((serie) => {
        return serie.id == id
    })

    res.status(200).send(serieFiltrada)
}

const getAllBroadcasts = (req, res) => {
    const broadcast  = series.map((serie) => serie.broadcaster)
    res.status(200).send(broadcast)
}

const getByBroadcast = (req, res) => {
    const broadcaster = req.params.broadcaster

    const broadcasterFiltrado = series.filter((serie) => serie.broadcaster == broadcaster)
    res.status(200).send(broadcasterFiltrado)
}

module.exports = { getAll, getByID, getAllBroadcasts, getByBroadcast }