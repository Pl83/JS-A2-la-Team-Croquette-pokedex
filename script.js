<<<<<<< HEAD
let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=1/') //1008
allpokemon.then(function (response) {
    return response.json();
    }).then(function (data) {
    console.log(data);
    document.querySelector('.pokemon_area').innerHTML = '';

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
                <h2>Statistics</h2>
                    <div id="Stat1">
                        <p>${result.stats[0].stat.name}</p>
                        <p>${result.stats[0].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[0].base_stat/250)*100}%"></div>
                      </div>                   
                    </div>
                    <div id="Stat2">
                        <p>${result.stats[1].stat.name}</p>
                        <p>${result.stats[1].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[1].base_stat/250)*100}%"></div>
                      </div>                   
                    </div>
                    <div id="Stat3">
                        <p>${result.stats[2].stat.name}</p>
                        <p>${result.stats[2].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[2].base_stat/250)*100}%"></div>
                      </div>                   
                    </div>
                    <div id="Stat4">
                        <p>${result.stats[3].stat.name}</p>
                        <p>${result.stats[3].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[3].base_stat/250)*100}%"></div>
                      </div>                   
                    </div>
                     <div id="Stat5">
                        <p>${result.stats[4].stat.name}</p>
                        <p>${result.stats[4].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[4].base_stat/250)*100}%"></div>
                      </div>                   
                    </div>
                    <div id="Stat6">
                        <p>${result.stats[5].stat.name}</p>
                        <p>${result.stats[5].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress" style="width:${(result.stats[5].base_stat/250)*100}%"></div>
                      </div>                   
                    </div>
                        `

        }
        }
    xhr.send();

}
=======
window.onload = function () {document.querySelector('.god').click(); }; //only do not move it, it need to be the first line

let tabs = document.querySelectorAll('.tabs');
//console.log(tabs.innerHTML)
tabs.forEach(element => {
    element.addEventListener('click', function () {
        if (element.value === 'a'){ //button a et bouton par defaut

            var Npokemon = 1;
            let LeftArrow = document.querySelector('.left_arrow');
            let RightArrow = document.querySelector('.right_arrow');

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
                    document.querySelector('.pokename').innerHTML ='';
                    document.querySelector('.Ability').innerHTML ='';
                    document.querySelector('.movesset').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let divb = document.createElement('div')
                    divb.innerHTML = `<h2>${name}</h2>`
                    document.querySelector('.pokename').appendChild(divb)

                    let divc = document.createElement('div')
                    divc.innerHTML = `<p>Abilities: ${abilities.join(", ")}</p>`
                    document.querySelector('.Ability').appendChild(divc)

                    let divd = document.createElement('div')
                    divd.innerHTML = `<p>Random moves: ${randomMoves.join(", ")}</p>`
                    document.querySelector('.movesset').appendChild(divd)

            });

            LeftArrow.addEventListener('click', function () {
                if (Npokemon > 1) {
                    Npokemon = Npokemon - 1;
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
                    document.querySelector('.pokename').innerHTML ='';
                    document.querySelector('.Ability').innerHTML ='';
                    document.querySelector('.movesset').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let divb = document.createElement('div')
                    divb.innerHTML = `<h2>${name}</h2>`
                    document.querySelector('.pokename').appendChild(divb)

                    let divc = document.createElement('div')
                    divc.innerHTML = `<p>Abilities: ${abilities.join(", ")}</p>`
                    document.querySelector('.Ability').appendChild(divc)

                    let divd = document.createElement('div')
                    divd.innerHTML = `<p>Random moves: ${randomMoves.join(", ")}</p>`
                    document.querySelector('.movesset').appendChild(divd)

            });
                }
            });

            RightArrow.addEventListener('click', function () {
                if (Npokemon < 1008) {
                    Npokemon = Npokemon + 1;
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
                    document.querySelector('.pokename').innerHTML ='';
                    document.querySelector('.Ability').innerHTML ='';
                    document.querySelector('.movesset').innerHTML ='';

                    let diva = document.createElement('div')
                    diva.innerHTML = `<h2>${name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                    document.querySelector('.pokemon_area').appendChild(diva)

                    let divb = document.createElement('div')
                    divb.innerHTML = `<h2>${name}</h2>`
                    document.querySelector('.pokename').appendChild(divb)

                    let divc = document.createElement('div')
                    divc.innerHTML = `<p>Abilities: ${abilities.join(", ")}</p>`
                    document.querySelector('.Ability').appendChild(divc)

                    let divd = document.createElement('div')
                    divd.innerHTML = `<p>Random moves: ${randomMoves.join(", ")}</p>`
                    document.querySelector('.movesset').appendChild(divd)

            });
                }
            });
        } else if (element.value === 'b'){
            let poke = []
            document.querySelector('.pokemon_area').innerHTML = '';
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
                }
            }


        } else if (element.value === 'c'){
            console.log('c')
        } else {
            console.log('d')
        }
    })
});
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

        // Pick 4 random moves from the array
        let randomMoves = [];
        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * moves.length);
            randomMoves.push(moves[randomIndex]);
        }


        document.querySelector('.pokename').innerHTML ='';
        document.querySelector('.Ability').innerHTML ='';
        document.querySelector('.movesset').innerHTML ='';


        let divb = document.createElement('div')
        divb.innerHTML = `<h2>${name}</h2>`
        document.querySelector('.pokename').appendChild(divb)

        let divc = document.createElement('div')
        divc.innerHTML = `<p>Abilities: ${abilities.join(", ")}</p>`
        document.querySelector('.Ability').appendChild(divc)

        let divd = document.createElement('div')
        divd.innerHTML = `<p>Random moves: ${randomMoves.join(", ")}</p>`
        document.querySelector('.movesset').appendChild(divd)



    });
};
function removehidden(){
    document.querySelector('.card').classList.remove('hiddenn')
    document.querySelector('.pokelone').innerHTML= '';
    document.querySelector('.pokename').innerHTML ='';
    document.querySelector('.Ability').innerHTML ='';
    document.querySelector('.movesset').innerHTML ='';
}


>>>>>>> 353726e847d2d0544266c266a4351e142205b405
