const { getRandomValue } = require("../../utils/getRandomValue")

function pickRandomVerse(arr) {
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

module.exports = { pickRandomVerse }
