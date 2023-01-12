/*
fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(response => response.json())
            .then(data =>{
                
                data.results.forEach(poke => {
                    //console.log(poke)

                    fetch(poke["url"])
                        .then(response => response.json())
                        .then(data =>{
                            //console.log(data)

                            const inHtml = document.querySelector("#card")
                            const box = document.createElement("section")
                            const name = document.createElement("h3")
                            const type = document.createElement("p")
                            const img = document.createElement("img")
                            //console.log(data["id"])

                            box.setAttribute("class", data["types"][0]["type"]["name"]);

                            name.setAttribute("id", data["id"]);
                            name.innerHTML=data["name"]
                            type.innerHTML=data["types"][0]["type"]["name"]
                            img.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+data["id"]+".png");
                            box.appendChild(name)
                            box.appendChild(type)
                            box.appendChild(img)
                            inHtml.appendChild(box)
                        });


                    
                });
            })
*/
//new Audio('pop.mp3').play()

// let utterance = new SpeechSynthesisUtterance("Hello world!");
// utterance = new SpeechSynthesisUtterance("manges tes morts!");
// speechSynthesis.speak(utterance);
// console.log(speechSynthesis.getVoices())


let rand =Math.floor(Math.random() * 100) + 1;
fetch('https://pokeapi.co/api/v2/pokemon/'+rand)
    .then(response => response.json())
    .then(data =>{
        //console.log(data)

        const inHtml = document.querySelector("#card")
        const box = document.createElement("section")
        const name = document.createElement("h3")
        const type = document.createElement("p")
        const img = document.createElement("img")
        //console.log(data["id"])

        box.setAttribute("class", data["types"][0]["type"]["name"]);

        name.setAttribute("id", data["id"]);
        name.innerHTML=data["name"]
        img.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+data["id"]+".png");
        box.appendChild(name)
        box.appendChild(img)
        inHtml.appendChild(box)


        guess= document.querySelector("#guess")
        btn = document.querySelector("#btn")
        btn.addEventListener("click", ()=> {
            oui= new Audio('sound_effects/its.mp3').play()
            
            let utterance = new SpeechSynthesisUtterance(data["name"]);
            utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);

            rep =document.querySelector("#answer")
            inside = document.createElement("p")
            rep.innerHTML=""
            if(guess.value===data["name"]){
                console.log("OUI")
                inside.innerHTML="that's the right answer !"
                rep.appendChild(inside)
            }else{
                console.log("NON")
                inside.innerHTML="that's the wrong answer !"
                rep.appendChild(inside)
            }

        })
    });

btn2 = document.querySelector("#sound")
btn2.addEventListener("click", ()=> {
    new Audio('sound_effects/whos-that-pokemon.mp3').play()
})