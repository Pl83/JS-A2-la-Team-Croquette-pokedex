window.onload = function () {document.querySelector('.god').click(); }; //only do not move it, it need to be the first line
var Npokemon = 1;




let tabs = document.querySelectorAll('.tabs');
//console.log(tabs.innerHTML)
tabs.forEach(element => {
    element.addEventListener('click', function () {
        if (element.value === 'a'){ //button a et bouton par defaut

            
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
                    const types = data.types.map(type => type.type.name);
                    const id = data.id;
                    const statName1 = data.stats[0].stat.name;
                    const statValue1 = data.stats[0].base_stat ;
                    const statName2 = data.stats[1].stat.name;
                    const statValue2 = data.stats[1].base_stat ;
                    const statName3 = data.stats[2].stat.name;
                    const statValue3 = data.stats[2].base_stat ;
                    const statName4 = data.stats[3].stat.name;
                    const statValue4 = data.stats[3].base_stat ;
                    const statName5 = data.stats[4].stat.name;
                    const statValue5 = data.stats[4].base_stat ;
                    const statName6 = data.stats[5].stat.name;
                    const statValue6 = data.stats[5].base_stat ;
                    console.log(types[0])

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
                    <p>Possible set: ${randomMoves.join(", ")}
                    <br>
                    <h2>Statistics</h2>
                    <p>${statName1}: ${statValue1}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${(statValue1/250)*100}%; background-color: gray;"></div>
                    </div>
                    <p>${statName2}: ${statValue2}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${(statValue2/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName3}: ${statValue3}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${(statValue3/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName4}: ${statValue4}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${(statValue4/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName5}: ${statValue5}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${(statValue5/250)*100}%; background-color: gray;"></div>
                    </div>   
                      <p>${statName6}: ${statValue6}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${(statValue6/250)*100}%; background-color: gray;"></div>
                    </div>   `;
                    document.querySelector('.stats-display').appendChild(dive)

                    document.querySelector('.a').innerHTML ='';
                    
                    let pik = document.createElement('div')
                    pik.classList.add('droptarget')
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="${name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `
                    document.querySelector('.a').appendChild(pik)


                    document.body.style.backgroundImage = `url('img/${types[0]}.png')`;

            });

            LeftArrow.addEventListener('click', function () {
                if (Npokemon > 1) {
                    Npokemon = Npokemon - 1;
                    console.log('Current poke' + Npokemon);
                    fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    // récupère les nom, talents et capacités
                    const name = data.name;
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);
                    const types = data.types.map(type => type.type.name);
                    const statName1 = data.stats[0].stat.name;
                    const statValue1 = data.stats[0].base_stat ;
                    const statName2 = data.stats[1].stat.name;
                    const statValue2 = data.stats[1].base_stat ;
                    const statName3 = data.stats[2].stat.name;
                    const statValue3 = data.stats[2].base_stat ;
                    const statName4 = data.stats[3].stat.name;
                    const statValue4 = data.stats[3].base_stat ;
                    const statName5 = data.stats[4].stat.name;
                    const statValue5 = data.stats[4].base_stat ;
                    const statName6 = data.stats[5].stat.name;
                    const statValue6 = data.stats[5].base_stat ;

                    // Pick 4 random moves from the array
                    let randomMoves = [];
                    for (let i = 0; i < 4; i++) {
                        let randomIndex = Math.floor(Math.random() * moves.length);
                        randomMoves.push(moves[randomIndex]);
                    }
                    document.querySelector('.pokemon_area').classList.remove('scrollinger');
                    document.querySelector('#pokemon-search').value ='';
                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div');
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`;
                    document.querySelector('.pokemon_area').appendChild(diva);
                    let dive = document.createElement('div');
                    dive.innerHTML = `
                    <h2>${name}</h2>
                    <p>Possible set: ${randomMoves.join(", ")}
                    <br>
                    <h2>Statistics</h2>
                    <p>${statName1}: ${statValue1}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${(statValue1/250)*100}%; background-color: gray;"></div>
                    </div>
                    <p>${statName2}: ${statValue2}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${(statValue2/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName3}: ${statValue3}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${(statValue3/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName4}: ${statValue4}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${(statValue4/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName5}: ${statValue5}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${(statValue5/250)*100}%; background-color: gray;"></div>
                    </div>   
                      <p>${statName6}: ${statValue6}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${(statValue6/250)*100}%; background-color: gray;"></div>
                    </div>   `;
                    document.querySelector('.stats-display').appendChild(dive);

                    const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);
                    audio.play();

                    document.querySelector('.a').innerHTML ='';
                    let pik = document.createElement('div');
                    pik.classList.add('droptarget');
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="${name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `;
                    document.querySelector('.a').appendChild(pik);

                    document.body.style.backgroundImage = `url('img/${types[0]}.png')`;

            });
                }
            });

            RightArrow.addEventListener('click', function () {
                if (Npokemon < 1008) {
                    Npokemon = Npokemon + 1;
                    console.log('Current poke' + Npokemon);
                    fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    // récupère les nom, talents et capacités
                    const name = data.name;
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);
                    const types = data.types.map(type => type.type.name);
                    const statName1 = data.stats[0].stat.name;
                    const statValue1 = data.stats[0].base_stat ;
                    const statName2 = data.stats[1].stat.name;
                    const statValue2 = data.stats[1].base_stat ;
                    const statName3 = data.stats[2].stat.name;
                    const statValue3 = data.stats[2].base_stat ;
                    const statName4 = data.stats[3].stat.name;
                    const statValue4 = data.stats[3].base_stat ;
                    const statName5 = data.stats[4].stat.name;
                    const statValue5 = data.stats[4].base_stat ;
                    const statName6 = data.stats[5].stat.name;
                    const statValue6 = data.stats[5].base_stat ;

                    // Pick 4 random moves from the array
                    let randomMoves = [];
                    for (let i = 0; i < 4; i++) {
                        let randomIndex = Math.floor(Math.random() * moves.length);
                        randomMoves.push(moves[randomIndex]);
                    }
                    document.querySelector('.pokemon_area').classList.remove('scrollinger');
                    document.querySelector('#pokemon-search').value ='';
                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div');
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`;
                    document.querySelector('.pokemon_area').appendChild(diva);
                    let dive = document.createElement('div');
                    dive.innerHTML = `
                    <h2>${name}</h2>
                    <p>Possible set: ${randomMoves.join(", ")}
                    <br>
                    <h2>Statistics</h2>
                    <p>${statName1}: ${statValue1}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${(statValue1/250)*100}%; background-color: gray;"></div>
                    </div>
                    <p>${statName2}: ${statValue2}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${(statValue2/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName3}: ${statValue3}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${(statValue3/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName4}: ${statValue4}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${(statValue4/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName5}: ${statValue5}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${(statValue5/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName6}: ${statValue6}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${(statValue6/250)*100}%; background-color: gray;"></div>
                    </div>      
                    `;

                    document.querySelector('.stats-display').appendChild(dive);

                    const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);
                    audio.volume = 0.3;
                    audio.play();

                    document.querySelector('.a').innerHTML ='';
                    let pik = document.createElement('div');
                    pik.classList.add('droptarget');
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="${name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `;
                    document.querySelector('.a').appendChild(pik);

                    document.body.style.backgroundImage = `url('img/${types[0]}.png')`;

            });
                }
            });

            upArrow.addEventListener('click', function () {
                fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const name = data.name;
                    const types = data.types.map(type => type.type.name);
                    const height = data.height;
                    const weight = data.weight;
                    const statsName = data.stats.map(stat => stat.stat.name);
                    // const statsValue = data.stats.map(stat => stat.base_stat);
                    //const alternate = statsName.map((e,i) => `${e} : ${statsValue[i]}`);
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);
                    const id = data.id;
                    const statName1 = data.stats[0].stat.name;
                    const statValue1 = data.stats[0].base_stat ;
                    const statName2 = data.stats[1].stat.name;
                    const statValue2 = data.stats[1].base_stat ;
                    const statName3 = data.stats[2].stat.name;
                    const statValue3 = data.stats[2].base_stat ;
                    const statName4 = data.stats[3].stat.name;
                    const statValue4 = data.stats[3].base_stat ;
                    const statName5 = data.stats[4].stat.name;
                    const statValue5 = data.stats[4].base_stat ;
                    const statName6 = data.stats[5].stat.name;
                    const statValue6 = data.stats[5].base_stat ;


                    document.querySelector('.pokemon_area').innerHTML ='';
                    document.querySelector('.stats-display').innerHTML ='';

                    let diva = document.createElement('div');
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
                    `;
                    document.querySelector('.pokemon_area').appendChild(diva);

                    let dive = document.createElement('div');
                    dive.innerHTML = `
                    <h2>${name}</h2>
                    <p>Abilities: ${abilities.join(", ")}</p>
                    <br>
                    <p>Types: ${types.join(", ")}</p>
                    <br>
                    <p>Height: ${height} décimétre</p>
                    <p>Weight: ${weight} gramme</p>
                    <br>
                    <h2>Statistics</h2>
                    <p>${statName1}: ${statValue1}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${(statValue1/250)*100}%; background-color: gray;"></div>
                    </div>
                    <p>${statName2}: ${statValue2}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${(statValue2/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName3}: ${statValue3}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${(statValue3/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName4}: ${statValue4}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${(statValue4/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName5}: ${statValue5}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${(statValue5/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName6}: ${statValue6}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${(statValue6/250)*100}%; background-color: gray;"></div>
                    </div>  
                    <br>
                    <p>All Moves: ${moves.join(", ")}</p>    
                    `;
                    document.querySelector('.stats-display').appendChild(dive);
                });
            });


            downArrow.addEventListener('click', function () {
                console.log('Current poke' + Npokemon);
                document.querySelector('.pokemon_area').classList.add('scrollinger');
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
                                            const statName1 = data.stats[0].stat.name;
                                            const statValue1 = data.stats[0].base_stat ;
                                            const statName2 = data.stats[1].stat.name;
                                            const statValue2 = data.stats[1].base_stat ;
                                            const statName3 = data.stats[2].stat.name;
                                            const statValue3 = data.stats[2].base_stat ;
                                            const statName4 = data.stats[3].stat.name;
                                            const statValue4 = data.stats[3].base_stat ;
                                            const statName5 = data.stats[4].stat.name;
                                            const statValue5 = data.stats[4].base_stat ;
                                            const statName6 = data.stats[5].stat.name;
                                            const statValue6 = data.stats[5].base_stat ;

                                            // Pick 4 random moves from the array
                                            let randomMoves = [];
                                            for (let i = 0; i < 4; i++) {
                                                let randomIndex = Math.floor(Math.random() * moves.length);
                                                randomMoves.push(moves[randomIndex]);
                                            }
                                            //console.log(data)
                                            

                                            let diva = document.createElement('div');
                                            diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">`;
                                            document.querySelector('.pokemon_area').appendChild(diva);

                                            let dive = document.createElement('div');
                                            dive.innerHTML = `
                                            <h2>${name}</h2>
                                            <p>Possible set: ${randomMoves.join(", ")}
                                            <br>
                                            <h2>Statistics</h2>
                                            <p>${statName1}: ${statValue1}</p>
                                            <div class="stat-bar">
                                            <div class="progress1"  style="width:${(statValue1/250)*100}%; background-color: gray;"></div>
                                            </div>
                                            <p>${statName2}: ${statValue2}</p>
                                            <div class="stat-bar">
                                            <div class="progress2"  style="width:${(statValue2/250)*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${statName3}: ${statValue3}</p>
                                            <div class="stat-bar">
                                            <div class="progress3"  style="width:${(statValue3/250)*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${statName4}: ${statValue4}</p>
                                            <div class="stat-bar">
                                            <div class="progress4"  style="width:${(statValue4/250)*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${statName5}: ${statValue5}</p>
                                            <div class="stat-bar">
                                            <div class="progress5"  style="width:${(statValue5/250)*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${statName6}: ${statValue6}</p>
                                            <div class="stat-bar">
                                            <div class="progress6"  style="width:${(statValue6/250)*100}%; background-color: gray;"></div>
                                            </div>   `;
                                            document.querySelector('.stats-display').appendChild(dive);
                                        });
                                });
                                
                            })
                    })
                    .catch(error => console.error(error));
            });
            

        } else if (element.value === 'b'){
            document.querySelector('.pokemon_area').classList.remove('scrollinger');
            document.querySelector('.stats-display').innerHTML ='';
            // let LeftArrow = document.querySelector('.left_arrow');
            // let RightArrow = document.querySelector('.right_arrow');
            
            let poke = [];

            document.querySelector('.pokemon_area').innerHTML = '';
            document.querySelector('.stats-display').innerHTML = '';
            var div = document.createElement('div')
            div.classList.add('card');
            for(let i =0 ; i<9 ; i++){
                poke =Math.floor(Math.random()*  900 )
                if(poke == 0){
                    poke =Math.floor(Math.random()*  900 )
                }
                else{

                    console.log(poke);
                    let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+ poke);
                    allpokemon.then(function (response) {
                        return response.json();

                    }).then(function (data) {
                        console.log(data);


                        let div2 = document.createElement('div');
                        div2.innerHTML += `<div onclick="get_pokement(${data.id})"><h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></div>`;
                        document.querySelector('.pokemon_area').appendChild(div);
                        document.querySelector('.card').appendChild(div2);

                    });
                }
            }
        }
        else if (element.value === 'c'){
            console.log('c');
            
        } else if (element.value === 'd') {
            console.log('d');

        }
    })
});

function searchPokemon() {
    let searchValue = document.getElementById('pokemon-search').value;
    let searchContainer = document.querySelector('.pokemon_area');
    let statsDisplay = document.querySelector('.stats-display');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + searchValue, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            searchContainer.innerHTML = "";
            statsDisplay.innerHTML = "";

            let statBar = `<div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[0].base_stat/250)*100}%"></div>
                        </div>`;
            document.querySelector('.stats-display').innerHTML = statBar;
            console.log(result);
            document.body.style.backgroundImage = `url('img/${result.types[0].type.name}.png')`;
            const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${result.id}.ogg`);
            audio.volume = 0.3;
            audio.play();
            Npokemon = result.id;
            document.querySelector('.a').innerHTML ='';
            let pik = document.createElement('div');
                    pik.classList.add('droptarget');
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="${result.name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.id}.png" draggable="false">
                    </div>
                    `;
                    document.querySelector('.a').appendChild(pik);

            searchContainer.innerHTML = `
                <h2>${result.name}</h2>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.id}.png'>`;

            // Pick 4 random moves from the array
//            let randomMovesSET = [];
//             for (let i = 0; i < 4; i++) {
//                 let randomIndex = Math.floor(Math.random() * moves.length);
//                 randomMovesSET.push(result.moves[randomIndex]);
//             }

            statsDisplay.innerHTML = `
                <h2>${result.name}</h2>

                    <p>Possible set: ${result.moves[Math.floor(Math.random() * result.moves.length)].move.name}, ${result.moves[Math.floor(Math.random() * result.moves.length)].move.name}, ${result.moves[Math.floor(Math.random() * result.moves.length)].move.name}, ${result.moves[Math.floor(Math.random() * result.moves.length)].move.name}</p>

                <!--<script>
                        let progressValue1 = (result.stats[0].base_stat/250)*100% ;
                        let progressClass = document.getElementsByClassName(".progress1");
                        
                        if(progressValue1 <= 69){
                            progressClass.style.backgroundColor = "red" ; 
                            progressClass.style.width = progressValue1;
                        }if(progressValue1 >= 70 && progressValue1 <= 99){
                            progressClass.style.backgroundColor = "yellow" ; 
                            progressClass.style.width = progressValue1;
                        }if(progressValue1 >= 100){
                            progressClass.style.backgroundColor = "green" ; 
                            progressClass.style.width = progressValue1;
                        }
                </script>-->
                <h2>Statistics</h2>
                    <div id="Stat1">
                        <p>${result.stats[0].stat.name}: ${result.stats[0].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress1"  style="width:${(result.stats[0].base_stat/250)*100}%; background-color: gray;"></div>
                      </div>                   
                    </div>
                    <div id="Stat2">
                        <p>${result.stats[1].stat.name}: ${result.stats[1].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress2" style=" width:${(result.stats[1].base_stat/250)*100}% ; background-color: gray;">
                        </div>
                      </div>                   
                    </div>
                    <div id="Stat3">
                        <p>${result.stats[2].stat.name}: ${result.stats[2].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress3" style="width:${(result.stats[2].base_stat/250)*100}%;  background-color: gray;"></div>
                      </div>                   
                    </div>
                    <div id="Stat4">
                        <p>${result.stats[3].stat.name}: ${result.stats[3].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress4" style="width:${(result.stats[3].base_stat/250)*100}%; background-color: gray;"></div>
                      </div>       
                      </div>                   
                    </div>
                     <div id="Stat5">
                        <p>${result.stats[4].stat.name}: ${result.stats[4].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress5" style="width:${(result.stats[4].base_stat/250)*100}% ; background-color: gray"></div>
                      </div>       
                      </div>                   
                    </div>
                    <div id="Stat6">
                        <p>${result.stats[5].stat.name}: ${result.stats[5].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress6" style="width:${(result.stats[5].base_stat/250)*100}%;  background-color: gray"></div>
                      </div>       
                      </div>                   
                    </div>
                        `;
        }
    }
    xhr.send();

}
function get_pokement(poke){
    console.log(poke);
    document.querySelector('.card').classList.add('hiddenn');
    let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+ poke);
    allpokemon.then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        let div = document.createElement('div');
        div.classList.add('pokelone');
        let div2 = document.createElement('div');
        div2.innerHTML = `<div><button onclick="removehidden()">X</button><h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></div>`;
        document.querySelector('.pokemon_area').appendChild(div);
        document.querySelector('.pokelone').appendChild(div2);


        // récupère les nom, talents et capacités
        const name = data.name;
        const abilities = data.abilities.map(ability => ability.ability.name);
        const moves = data.moves.map(move => move.move.name);
        const types = data.types.map(type => type.type.name);
        const height = data.height;
        const weight = data.weight;
        const statsName = data.stats.map(stat => stat.stat.name);
        const statsValue = data.stats.map(stat => stat.base_stat);
        const alternate = statsName.map((e,i) => `${e} : ${statsValue[i]}`);
        const statName1 = data.stats[0].stat.name;
        const statValue1 = data.stats[0].base_stat ;
        const statName2 = data.stats[1].stat.name;
        const statValue2 = data.stats[1].base_stat ;
        const statName3 = data.stats[2].stat.name;
        const statValue3 = data.stats[2].base_stat ;
        const statName4 = data.stats[3].stat.name;
        const statValue4 = data.stats[3].base_stat ;
        const statName5 = data.stats[4].stat.name;
        const statValue5 = data.stats[4].base_stat ;
        const statName6 = data.stats[5].stat.name;
        const statValue6 = data.stats[5].base_stat ;
        const id = data.id;
        Npokemon = id;
        // Pick 4 random moves from the array
        let randomMoves = [];
        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * moves.length);
            randomMoves.push(moves[randomIndex]);
        }


        document.querySelector('.stats-display').innerHTML ='';

        document.body.style.backgroundImage = `url('img/${types[0]}.png')`;
        const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${id}.ogg`);
        audio.volume = 0.3;
        audio.play();

        let divb = document.createElement('div');
        divb.innerHTML = `<h2>${name}</h2><br> <p>Abilities: ${abilities.join(", ")}</p><br><p>Types: ${types.join(", ")}</p>
                    <br>
                    <p>Height: ${height} décimétre</p>
                    <p>Weight: ${weight} gramme</p>
                    <br>
                    <p>Random moves: ${randomMoves.join(", ")}</p>
                    <h2>Statistics</h2>
                    <p>${statName1}: ${statValue1}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${(statValue1/250)*100}%; background-color: gray;"></div>
                    </div>
                    <p>${statName2}: ${statValue2}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${(statValue2/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName3}: ${statValue3}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${(statValue3/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName4}: ${statValue4}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${(statValue4/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName5}: ${statValue5}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${(statValue5/250)*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${statName6}: ${statValue6}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${(statValue6/250)*100}%; background-color: gray;"></div>
                    </div> `;
        document.querySelector('.stats-display').appendChild(divb);


        document.querySelector('.a').innerHTML ='';
                    let pik = document.createElement('div');
                    pik.classList.add('droptarget');
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="${name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `;
                    document.querySelector('.a').appendChild(pik);
    });
};

function removehidden(){
    document.querySelector('.card').classList.remove('hiddenn')
    document.querySelector('.pokelone').innerHTML= '';
    document.querySelector('.stats-display').innerHTML ='';
}

var selectedButton = '0';

document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector(".tn[value='1']");
    button.classList.add("selected");
    selectedButton = '1'
    console.log('validate')
    var team;
    if(localStorage.getItem("team"+selectedButton)){
        team = JSON.parse(localStorage.getItem("team"+selectedButton));
        console.log(team);
        let droparea = document.querySelectorAll('.droptarget');
        droparea.forEach((e,i) => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    const name = data.name;
                    const id = data.id;
                    e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                    </div>`
                });
            
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.querySelector(".tn[value='1']");
    var btn2 = document.querySelector(".tn[value='2']");
    var btn3 = document.querySelector(".tn[value='3']");
    var btn4 = document.querySelector(".tn[value='4']");
    var btn5 = document.querySelector(".tn[value='5']");
    var btn6 = document.querySelector(".tn[value='6']");
    btn1.addEventListener("click", function() {
        selectedButton = '1';
        console.log(selectedButton);
        btn1.classList.add("selected");
        btn2.classList.remove("selected");
        btn3.classList.remove("selected");
        btn4.classList.remove("selected");
        btn5.classList.remove("selected");
        btn6.classList.remove("selected");
        let droptargets = document.querySelectorAll("header .droptarget");
        for (let i = 0; i < droptargets.length; i++) {
        droptargets[i].innerHTML = '';
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
            let droparea = document.querySelectorAll('.droptarget');
            droparea.forEach((e,i) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const name = data.name;
                        const id = data.id;
                        e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                        </div>`
                    });
                
            });
        }
    });
    btn2.addEventListener("click", function() {
        selectedButton = '2';
        console.log(selectedButton);
        btn2.classList.add("selected");
        btn1.classList.remove("selected");
        btn3.classList.remove("selected");
        btn4.classList.remove("selected");
        btn5.classList.remove("selected");
        btn6.classList.remove("selected");
        let droptargets = document.querySelectorAll("header .droptarget");
        for (let i = 0; i < droptargets.length; i++) {
        droptargets[i].innerHTML = '';
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
            let droparea = document.querySelectorAll('.droptarget');
            droparea.forEach((e,i) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const name = data.name;
                        const id = data.id;
                        e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                        </div>`
                    });
                
            });
        }
    });
    btn3.addEventListener("click", function() {
        selectedButton = '3';
        console.log(selectedButton);
        btn3.classList.add("selected");
        btn2.classList.remove("selected");
        btn1.classList.remove("selected");
        btn4.classList.remove("selected");
        btn5.classList.remove("selected");
        btn6.classList.remove("selected");
        let droptargets = document.querySelectorAll("header .droptarget");
        for (let i = 0; i < droptargets.length; i++) {
        droptargets[i].innerHTML = '';
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
            let droparea = document.querySelectorAll('.droptarget');
            droparea.forEach((e,i) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const name = data.name;
                        const id = data.id;
                        e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                        </div>`
                    });
                
            });
        }
    });
    btn4.addEventListener("click", function() {
        selectedButton = '4';
        console.log(selectedButton);
        btn4.classList.add("selected");
        btn2.classList.remove("selected");
        btn3.classList.remove("selected");
        btn1.classList.remove("selected");
        btn5.classList.remove("selected");
        btn6.classList.remove("selected");
        let droptargets = document.querySelectorAll("header .droptarget");
        for (let i = 0; i < droptargets.length; i++) {
        droptargets[i].innerHTML = '';
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
            let droparea = document.querySelectorAll('.droptarget');
            droparea.forEach((e,i) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const name = data.name;
                        const id = data.id;
                        e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                        </div>`
                    });
                
            });
        }
    });
    btn5.addEventListener("click", function() {
        selectedButton = '5';
        console.log(selectedButton);
        btn5.classList.add("selected");
        btn2.classList.remove("selected");
        btn3.classList.remove("selected");
        btn4.classList.remove("selected");
        btn1.classList.remove("selected");
        btn6.classList.remove("selected");
        let droptargets = document.querySelectorAll("header .droptarget");
        for (let i = 0; i < droptargets.length; i++) {
        droptargets[i].innerHTML = '';
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
            let droparea = document.querySelectorAll('.droptarget');
            droparea.forEach((e,i) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const name = data.name;
                        const id = data.id;
                        e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                        </div>`
                    });
                
            });
        }
    });
    btn6.addEventListener("click", function() {
        selectedButton = '6';
        console.log(selectedButton);
        btn6.classList.add("selected");
        btn2.classList.remove("selected");
        btn3.classList.remove("selected");
        btn4.classList.remove("selected");
        btn5.classList.remove("selected");
        btn1.classList.remove("selected");
        let droptargets = document.querySelectorAll("header .droptarget");
        for (let i = 0; i < droptargets.length; i++) {
        droptargets[i].innerHTML = '';
        }
        var team;
        if(localStorage.getItem("team"+selectedButton)){
            team = JSON.parse(localStorage.getItem("team"+selectedButton));
            console.log(team);
            let droparea = document.querySelectorAll('.droptarget');
            droparea.forEach((e,i) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${team[i]}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const name = data.name;
                        const id = data.id;
                        e.innerHTML = `<div class="poke"  draggable="true" id="${name}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" draggable="false">
                        </div>`
                    });
                
            });
        }
    });
});

var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];


document.addEventListener('DOMContentLoaded', function() {
    let save = document.querySelector(".save");
    save.addEventListener("click", function() {
    console.log("click");
    if (selectedButton === '1'){
        console.log('bliat')
        team1 = [];
        let droptargets = document.querySelectorAll("header .droptarget");
        let poke = document.getElementsByClassName("poke");
        for (let i = 0; i < droptargets.length; i++) {
            for (let j = 0; j < poke.length; j++) {
            if (droptargets[i].contains(poke[j])) {
                team1.push(poke[j].id);
            }
            }
        }
        if(team1.length > 0){
            console.log(team1);
            localStorage.setItem("team1", JSON.stringify(team1));

        }else{console.log("non");}

    } else if (selectedButton === '2'){
        console.log('bliat2')
        team2 = [];
        let droptargets = document.querySelectorAll("header .droptarget");
        let poke = document.getElementsByClassName("poke");
        for (let i = 0; i < droptargets.length; i++) {
            for (let j = 0; j < poke.length; j++) {
            if (droptargets[i].contains(poke[j])) {
                team2.push(poke[j].id);
            }
            }
        }
        if(team2.length > 0){
            console.log(team2);
            localStorage.setItem("team2", JSON.stringify(team2));

        }else{console.log("non");}

    } else if (selectedButton === '3'){
        console.log('bliat3')
        team3 = [];
        let droptargets = document.querySelectorAll("header .droptarget");
        let poke = document.getElementsByClassName("poke");
        for (let i = 0; i < droptargets.length; i++) {
            for (let j = 0; j < poke.length; j++) {
            if (droptargets[i].contains(poke[j])) {
                team3.push(poke[j].id);
            }
            }
        }
        if(team3.length > 0){
            console.log(team3);
            localStorage.setItem("team3", JSON.stringify(team3));

        }else{console.log("non");}

    } else if (selectedButton === '4'){
        console.log('bliat4')
        team4 = [];
        let droptargets = document.querySelectorAll("header .droptarget");
        let poke = document.getElementsByClassName("poke");
        for (let i = 0; i < droptargets.length; i++) {
            for (let j = 0; j < poke.length; j++) {
            if (droptargets[i].contains(poke[j])) {
                team4.push(poke[j].id);
            }
            }
        }
        if(team4.length > 0){
            console.log(team4);
            localStorage.setItem("team4", JSON.stringify(team4));

        }else{console.log("non");}

    } else if (selectedButton === '5'){
        console.log('bliat5')
        team5 = [];
        let droptargets = document.querySelectorAll("header .droptarget");
        let poke = document.getElementsByClassName("poke");
        for (let i = 0; i < droptargets.length; i++) {
            for (let j = 0; j < poke.length; j++) {
            if (droptargets[i].contains(poke[j])) {
                team5.push(poke[j].id);
            }
            }
        }
        if(team5.length > 0){
            console.log(team5);
            localStorage.setItem("team5", JSON.stringify(team5));

        }else{console.log("non");}

    } else if (selectedButton === '6'){
        console.log('bliat6')
        team6 = [];
        let droptargets = document.querySelectorAll("header .droptarget");
        let poke = document.getElementsByClassName("poke");
        for (let i = 0; i < droptargets.length; i++) {
            for (let j = 0; j < poke.length; j++) {
            if (droptargets[i].contains(poke[j])) {
                team6.push(poke[j].id);
            }
            }
        }
        if(team6.length > 0){
            console.log(team6);
            localStorage.setItem("team6", JSON.stringify(team6));

        }else{console.log("non");}

    }
        
    });
});

let deletarea = document.querySelector('.deleting .droptarget');
deletarea.addEventListener('mouseout', function(e) {
    if (deletarea.innerHTML !== '') {
        console.log('delete');
        let victime = document.querySelector('.deleting .droptarget .poke');
        let victimeid = victime.id;
        console.log(victimeid);
        const teamcontent = JSON.parse(localStorage.getItem('team'+selectedButton));
        console.log(teamcontent);
        const index = teamcontent.indexOf(victimeid);
        console.log(index);
        if (index != -1){
            teamcontent.splice(index, 1);
        }
        console.log(teamcontent);
        localStorage.setItem('team'+selectedButton, JSON.stringify(teamcontent));
        setTimeout(function() {
            deletarea.innerHTML = '';
        }, 2000);
        fetch(`https://pokeapi.co/api/v2/pokemon/${victimeid}`)
                .then(response => response.json())
                .then(data => {
                    const type = data.types[0].type.name;
                    console.log(type);
                    if (type === 'grass') {
                        console.log('tondeuez');
                        let tondeuse = document.querySelector('.mt-image');
                        tondeuse.classList.add('appear');
                        setTimeout(function() {
                            tondeuse.classList.remove('appear');
                        }, 2500);

                    } else if (type === 'fire') {
                        console.log('washing machine');
                        let washingmachine = document.querySelector('.mm-image');
                        washingmachine.classList.add('appear');
                        setTimeout(function() {
                            washingmachine.classList.remove('appear');
                        }, 2500);

                    } else {
                        console.log('incinerator');
                        let incinerator = document.querySelector('.mi-image');
                        incinerator.classList.add('appear');
                        setTimeout(function() {
                            incinerator.classList.remove('appear');
                        }, 2500);
                    }
                });
    } else {
        console.log('no delete');
    }
});

