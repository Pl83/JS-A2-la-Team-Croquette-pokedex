window.onload = function () {document.querySelector('.god').click(); };

let tabs = document.querySelectorAll('.tabs');
//console.log(tabs.innerHTML)
tabs.forEach(element => {
    element.addEventListener('click', function () {
        if (element.value === 'a'){
            var Npokemon = 1;
            let LeftArrow = document.querySelector('.left_arrow');
            let RightArrow = document.querySelector('.right_arrow');

            let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/?limit='+Npokemon) //1008
            allpokemon.then(function (response) {
                return response.json();
                }).then(function (data) {
                console.log(data);
                document.querySelector('.pokemon_area').innerHTML = '';
                for (let i = 0; i < data.results.length; i++) {
                    let div = document.createElement('div')
                    div.innerHTML = `<h2>${data.results[i].name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png">`
                    document.querySelector('.pokemon_area').appendChild(div)
                }
            });

            LeftArrow.addEventListener('click', function () {
                if (Npokemon > 1) {
                    Npokemon = Npokemon - 1;
                    allpokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                    allpokemon.then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data);
                        document.querySelector('.pokemon_area').innerHTML = '';
                        let div = document.createElement('div')
                        div.innerHTML = `<h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                        document.querySelector('.pokemon_area').appendChild(div)
                    });
                }
            });

            RightArrow.addEventListener('click', function () {
                if (Npokemon < 1008) {
                    Npokemon = Npokemon + 1;
                    allpokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                    allpokemon.then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data);
                        document.querySelector('.pokemon_area').innerHTML = '';
                        let div = document.createElement('div')
                        div.innerHTML = `<h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                        document.querySelector('.pokemon_area').appendChild(div)
                    });
                }
            });
        } else if (element.value === 'b'){
            console.log('b')
            Npokemon = 10;
            let LeftArrow = document.querySelector('.left_arrow');
            let RightArrow = document.querySelector('.right_arrow');

            let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/?limit='+Npokemon) //1008
            allpokemon.then(function (response) {
                return response.json();
                }).then(function (data) {
                console.log(data);
                document.querySelector('.pokemon_area').innerHTML = '';
                for (let i = 0; i < data.results.length; i++) {
                    let div = document.createElement('div')
                    div.innerHTML = `<h2>${data.results[i].name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png">`
                    document.querySelector('.pokemon_area').appendChild(div)
                }
            });

            LeftArrow.addEventListener('click', function () {
                if (Npokemon > 1) {
                    Npokemon = Npokemon - 1;
                    allpokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                    allpokemon.then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data);
                        document.querySelector('.pokemon_area').innerHTML = '';
                        let div = document.createElement('div')
                        div.innerHTML = `<h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                        document.querySelector('.pokemon_area').appendChild(div)
                    });
                }
            });

            RightArrow.addEventListener('click', function () {
                if (Npokemon < 1008) {
                    Npokemon = Npokemon + 1;
                    allpokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`)
                    allpokemon.then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        console.log(data);
                        document.querySelector('.pokemon_area').innerHTML = '';
                        let div = document.createElement('div')
                        div.innerHTML = `<h2>${data.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`
                        document.querySelector('.pokemon_area').appendChild(div)
                    });
                }
            });
        } else if (element.value === 'c'){
            console.log('c')
        } else {
            console.log('d')
        }
    })
});

