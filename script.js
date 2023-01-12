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
