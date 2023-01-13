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
                    <br>
                    <p>Abilities: ${abilities.join(", ")}</p>
                    <br>
                    <p>Possible set: ${randomMoves.join(", ")}
                    `
                    document.querySelector('.stats-display').appendChild(dive)

                    const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);
                    audio.play();

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
                    console.log('Current poke' + Npokemon)
                    fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                .then(response => response.json())
                .then(data => {
                    // récupère les nom, talents et capacités
                    const name = data.name;
                    const abilities = data.abilities.map(ability => ability.ability.name);
                    const moves = data.moves.map(move => move.move.name);
                    const types = data.types.map(type => type.type.name);

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

                    const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);
                    audio.play();

                    document.querySelector('.a').innerHTML ='';
                    let pik = document.createElement('div')
                    pik.classList.add('droptarget')
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="dragtarget" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `
                    document.querySelector('.a').appendChild(pik)

                    document.body.style.backgroundImage = `url('img/${types[0]}.png')`;

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
                    const types = data.types.map(type => type.type.name);

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

                    const audio = new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);
                    audio.play();

                    document.querySelector('.a').innerHTML ='';
                    let pik = document.createElement('div')
                    pik.classList.add('droptarget')
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="dragtarget" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `
                    document.querySelector('.a').appendChild(pik)

                    document.body.style.backgroundImage = `url('img/${types[0]}.png')`;

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
            document.querySelector('.pokemon_area').classList.remove('scrollinger');
            document.querySelector('.stats-display').innerHTML ='';
            // let LeftArrow = document.querySelector('.left_arrow');
            // let RightArrow = document.querySelector('.right_arrow');
            
            let poke = []

            document.querySelector('.pokemon_area').innerHTML = '';
            document.querySelector('.stats-display').innerHTML = '';
            var div = document.createElement('div')
            div.classList.add('card')
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


                        let div2 = document.createElement('div')
                        div2.innerHTML += `<div onclick="get_pokement(${data.id})"><h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></div>`
                        document.querySelector('.pokemon_area').appendChild(div)
                        document.querySelector('.card').appendChild(div2)

                    });
                };
            }
        }
        else if (element.value === 'c'){
            console.log('c')
            
        } else if (element.value === 'd') {
            console.log('d')

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
            audio.play();
            Npokemon = result.id;
            document.querySelector('.a').innerHTML ='';
            let pik = document.createElement('div')
                    pik.classList.add('droptarget')
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="dragtarget" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.id}.png" draggable="false">
                    </div>
                    `
                    document.querySelector('.a').appendChild(pik)

            searchContainer.innerHTML = `
                <h2>${result.name}</h2>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.id}.png'>`;
            statsDisplay.innerHTML = `
                <h2>Abilities</h2>
                        <p>${result.abilities[0].ability.name}</p>
                        <p>${result.abilities[1].ability.name}</p>
                        
                <h2>Types</h2>
                        <p>${result.types[0].type.name}</p>
                        <p>${result.types[1].type.name}</p>
                        
                <h2>Moves</h2>
                <h2>Statistics</h2>
                    <div id="Stat1">
                        <p>${result.stats[0].stat.name}: ${result.stats[0].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress1" style="width:${(result.stats[0].base_stat/250)*100}%"></div>
                        <script>
                        let progressWidthBarStat1 = document.querySelector(".progress1").style.width;
                        let progressColorBarStat1 = document.querySelector(".progress1").style.color;
                        if(progressWidthBarStat1 <= 69){
                            progressColorBarStat1 = 'red';
                        }
                        if(progressWidthBarStat1 >= 70 &&  progressWidthBarStat1 <= 99){
                            progressColorBarStat1 = 'yellow';
                        }
                        if(progressWidthBarStat1 >= 100){
                            progressColorBarStat1 = 'green';
                        }
                        </script>
                      </div>                   
                    </div>
                    <div id="Stat2">
                        <p>${result.stats[1].stat.name}: ${result.stats[1].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress2" style="width:${(result.stats[1].base_stat/250)*100}%">
                        <script>
                        let progressWidthBarStat2 = document.querySelector(".progress2").style.width;
                        let progressColorBarStat2 = document.querySelector(".progress2").style.color;
                        if(progressWidthBarStat2 <= 69){
                            progressColorBarStat2 = 'red';
                        }
                        if(progressWidthBarStat2 >= 70 && progressWidthBarStat2 <= 99){
                            progressColorBarStat2 = 'yellow';
                        }
                        if(progressWidthBarStat2 >= 100){
                            progressColorBarStat2 = 'green';
                        }
                        </script>
</div>
                      </div>                   
                    </div>
                    <div id="Stat3">
                        <p>${result.stats[2].stat.name}: ${result.stats[2].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress3" style="width:${(result.stats[2].base_stat/250)*100}%"></div>
                        <script>
                        let progressWidthBarStat3 = document.querySelector(".progress3").style.width;
                        let progressColorBarStat3 = document.querySelector(".progress3").style.color;
                        if(progressWidthBarStat3 <= 69){
                            progressColorBarStat3 = 'red';
                        }
                        if(progressWidthBarStat3 >= 70 && progressWidthBarStat2 <= 99){
                            progressColorBarStat3 = 'yellow';
                        }
                        if(progressWidthBarStat3 >= 100){
                            progressColorBarStat3 = 'green';
                        }
                        </script>
                      </div>                   
                    </div>
                    <div id="Stat4">
                        <p>${result.stats[3].stat.name}: ${result.stats[3].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress4" style="width:${(result.stats[3].base_stat/250)*100}%"></div>
                        <script>
                        let progressWidthBarStat4 = document.querySelector(".progress4").style.width;
                        let progressColorBarStat4 = document.querySelector(".progress4").style.color;
                        if(progressWidthBarStat4 <= 69){
                            progressColorBarStat4 = 'red';
                        }
                        if(progressWidthBarStat4 >= 70 && progressWidthBarStat4 <= 99){
                            progressColorBarStat4 = 'yellow';
                        }
                        if(progressWidthBarStat4 >= 100){
                            progressColorBarStat4 = 'green';
                        }
                        </script>
                      </div>       
                      </div>                   
                    </div>
                     <div id="Stat5">
                        <p>${result.stats[4].stat.name}: ${result.stats[4].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress5" style="width:${(result.stats[4].base_stat/250)*100}%"></div>
                        <script>
                        let progressWidthBarStat5 = document.querySelector(".progress5").style.width;
                        let progressColorBarStat5 = document.querySelector(".progress5").style.color;
                        if(progressWidthBarStat5 <= 69){
                            progressColorBarStat5 = 'red';
                        }
                        if(progressWidthBarStat5 >= 70 && progressWidthBarStat5 <= 99){
                            progressColorBarStat5 = 'yellow';
                        }
                        if(progressWidthBarStat5 >= 100){
                            progressColorBarStat5 = 'green';
                        }
                        </script>
                      </div>       
                      </div>                   
                    </div>
                    <div id="Stat6">
                        <p>${result.stats[5].stat.name}: ${result.stats[5].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress6" style="width:${(result.stats[5].base_stat/250)*100}%"></div>
                        <script>
                        let progressWidthBarStat6 = document.querySelector(".progress6").style.width;
                        let progressColorBarStat6 = document.querySelector(".progress6").style.color;
                        if(progressWidthBarStat6 <= 69){
                            progressColorBarStat6 = 'red';
                        }
                        if(progressWidthBarStat6 >= 70 && progressWidthBarStat6 <= 99){
                            progressColorBarStat6= 'yellow';
                        }
                        if(progressWidthBarStat6 >= 100){
                            progressColorBarStat6 = 'green';
                        }
                        </script>
                      </div>       
                      </div>                   
                    </div>
                        `

        }
    }
    xhr.send();

}
function get_pokement(poke){
    console.log(poke)
    document.querySelector('.card').classList.add('hiddenn')
    let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+ poke)
    allpokemon.then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);

        let div = document.createElement('div')
        div.classList.add('pokelone')
        let div2 = document.createElement('div')
        div2.innerHTML = `<div><button onclick="removehidden()">X</button><h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png"></div>`
        document.querySelector('.pokemon_area').appendChild(div)
        document.querySelector('.pokelone').appendChild(div2)


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
        audio.play();

        let divb = document.createElement('div')
        divb.innerHTML = `<h2>${name}</h2><br> <p>Abilities: ${abilities.join(", ")}</p><br><p>Types: ${types.join(", ")}</p>
                    <br>
                    <p>Height: ${height} décimétre</p>
                    <p>Weight: ${weight} gramme</p>
                    <br>
                    <p>Stats: ${alternate.join(", ")}</p>
                    <br><p>Random moves: ${randomMoves.join(", ")}</p>`
        document.querySelector('.stats-display').appendChild(divb)


        document.querySelector('.a').innerHTML ='';
                    let pik = document.createElement('div')
                    pik.classList.add('droptarget')
                    pik.innerHTML = `
                    <div class="poke"  draggable="true" id="dragtarget" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `
                    document.querySelector('.a').appendChild(pik)
    });
};

function removehidden(){
    document.querySelector('.card').classList.remove('hiddenn')
    document.querySelector('.pokelone').innerHTML= '';
    document.querySelector('.stats-display').innerHTML ='';
}



