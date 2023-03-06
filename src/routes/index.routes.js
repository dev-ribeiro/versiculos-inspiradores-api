const express = require('express')
const router = express.Router()
const fs = require('fs/promises')
const path = require('path')
const { checkSecretKey } = require('../middlewares/checkSecretKey')
const { pickRandomChapter } = require('../services/pickRandomChapter')
const { pickRandomVerse } = require('../services/pickRandomVerse')

router.get('/health', (req, res) => {
    return res.status(200).end()
})

router.get('/chapters/random', checkSecretKey, async (req, res) => {
    try {
        const data = await fs.readFile(
            path.join(__dirname, '../../biblies/nvi.txt'),
            { encoding: 'utf-8' }
        )

        const {
            selectedBook,
            selectedChapterNumber,
            verses
        } = pickRandomChapter(JSON.parse(data))

        return res.status(200).json({
            selectedBook,
            selectedChapterNumber,
            verses
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send()
    }
})

router.get('/verses/random', checkSecretKey, async (req, res) => {
    try {
        const data = await fs.readFile(
            path.join(__dirname, '../../biblies/nvi.txt'),
            { encoding: 'utf-8' }
        )

        const verse = pickRandomVerse(JSON.parse(data))

        return res.status(200).json({...verse})
    } catch (error) {
        console.log(error)
        return res.status(400).send()
    }
})

module.exports = { router }
