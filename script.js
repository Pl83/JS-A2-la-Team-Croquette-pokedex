let allpokemon = fetch('https://pokeapi.co/api/v2/pokemon/?limit=1') //1008
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