const fs = require('fs/promises')
const path = require('path')
const { getRandomValue } = require("../../utils/getRandomValue")

class PickRandom {
    constructor() {
        this.data = fs.readFile(path.join(__dirname, '../../../biblies/nvi.txt'), { encoding: 'utf-8' })
            .then(response => {
                return JSON.parse(response)
            })
            .catch(err => {
                console.log(err)
                this.data = []
                throw new Error('Houve um erro')
            })
    }

    getRandomChapter(arr) {
        const selectBookIndex = getRandomValue(0, 65)
        const selectBook = arr
            .filter((_, index) => {
                return index === selectBookIndex
            })

        let selectedChapterIndex = getRandomValue(0, selectBook[0].chapters.length - 1)

        return {
            selectedBook: selectBook[0].name,
            selectedChapterNumber: selectedChapterIndex + 1,
            verses: selectBook[0].chapters[selectedChapterIndex]
        }
    }

    getRandomVerse(arr){
        const selectBookIndex = getRandomValue(0, 65)
        const selectBook = arr
            .filter((_, index) => {
                return index === selectBookIndex
            })

        const chapters = selectBook[0].chapters

        const selectedChapterIndex = getRandomValue(0, chapters.length - 1)
        const randomVerseIndex = getRandomValue(0, chapters[selectedChapterIndex].length - 1)

        const getVerse = chapters[selectedChapterIndex].filter((_, index) => {
            return index === randomVerseIndex
        })[0]

        return {
            selectedBook: selectBook[0].name,
            selectedChapterNumber: selectedChapterIndex + 1,
            selectedVerseNumber: randomVerseIndex + 1,
            selectedVerse: getVerse
        }
    }

}

module.exports = { PickRandom }
