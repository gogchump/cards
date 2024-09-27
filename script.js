document.addEventListener("DOMContentLoaded", function(){
let input = document.querySelector(".input")

input.addEventListener("blur", function() {
    let cards = Array(input.value).fill().map((e, i) => i + 1)

    console.log(cards)
} )





})