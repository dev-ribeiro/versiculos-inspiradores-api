const { getRandomValue } = require("../../utils/getRandomValue")

function pickRandomChapter(arr) {
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

module.exports = { pickRandomChapter }
