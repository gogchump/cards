document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector(".input")
    
    input.addEventListener("blur", function() {
        let cards = new Array()
        for (let i = 1; i <= input.value/2; i++)
        {
            cards.push(i);
            cards.push(i);
            
        }
    
        // let cards1 = cards
        // cards = cards.concat(cards1)
        console.log(cards);
        shuffle(cards);
        console.log(cards);
        
        let main = document.createElement("div")
        main.classList.add("list")
        document.body.appendChild(main)
        let arr = []
        let id = []
        let victory = []
        for (let i = 0; i <= cards.length-1; i++) {
            
            let card = document.createElement('div');
            let text = document.createElement('p');
            text.textContent = cards[i];
            card.classList.add("card");
            text.classList.add("none"); 
            
    
            
            card.addEventListener("click", function(e){
                arr.push(e.target.textContent)
                console.log(arr)
                text.classList.remove("none"); 
                e.disabled = true;
                id.push(text)
                
                if(arr.length == 2) {
                    console.log(arr)
                    if(arr[0] == arr[1]){
                        console.log("123")
                        arr.pop(0);
                        arr.pop(0);
                        console.log(arr)
                        console.log(id)
                        id.pop(0);
                        id.pop(0);
                        victory.push("1")
                        if(victory.length == cards.length/2) 
                            {
                                console.log("victory")
                            }  
                    }
                    else {
                        setTimeout(() => {
                            console.log("321")
                            arr.pop(0);
                            arr.pop(0);
                            id[1].classList.add("none")
                            id[0].classList.add("none")   
                            id.pop(0);
                            id.pop(0);
                        }, 500);
                        }   
                }
            }
        )

            card.appendChild(text);
            main.appendChild(card);
        }
    } )
    
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    })
    
