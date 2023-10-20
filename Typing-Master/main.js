// DOM Nodes
const mainParagraph = document.querySelector("p")
const correctInfo = document.querySelector(".correct-data")
const wrongInfo = document.querySelector(".errors-data")
const restartBtn = document.querySelector("button")

// Global variables
let currentLetterIndex = 0
let errorsDataCount = 0
// Saving the paragraph value as an array allows it to be mutable, rather than being an immutable string.
let charsArr= mainParagraph.innerText.split("")
function update() {
    // Have to redeclare the characterArray variable in order to get the updated value
    let charsArr= mainParagraph.innerText.split("")
    charsArr[currentLetterIndex] = `<span class="highlight-character">${charsArr[currentLetterIndex]}</span>`
    mainParagraph.innerHTML = charsArr.join("")

    correctInfo.innerText = currentLetterIndex
    wrongInfo.innerText = errorsDataCount
}

addEventListener("keypress", e => {
    if(e.key === charsArr[currentLetterIndex]) currentLetterIndex++
    else errorsDataCount++

    update()
})

restartBtn.addEventListener("click", () => {
    currentLetterIndex = errorsDataCount = 0
    update()
})
