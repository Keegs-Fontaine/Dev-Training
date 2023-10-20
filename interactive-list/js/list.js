const header = document.querySelector(".header")
const addItemBtn = document.querySelector("button")
const list = document.querySelector(".items-list")

let listCount = 1;
addItemBtn.addEventListener("click", () => {
    // using innerHTML is EXTREMELY dangerous. Only use when NOT accepting user input.
    list.innerHTML += `<li>New Item ${listCount}</li>`
    listCount++
})

list.addEventListener("click", e => {
    header.innerText = e.target.innerText

    list.querySelectorAll("li").forEach(li => { li.style.backgroundColor = "" })

    e.target.style.backgroundColor = "#d9d9d9"
})
