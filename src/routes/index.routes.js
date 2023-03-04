const express = require('express')
const router = express.Router()
const fs = require('fs/promises')
const path = require('path')
const { pickRandomChapter } = require('../services/pickRandomChapter')

router.get('/chapters/random', async (req, res) => {
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

module.exports = { router }