const express = require('express')
const { checkSecretKey } = require('../middlewares/checkSecretKey')
const { PickRandom } = require('../services/PickRandom')

const router = express.Router()

router.get('/health', (req, res) => {
    return res.status(200).end()
})

router.get('/chapters/random', checkSecretKey, async (req, res) => {
    try {
        const service = new PickRandom()
        const data = await service.data
        const response = service.getRandomChapter(data)

        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).send()
    }
})

router.get('/verses/random', checkSecretKey, async (req, res) => {
    try {
        const service = new PickRandom()
        const data = await service.data
        const response = service.getRandomVerse(data)

        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(400).send()
    }
})

module.exports = { router }
