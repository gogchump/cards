document.addEventListener("DOMContentLoaded", function(){
let input = document.querySelector(".input")

input.addEventListener("blur", function() {
    let cards = new Array()
    for (let i = 1; i <= input.value/2; i++)
    {
        cards.push(i);
        
    }
    let cards1 = cards
    cards = cards.concat(cards1)
    
    
    let main = document.createElement("div")
    main.classList.add("list")
    document.body.appendChild(main)

    for (let i = 1; i <= cards.length; i++) {
        let card = document.createElement('span');
        let span = document.createElement('p');
        card.textContent = i;
        span.appendChild(card);
        
        main.appendChild(span);
    }
   
    


} )






})