document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector(".btn")
    let input = document.querySelector("input")
    let page = document.querySelector(".window")
    let cards = document.querySelector(".card")

    btn.addEventListener("click", function(){
        console.log(123)
        page.classList.remove("none")
        list.push(input.value)
        addElement(input.value, list)
    })

    function addElement() {
        let card = document.addElement("div")

        
    }
})
