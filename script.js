window.onload = function () {document.querySelector('.god').click(); }; //only do not move it, it need to be the first line

let tabs = document.querySelectorAll('.tabs');
//console.log(tabs.innerHTML)
tabs.forEach(element => {
    element.addEventListener('click', function () {
        if (element.value === 'a'){ //button a et bouton par defaut

            var Npokemon = 1;
            let LeftArrow = document.querySelector('.left_arrow');
            let RightArrow = document.querySelector('.right_arrow');
            let upArrow = document.querySelector('.up_arrow');
            let downArrow = document.querySelector('.down_arrow');

                fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    // récupère les nom, talents et capacités
                    const name = data.name;
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);

                    // Pick 4 random moves from the array
                    let randomMoves = [];
                    for (let i = 0; i < 4; i++) {
                        let randomIndex = Math.floor(Math.random() * moves.length);
                        randomMoves.push(moves[randomIndex]);
                    }
                    //console.log(data)
                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let dive = document.createElement('div')
                    dive.innerHTML = `
                    <h2>${name}</h2>
                    <br>
                    <p>Abilities: ${abilities.join(", ")}</p>
                    <br>
                    <p>Possible set: ${randomMoves.join(", ")}
                    `
                    document.querySelector('.stats-display').appendChild(dive)

            });

            LeftArrow.addEventListener('click', function () {
                if (Npokemon > 1) {
                    Npokemon = Npokemon - 1;
                    console.log('Current poke' + Npokemon)
                    fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    // récupère les nom, talents et capacités
                    const name = data.name;
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);

                    // Pick 4 random moves from the array
                    let randomMoves = [];
                    for (let i = 0; i < 4; i++) {
                        let randomIndex = Math.floor(Math.random() * moves.length);
                        randomMoves.push(moves[randomIndex]);
                    }

                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let dive = document.createElement('div')
                    dive.innerHTML = `
                    <h2>${name}</h2>
                    <br>
                    <p>Abilities: ${abilities.join(", ")}</p>
                    <br>
                    <p>Possible set: ${randomMoves.join(", ")}
                    `
                    document.querySelector('.stats-display').appendChild(dive)

            });
                }
            });

            RightArrow.addEventListener('click', function () {
                if (Npokemon < 1008) {
                    Npokemon = Npokemon + 1;
                    console.log('Current poke' + Npokemon)
                    fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // récupère les nom, talents et capacités
                    const name = data.name;
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);

                    // Pick 4 random moves from the array
                    let randomMoves = [];
                    for (let i = 0; i < 4; i++) {
                        let randomIndex = Math.floor(Math.random() * moves.length);
                        randomMoves.push(moves[randomIndex]);
                    }

                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let dive = document.createElement('div')
                    dive.innerHTML = `
                    <h2>${name}</h2>
                    <br>
                    <p>Abilities: ${abilities.join(", ")}</p>
                    <br>
                    <p>Possible set: ${randomMoves.join(", ")}
                    `
                    document.querySelector('.stats-display').appendChild(dive)

            });
                }
            });

            upArrow.addEventListener('click', function () {
                fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const name = data.name;
                    const types = data.types.map(type => type.type.name);
                    const height = data.height;
                    const weight = data.weight;
                    const statsName = data.stats.map(stat => stat.stat.name);
                    const statsValue = data.stats.map(stat => stat.base_stat);
                    const alternate = statsName.map((e,i) => `${e} : ${statsValue[i]}`);
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);
                    const id = data.id;


                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2>
                    <div class="imgdivup" >
                        <div class="img-row">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png"> 
                        </div>
                        <div class="img-row">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png">
                        </div>
                    </div>
                    `
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let divf = document.createElement('div')
                    divf.innerHTML = `<h2>${name}</h2>
                    <p>Abilities: ${abilities.join(", ")}</p>
                    <br>
                    <p>Types: ${types.join(", ")}</p>
                    <br>
                    <p>Height: ${height} décimétre</p>
                    <p>Weight: ${weight} gramme</p>
                    <br>
                    <p>Stats: ${alternate.join(", ")}</p>
                    <br>
                    <p>All Moves: ${moves.join(", ")}</p>
                    `
                    document.querySelector('.stats-display').appendChild(divf)
                });
            });


            downArrow.addEventListener('click', function () {
                console.log('Current poke' + Npokemon)
                document.querySelector('.pokemon_area').innerHTML ='';
                document.querySelector('.stats-display').innerHTML ='';
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${Npokemon}/`)
                    .then(response => response.json())
                    .then(data => {
                        fetch(data.evolution_chain.url)
                            .then(response => response.json())
                            .then(data => {
                                let evolutions = [];
                                function getEvolutions(evoChain) {
                                    evolutions.push(evoChain.species.name);
                                    if (evoChain.evolves_to.length > 0) {
                                        for (let i = 0; i < evoChain.evolves_to.length; i++) {
                                            getEvolutions(evoChain.evolves_to[i]);
                                        }
                                    }
                                }
                                getEvolutions(data.chain);
                                console.log(evolutions);
                                evolutions.forEach(evolution => {
                                    fetch(`https://pokeapi.co/api/v2/pokemon/${evolution}/`)
                                        .then(response => response.json())
                                        .then(data => {
                                            console.log(data);
                                            
                                            // récupère les nom, talents et capacités
                                            const name = data.name;
                                            const abilities = data.abilities.map(ability => ability.ability.name);
                                            const moves = data.moves.map(move => move.move.name);
                                            const id = data.id;

                                            // Pick 4 random moves from the array
                                            let randomMoves = [];
                                            for (let i = 0; i < 4; i++) {
                                                let randomIndex = Math.floor(Math.random() * moves.length);
                                                randomMoves.push(moves[randomIndex]);
                                            }
                                            //console.log(data)
                                            

                                            let diva = document.createElement('div')
                                            diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">`
                                            document.querySelector('.pokemon_area').appendChild(diva)

                                            let dive = document.createElement('div')
                                            dive.innerHTML = `                                            
                                            <h2>${name}</h2>
                                            <br>
                                            <p>Abilities: ${abilities.join(", ")}</p>
                                            <br>
                                            <p>Possible set: ${randomMoves.join(", ")}
                                            <br>
                                            <br>
                                            `
                                            document.querySelector('.stats-display').appendChild(dive)
                                        });
                                });
                                
                            })
                    })
                    .catch(error => console.error(error));
            });


        } else if (element.value === 'b'){
            let poke = []
            document.querySelector('.pokemon_area').innerHTML = '';
            for(let i =0 ; i<9 ; i++){
                poke =Math.floor(Math.random()*  900 )
                if(poke == 0){
                    poke =Math.floor(Math.random()*  900 )
                }
                else{

                    console.log(poke)
                    let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+ poke)
                    allpokemon.then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data);

                        let div = document.createElement('div')
                        div.classList.add('card')
                        let div2 = document.createElement('div')
                        div2.innerHTML += `<div><h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></div>`
                        document.querySelector('.pokemon_area').appendChild(div)
                        document.querySelector('.card').appendChild(div2)

                    });
                }
            }


        } else if (element.value === 'c'){
            console.log('c')
        } else {
            console.log('d')
        }
    })
});


