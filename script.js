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


