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

guessGame()

function guessGame(){
    let rand =Math.floor(Math.random() * 500) + 1;
fetch('https://pokeapi.co/api/v2/pokemon/'+rand)
    .then(response => response.json())
    .then(data =>{
        //console.log(data);
        rep =document.querySelector("#answer");
        rep.innerHTML="";
        again = document.querySelector("#again");
        again.style.display="none";
        guess= document.querySelector("#guess");
        guess.value="";

        const inHtml = document.querySelector("#card");
        const box = document.createElement("section");
        const img = document.createElement("img");
        //const can = document.createElement("canvas");
        //console.log(data["id"]);
        inHtml.innerHTML="";

        box.setAttribute("class", data["types"][0]["type"]["name"]);

        img.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+data["id"]+".png");
        //console.log(data["name"]);
        //can.appendChild(img);
        box.appendChild(img);
        inHtml.appendChild(box);


        btn = document.querySelector("#btn");
        btn.addEventListener("click", ()=> {
            img.classList.remove("noir");

            rep =document.querySelector("#answer");
            inside = document.createElement("p");
            
            if (guess.value==="john cena") {
                rep.innerHTML="";
                new Audio('sound_effects/john_cena.mp3').play();
                inside.innerHTML="OF COURSE ITS JOHN CENA !!!!!!!!!! <br>And he's always right !";
                rep.appendChild(inside);
                const img = document.querySelector("img");
                img.setAttribute("src", "https://static.posters.cz/image/1300/affiches-et-posters/wwe-john-cena-09-i8508.jpg");
                localStorage.setItem("b4", "1");
                
                oui.play()
                oui.addEventListener('ended', (event) => {
                    alert("You won badge number 4");
                })
            }else{
                let oui = new Audio('sound_effects/its.mp3');
                oui.play();

                oui.addEventListener('ended', (event) => {
                    let utterance = new SpeechSynthesisUtterance(data["name"]);
                    utterance.lang = 'en-US';
                    speechSynthesis.speak(utterance);
                })
                

                rep.innerHTML="";
                if(guess.value===data["name"]){
                    //console.log("OUI");
                    inside.innerHTML="that's the right answer ! <br>It's "+data["name"];
                    rep.appendChild(inside);
                }else{
                    //console.log("NON");
                    inside.innerHTML="that's the wrong answer ! <br>It's "+data["name"];
                    rep.appendChild(inside);
                }
            }
            again = document.querySelector("#again");
            again.style.display="block";
        })
    });
}


btn2 = document.querySelector("#sound");
btn2.addEventListener("click", ()=> {
    new Audio('sound_effects/whos-that-pokemon.mp3').play();
})

again = document.querySelector("#again");
again.addEventListener("click", ()=> {
    guessGame();
})