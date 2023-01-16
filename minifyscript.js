window.onload=function(){document.querySelector(".god").click()};var Npokemon=1;if(void 0===hname){let e=document.querySelector(".hname");null===localStorage.getItem("name")?e.innerHTML="Pokedex":e.innerHTML="Pokedex de "+localStorage.getItem("name")}else null===localStorage.getItem("name")?hname.innerHTML="Pokedex":hname.innerHTML="Pokedex de "+localStorage.getItem("name");let pat=localStorage.getItem("b1");null===pat?(localStorage.setItem("b1","0"),localStorage.setItem("b2","0"),localStorage.setItem("b3","0"),localStorage.setItem("b4","0")):console.log("Good!");let tabs=document.querySelectorAll(".tabs");function searchPokemon(){let e=document.getElementById("pokemon-search").value,t=document.querySelector(".pokemon_area"),s=document.querySelector(".stats-display"),a=new XMLHttpRequest;a.open("GET","https://pokeapi.co/api/v2/pokemon/"+e,!0),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){let e=JSON.parse(a.responseText);t.innerHTML="",s.innerHTML="";let r=`<div class="stat-bar">
                        <div class="progress" style="width:${e.stats[0].base_stat/250*100}%"></div>
                        </div>`;document.querySelector(".stats-display").innerHTML=r,document.body.style.backgroundImage=`url('img/${e.types[0].type.name}.png')`;let o=new Audio(`https://veekun.com/dex/media/pokemon/cries/${e.id}.ogg`);o.volume=.3,o.play(),Npokemon=e.id,document.querySelector(".a").innerHTML="";let l=document.createElement("div");l.classList.add("droptarget"),l.innerHTML=`
                    <div class="poke"  draggable="true" id="${e.name}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png" draggable="false">
                    </div>
                    `,document.querySelector(".a").appendChild(l),t.innerHTML=`
                <h2>${e.name}</h2>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png'>`,s.innerHTML=`
                <h2>${e.name}</h2>

                    <p>Possible set: ${e.moves[Math.floor(Math.random()*e.moves.length)].move.name}, ${e.moves[Math.floor(Math.random()*e.moves.length)].move.name}, ${e.moves[Math.floor(Math.random()*e.moves.length)].move.name}, ${e.moves[Math.floor(Math.random()*e.moves.length)].move.name}</p>

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
                        <p>${e.stats[0].stat.name}: ${e.stats[0].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress1"  style="width:${e.stats[0].base_stat/250*100}%; background-color: gray;"></div>
                      </div>                   
                    </div>
                    <div id="Stat2">
                        <p>${e.stats[1].stat.name}: ${e.stats[1].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress2" style=" width:${e.stats[1].base_stat/250*100}% ; background-color: gray;">
                        </div>
                      </div>                   
                    </div>
                    <div id="Stat3">
                        <p>${e.stats[2].stat.name}: ${e.stats[2].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress3" style="width:${e.stats[2].base_stat/250*100}%;  background-color: gray;"></div>
                      </div>                   
                    </div>
                    <div id="Stat4">
                        <p>${e.stats[3].stat.name}: ${e.stats[3].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress4" style="width:${e.stats[3].base_stat/250*100}%; background-color: gray;"></div>
                      </div>       
                      </div>                   
                    </div>
                     <div id="Stat5">
                        <p>${e.stats[4].stat.name}: ${e.stats[4].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress5" style="width:${e.stats[4].base_stat/250*100}% ; background-color: gray"></div>
                      </div>       
                      </div>                   
                    </div>
                    <div id="Stat6">
                        <p>${e.stats[5].stat.name}: ${e.stats[5].base_stat}</p>
                         <div class="stat-bar">
                        <div class="progress6" style="width:${e.stats[5].base_stat/250*100}%;  background-color: gray"></div>
                      </div>       
                      </div>                   
                    </div>
                        `}},a.send()}function get_pokement(e){document.querySelector(".card").classList.add("hiddenn");fetch("https://pokeapi.co/api/v2/pokemon/"+e).then(function(e){return e.json()}).then(function(e){let t=document.createElement("div");t.classList.add("pokelone");let s=document.createElement("div");s.innerHTML=`<div><button onclick="removehidden()">X</button><h2>${e.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png"></div>`,document.querySelector(".pokemon_area").appendChild(t),document.querySelector(".pokelone").appendChild(s);let a=e.name,r=e.abilities.map(e=>e.ability.name),o=e.moves.map(e=>e.move.name),l=e.types.map(e=>e.type.name),i=e.height,n=e.weight,d=e.stats.map(e=>e.stat.name),c=e.stats.map(e=>e.base_stat);d.map((e,t)=>`${e} : ${c[t]}`);let p=e.stats[0].stat.name,m=e.stats[0].base_stat,g=e.stats[1].stat.name,v=e.stats[1].base_stat,u=e.stats[2].stat.name,h=e.stats[2].base_stat,y=e.stats[3].stat.name,b=e.stats[3].base_stat,k=e.stats[4].stat.name,$=e.stats[4].base_stat,L=e.stats[5].stat.name,f=e.stats[5].base_stat,_=e.id;Npokemon=_;let S=[];for(let q=0;q<4;q++){let w=Math.floor(Math.random()*o.length);S.push(o[w])}document.querySelector(".stats-display").innerHTML="",document.body.style.backgroundImage=`url('img/${l[0]}.png')`;let I=new Audio(`https://veekun.com/dex/media/pokemon/cries/${_}.ogg`);I.volume=.3,I.play();let M=document.createElement("div");M.innerHTML=`<h2>${a}</h2><br> <p>Abilities: ${r.join(", ")}</p><br><p>Types: ${l.join(", ")}</p>
                    <br>
                    <p>Height: ${i} d\xe9cim\xe9tre</p>
                    <p>Weight: ${n} gramme</p>
                    <br>
                    <p>Random moves: ${S.join(", ")}</p>
                    <h2>Statistics</h2>
                    <p>${p}: ${m}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${m/250*100}%; background-color: gray;"></div>
                    </div>
                    <p>${g}: ${v}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${v/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${u}: ${h}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${h/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${y}: ${b}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${b/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${k}: ${$}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${$/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${L}: ${f}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${f/250*100}%; background-color: gray;"></div>
                    </div> `,document.querySelector(".stats-display").appendChild(M),document.querySelector(".a").innerHTML="";let T=document.createElement("div");T.classList.add("droptarget"),T.innerHTML=`
                    <div class="poke"  draggable="true" id="${a}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `,document.querySelector(".a").appendChild(T)})}function removehidden(){document.querySelector(".card").classList.remove("hiddenn"),document.querySelector(".pokelone").innerHTML="",document.querySelector(".stats-display").innerHTML=""}tabs.forEach(e=>{e.addEventListener("click",function(){if("a"===e.value){let t=document.querySelector(".left_arrow"),s=document.querySelector(".right_arrow"),a=document.querySelector(".up_arrow"),r=document.querySelector(".down_arrow");function o(){Npokemon>1&&fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon-=1}`).then(e=>e.json()).then(e=>{let t=e.name;e.abilities.map(e=>e.ability.name);let s=e.moves.map(e=>e.move.name),a=e.types.map(e=>e.type.name),r=e.stats[0].stat.name,o=e.stats[0].base_stat,l=e.stats[1].stat.name,i=e.stats[1].base_stat,n=e.stats[2].stat.name,d=e.stats[2].base_stat,c=e.stats[3].stat.name,p=e.stats[3].base_stat,m=e.stats[4].stat.name,g=e.stats[4].base_stat,v=e.stats[5].stat.name,u=e.stats[5].base_stat,h=[];for(let y=0;y<4;y++){let b=Math.floor(Math.random()*s.length);h.push(s[b])}document.querySelector(".pokemon_area").classList.remove("scrollinger"),document.querySelector("#pokemon-search").value="",document.querySelector(".pokemon_area").innerHTML="",document.querySelector(".stats-display").innerHTML="";let k=document.createElement("div");k.innerHTML=`<h2>${t}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`,document.querySelector(".pokemon_area").appendChild(k);let $=document.createElement("div");$.innerHTML=`
                    <h2>${t}</h2>
                    <p>Possible set: ${h.join(", ")}
                    <br>
                    <h2>Statistics</h2>
                    <p>${r}: ${o}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${o/250*100}%; background-color: gray;"></div>
                    </div>
                    <p>${l}: ${i}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${i/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${n}: ${d}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${d/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${c}: ${p}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${p/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${m}: ${g}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${g/250*100}%; background-color: gray;"></div>
                    </div>   
                      <p>${v}: ${u}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${u/250*100}%; background-color: gray;"></div>
                    </div>   `,document.querySelector(".stats-display").appendChild($);let L=new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);L.play(),document.querySelector(".a").innerHTML="";let f=document.createElement("div");f.classList.add("droptarget"),f.innerHTML=`
                    <div class="poke"  draggable="true" id="${t}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `,document.querySelector(".a").appendChild(f),document.body.style.backgroundImage=`url('img/${a[0]}.png')`})}function l(){Npokemon<1008&&fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon+=1}`).then(e=>e.json()).then(e=>{let t=e.name;e.abilities.map(e=>e.ability.name);let s=e.moves.map(e=>e.move.name),a=e.types.map(e=>e.type.name),r=e.stats[0].stat.name,o=e.stats[0].base_stat,l=e.stats[1].stat.name,i=e.stats[1].base_stat,n=e.stats[2].stat.name,d=e.stats[2].base_stat,c=e.stats[3].stat.name,p=e.stats[3].base_stat,m=e.stats[4].stat.name,g=e.stats[4].base_stat,v=e.stats[5].stat.name,u=e.stats[5].base_stat,h=[];for(let y=0;y<4;y++){let b=Math.floor(Math.random()*s.length);h.push(s[b])}document.querySelector(".pokemon_area").classList.remove("scrollinger"),document.querySelector("#pokemon-search").value="",document.querySelector(".pokemon_area").innerHTML="",document.querySelector(".stats-display").innerHTML="";let k=document.createElement("div");k.innerHTML=`<h2>${t}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png">`,document.querySelector(".pokemon_area").appendChild(k);let $=document.createElement("div");$.innerHTML=`
                    <h2>${t}</h2>
                    <p>Possible set: ${h.join(", ")}
                    <br>
                    <h2>Statistics</h2>
                    <p>${r}: ${o}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${o/250*100}%; background-color: gray;"></div>
                    </div>
                    <p>${l}: ${i}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${i/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${n}: ${d}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${d/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${c}: ${p}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${p/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${m}: ${g}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${g/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${v}: ${u}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${u/250*100}%; background-color: gray;"></div>
                    </div>      
                    `,document.querySelector(".stats-display").appendChild($);let L=new Audio(`https://veekun.com/dex/media/pokemon/cries/${Npokemon}.ogg`);L.volume=.3,L.play(),document.querySelector(".a").innerHTML="";let f=document.createElement("div");f.classList.add("droptarget"),f.innerHTML=`
                    <div class="poke"  draggable="true" id="${t}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `,document.querySelector(".a").appendChild(f),document.body.style.backgroundImage=`url('img/${a[0]}.png')`})}function i(){fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`).then(e=>e.json()).then(e=>{let t=e.name,s=e.types.map(e=>e.type.name),a=e.height,r=e.weight;e.stats.map(e=>e.stat.name);let o=e.abilities.map(e=>e.ability.name),l=e.moves.map(e=>e.move.name),i=e.id,n=e.stats[0].stat.name,d=e.stats[0].base_stat,c=e.stats[1].stat.name,p=e.stats[1].base_stat,m=e.stats[2].stat.name,g=e.stats[2].base_stat,v=e.stats[3].stat.name,u=e.stats[3].base_stat,h=e.stats[4].stat.name,y=e.stats[4].base_stat,b=e.stats[5].stat.name,k=e.stats[5].base_stat;document.querySelector(".pokemon_area").innerHTML="",document.querySelector(".stats-display").innerHTML="";let $=document.createElement("div");$.innerHTML=`<h2>${t}</h2>
                    <div class="imgdivup" >
                        <div class="img-row">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png"> 
                        </div>
                        <div class="img-row">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${i}.png">
                        </div>
                    </div>
                    `,document.querySelector(".pokemon_area").appendChild($);let L=document.createElement("div");L.innerHTML=`
                    <h2>${t}</h2>
                    <p>Abilities: ${o.join(", ")}</p>
                    <br>
                    <p>Types: ${s.join(", ")}</p>
                    <br>
                    <p>Height: ${a} d\xe9cim\xe9tre</p>
                    <p>Weight: ${r} gramme</p>
                    <br>
                    <h2>Statistics</h2>
                    <p>${n}: ${d}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${d/250*100}%; background-color: gray;"></div>
                    </div>
                    <p>${c}: ${p}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${p/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${m}: ${g}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${g/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${v}: ${u}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${u/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${h}: ${y}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${y/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${b}: ${k}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${k/250*100}%; background-color: gray;"></div>
                    </div>  
                    <br>
                    <p>All Moves: ${l.join(", ")}</p>    
                    `,document.querySelector(".stats-display").appendChild(L)})}function n(){document.querySelector(".pokemon_area").classList.add("scrollinger"),document.querySelector(".pokemon_area").innerHTML="",document.querySelector(".stats-display").innerHTML="",fetch(`https://pokeapi.co/api/v2/pokemon-species/${Npokemon}/`).then(e=>e.json()).then(e=>{fetch(e.evolution_chain.url).then(e=>e.json()).then(e=>{let t=[];(function e(s){if(t.push(s.species.name),s.evolves_to.length>0)for(let a=0;a<s.evolves_to.length;a++)e(s.evolves_to[a])})(e.chain),t.forEach(e=>{fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`).then(e=>e.json()).then(e=>{let t=e.name;e.abilities.map(e=>e.ability.name);let s=e.moves.map(e=>e.move.name),a=e.id,r=e.stats[0].stat.name,o=e.stats[0].base_stat,l=e.stats[1].stat.name,i=e.stats[1].base_stat,n=e.stats[2].stat.name,d=e.stats[2].base_stat,c=e.stats[3].stat.name,p=e.stats[3].base_stat,m=e.stats[4].stat.name,g=e.stats[4].base_stat,v=e.stats[5].stat.name,u=e.stats[5].base_stat,h=[];for(let y=0;y<4;y++){let b=Math.floor(Math.random()*s.length);h.push(s[b])}let k=document.createElement("div");k.innerHTML=`<h2>${t}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png">`,document.querySelector(".pokemon_area").appendChild(k);let $=document.createElement("div");$.innerHTML=`
                                            <h2>${t}</h2>
                                            <p>Possible set: ${h.join(", ")}
                                            <br>
                                            <h2>Statistics</h2>
                                            <p>${r}: ${o}</p>
                                            <div class="stat-bar">
                                            <div class="progress1"  style="width:${o/250*100}%; background-color: gray;"></div>
                                            </div>
                                            <p>${l}: ${i}</p>
                                            <div class="stat-bar">
                                            <div class="progress2"  style="width:${i/250*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${n}: ${d}</p>
                                            <div class="stat-bar">
                                            <div class="progress3"  style="width:${d/250*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${c}: ${p}</p>
                                            <div class="stat-bar">
                                            <div class="progress4"  style="width:${p/250*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${m}: ${g}</p>
                                            <div class="stat-bar">
                                            <div class="progress5"  style="width:${g/250*100}%; background-color: gray;"></div>
                                            </div>   
                                            <p>${v}: ${u}</p>
                                            <div class="stat-bar">
                                            <div class="progress6"  style="width:${u/250*100}%; background-color: gray;"></div>
                                            </div>   `,document.querySelector(".stats-display").appendChild($)})})})}).catch(e=>console.error(e))}fetch(`https://pokeapi.co/api/v2/pokemon/${Npokemon}`).then(e=>e.json()).then(e=>{let t=e.name;e.abilities.map(e=>e.ability.name);let s=e.moves.map(e=>e.move.name),a=e.types.map(e=>e.type.name);e.id;let r=e.stats[0].stat.name,o=e.stats[0].base_stat,l=e.stats[1].stat.name,i=e.stats[1].base_stat,n=e.stats[2].stat.name,d=e.stats[2].base_stat,c=e.stats[3].stat.name,p=e.stats[3].base_stat,m=e.stats[4].stat.name,g=e.stats[4].base_stat,v=e.stats[5].stat.name,u=e.stats[5].base_stat,h=[];for(let y=0;y<4;y++){let b=Math.floor(Math.random()*s.length);h.push(s[b])}document.querySelector(".pokemon_area").innerHTML="",document.querySelector(".stats-display").innerHTML="";let k=document.createElement("div");k.innerHTML=`<h2>${t}</h2>`,document.querySelector(".pokemon_area").appendChild(k);let $=document.createElement("div"),L=document.createElement("canvas");L.height="379",L.width="342",$.appendChild(L),document.querySelector(".pokemon_area").appendChild($);let f=L.getContext("2d"),_=new Image;_.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png`,_.onload=function(){f.drawImage(_,0,0,300,300)};let S=document.createElement("div");S.innerHTML=`
                    <h2>${t}</h2>
                    <p>Possible set: ${h.join(", ")}
                    <br>
                    <h2>Statistics</h2>
                    <p>${r}: ${o}</p>
                    <div class="stat-bar">
                    <div class="progress1"  style="width:${o/250*100}%; background-color: gray;"></div>
                    </div>
                    <p>${l}: ${i}</p>
                    <div class="stat-bar">
                    <div class="progress2"  style="width:${i/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${n}: ${d}</p>
                    <div class="stat-bar">
                    <div class="progress3"  style="width:${d/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${c}: ${p}</p>
                    <div class="stat-bar">
                    <div class="progress4"  style="width:${p/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${m}: ${g}</p>
                    <div class="stat-bar">
                    <div class="progress5"  style="width:${g/250*100}%; background-color: gray;"></div>
                    </div>   
                    <p>${v}: ${u}</p>
                    <div class="stat-bar">
                    <div class="progress6"  style="width:${u/250*100}%; background-color: gray;"></div>
                    </div>   `,document.querySelector(".stats-display").appendChild(S),document.querySelector(".a").innerHTML="";let q=document.createElement("div");q.classList.add("droptarget"),q.innerHTML=`
                    <div class="poke"  draggable="true" id="${t}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Npokemon}.png" draggable="false">
                    </div>
                    `,document.querySelector(".a").appendChild(q),document.body.style.backgroundImage=`url('img/${a[0]}.png')`}),t.addEventListener("click",o),document.addEventListener("keydown",function(e){37===e.keyCode&&o()}),s.addEventListener("click",l),document.addEventListener("keydown",function(e){39===e.keyCode&&l()}),a.addEventListener("click",i),document.addEventListener("keydown",function(e){38===e.keyCode&&i()}),r.addEventListener("click",n),document.addEventListener("keydown",function(e){40===e.keyCode&&n()})}else if("b"===e.value){document.querySelector(".pokemon_area").classList.remove("scrollinger"),document.querySelector(".stats-display").innerHTML="";let d=[];document.querySelector(".pokemon_area").innerHTML="",document.querySelector(".stats-display").innerHTML="";var c=document.createElement("div");c.classList.add("card");for(let p=0;p<9;p++)0==(d=Math.floor(900*Math.random()))?d=Math.floor(900*Math.random()):fetch("https://pokeapi.co/api/v2/pokemon/"+d).then(function(e){return e.json()}).then(function(e){let t=document.createElement("div");t.innerHTML+=`<div onclick="get_pokement(${e.id})"><h2>${e.name}</h2><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.id}.png"></div>`,document.querySelector(".pokemon_area").appendChild(c),document.querySelector(".card").appendChild(t)})}else"c"===e.value||e.value})});var selectedButton="0";document.addEventListener("DOMContentLoaded",function(){var e;if(document.querySelector(".tn[value='1']").classList.add("selected"),selectedButton="1",localStorage.getItem("team"+selectedButton)){e=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((t,s)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${e[s]}`).then(e=>e.json()).then(e=>{let s=e.name,a=e.id;t.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                    </div>`})})}}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".tn[value='1']"),t=document.querySelector(".tn[value='2']"),s=document.querySelector(".tn[value='3']"),a=document.querySelector(".tn[value='4']"),r=document.querySelector(".tn[value='5']"),o=document.querySelector(".tn[value='6']");e.addEventListener("click",function(){var l;selectedButton="1",e.classList.add("selected"),t.classList.remove("selected"),s.classList.remove("selected"),a.classList.remove("selected"),r.classList.remove("selected"),o.classList.remove("selected");let i=document.querySelectorAll("header .droptarget");for(let n=0;n<i.length;n++)i[n].innerHTML="";if(localStorage.getItem("team"+selectedButton)){l=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((e,t)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${l[t]}`).then(e=>e.json()).then(t=>{let s=t.name,a=t.id;e.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                        </div>`})})}}),t.addEventListener("click",function(){var l;selectedButton="2",t.classList.add("selected"),e.classList.remove("selected"),s.classList.remove("selected"),a.classList.remove("selected"),r.classList.remove("selected"),o.classList.remove("selected");let i=document.querySelectorAll("header .droptarget");for(let n=0;n<i.length;n++)i[n].innerHTML="";if(localStorage.getItem("team"+selectedButton)){l=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((e,t)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${l[t]}`).then(e=>e.json()).then(t=>{let s=t.name,a=t.id;e.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                        </div>`})})}}),s.addEventListener("click",function(){var l;selectedButton="3",s.classList.add("selected"),t.classList.remove("selected"),e.classList.remove("selected"),a.classList.remove("selected"),r.classList.remove("selected"),o.classList.remove("selected");let i=document.querySelectorAll("header .droptarget");for(let n=0;n<i.length;n++)i[n].innerHTML="";if(localStorage.getItem("team"+selectedButton)&&(l=JSON.parse(localStorage.getItem("team"+selectedButton))),localStorage.getItem("team"+selectedButton)){l=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((e,t)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${l[t]}`).then(e=>e.json()).then(t=>{let s=t.name,a=t.id;e.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                        </div>`})})}}),a.addEventListener("click",function(){var l;selectedButton="4",a.classList.add("selected"),t.classList.remove("selected"),s.classList.remove("selected"),e.classList.remove("selected"),r.classList.remove("selected"),o.classList.remove("selected");let i=document.querySelectorAll("header .droptarget");for(let n=0;n<i.length;n++)i[n].innerHTML="";if(localStorage.getItem("team"+selectedButton)){l=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((e,t)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${l[t]}`).then(e=>e.json()).then(t=>{let s=t.name,a=t.id;e.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                        </div>`})})}}),r.addEventListener("click",function(){var l;selectedButton="5",r.classList.add("selected"),t.classList.remove("selected"),s.classList.remove("selected"),a.classList.remove("selected"),e.classList.remove("selected"),o.classList.remove("selected");let i=document.querySelectorAll("header .droptarget");for(let n=0;n<i.length;n++)i[n].innerHTML="";if(localStorage.getItem("team"+selectedButton)&&(l=JSON.parse(localStorage.getItem("team"+selectedButton))),localStorage.getItem("team"+selectedButton)){l=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((e,t)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${l[t]}`).then(e=>e.json()).then(t=>{let s=t.name,a=t.id;e.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                        </div>`})})}}),o.addEventListener("click",function(){var l;selectedButton="6",o.classList.add("selected"),t.classList.remove("selected"),s.classList.remove("selected"),a.classList.remove("selected"),r.classList.remove("selected"),e.classList.remove("selected");let i=document.querySelectorAll("header .droptarget");for(let n=0;n<i.length;n++)i[n].innerHTML="";if(localStorage.getItem("team"+selectedButton)){l=JSON.parse(localStorage.getItem("team"+selectedButton));document.querySelectorAll(".droptarget").forEach((e,t)=>{fetch(`https://pokeapi.co/api/v2/pokemon/${l[t]}`).then(e=>e.json()).then(t=>{let s=t.name,a=t.id;e.innerHTML=`<div class="poke"  draggable="true" id="${s}" >
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a}.png" draggable="false">
                        </div>`})})}})});var team1=[],team2=[],team3=[],team4=[],team5=[],team6=[];"team1"in localStorage||localStorage.setItem("team1",JSON.stringify(team1)),console.log("have fun"),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".save").addEventListener("click",function(){if("1"===selectedButton){team1=[];let e=document.querySelectorAll("header .droptarget"),t=document.getElementsByClassName("poke");for(let s=0;s<e.length;s++)for(let a=0;a<t.length;a++)e[s].contains(t[a])&&team1.push(t[a].id);team1.length>0?localStorage.setItem("team1",JSON.stringify(team1)):console.log("non")}else if("2"===selectedButton){team2=[];let r=document.querySelectorAll("header .droptarget"),o=document.getElementsByClassName("poke");for(let l=0;l<r.length;l++)for(let i=0;i<o.length;i++)r[l].contains(o[i])&&team2.push(o[i].id);team2.length>0?localStorage.setItem("team2",JSON.stringify(team2)):console.log("non")}else if("3"===selectedButton){team3=[];let n=document.querySelectorAll("header .droptarget"),d=document.getElementsByClassName("poke");for(let c=0;c<n.length;c++)for(let p=0;p<d.length;p++)n[c].contains(d[p])&&team3.push(d[p].id);team3.length>0?localStorage.setItem("team3",JSON.stringify(team3)):console.log("non")}else if("4"===selectedButton){team4=[];let m=document.querySelectorAll("header .droptarget"),g=document.getElementsByClassName("poke");for(let v=0;v<m.length;v++)for(let u=0;u<g.length;u++)m[v].contains(g[u])&&team4.push(g[u].id);team4.length>0?localStorage.setItem("team4",JSON.stringify(team4)):console.log("non")}else if("5"===selectedButton){team5=[];let h=document.querySelectorAll("header .droptarget"),y=document.getElementsByClassName("poke");for(let b=0;b<h.length;b++)for(let k=0;k<y.length;k++)h[b].contains(y[k])&&team5.push(y[k].id);team5.length>0?localStorage.setItem("team5",JSON.stringify(team5)):console.log("non")}else if("6"===selectedButton){team6=[];let $=document.querySelectorAll("header .droptarget"),L=document.getElementsByClassName("poke");for(let f=0;f<$.length;f++)for(let _=0;_<L.length;_++)$[f].contains(L[_])&&team6.push(L[_].id);team6.length>0?localStorage.setItem("team6",JSON.stringify(team6)):console.log("non")}})});let deletarea=document.querySelector(".deleting .droptarget");deletarea.addEventListener("mouseout",function(e){if(""!==deletarea.innerHTML){let t=document.querySelector(".deleting .droptarget .poke").id,s=JSON.parse(localStorage.getItem("team"+selectedButton)),a=s.indexOf(t);-1!=a&&s.splice(a,1),localStorage.setItem("team"+selectedButton,JSON.stringify(s)),setTimeout(function(){deletarea.innerHTML=""},2e3),fetch(`https://pokeapi.co/api/v2/pokemon/${t}`).then(e=>e.json()).then(e=>{if(1===e.types.length)var t=e.types[0].type.name;else if(2===e.types.length)var t=e.types[0].type.name,s=e.types[1].type.name;if("grass"===t||"bug"===t&&"flying"!==s){let a=document.querySelector(".mt-image");a.classList.add("appear");let r=new Audio("sound_effects/mt.mp3");r.play(),setTimeout(function(){a.classList.remove("appear"),r.pause()},2500),localStorage.setItem("tondeuze","1")}else if("fire"===t){let o=document.querySelector(".mm-image");o.classList.add("appear");let l=new Audio("sound_effects/mm.mp3");l.play(),setTimeout(function(){o.classList.remove("appear"),l.pause()},2500),localStorage.setItem("washingmachine","1")}else if("water"===t){let i=document.querySelector(".mf-image");i.classList.add("appear");let n=new Audio("sound_effects/mf.mp3");n.play(),setTimeout(function(){i.classList.remove("appear"),n.pause()},2500),localStorage.setItem("frigo","1")}else if("flying"===t||"normal"===t&&"flying"===s||"bug"===t&&"flying"===s){let d=document.querySelector(".mv-image");d.classList.add("appear");let c=new Audio("sound_effects/mv.mp3");c.play(),setTimeout(function(){d.classList.remove("appear"),c.pause()},2500),localStorage.setItem("ventilo","1")}else{let p=document.querySelector(".mi-image");p.classList.add("appear");let m=new Audio("sound_effects/mi.mp3");m.play(),setTimeout(function(){p.classList.remove("appear"),m.pause()},2500),localStorage.setItem("incinerator","1")}})}else console.log("no delete")});let etuit=document.querySelector(".etuit");etuit.addEventListener("click",function(){let e=document.querySelector(".etuitarea");e.classList.contains("ninja")&&e.classList.remove("ninja")});let overlayb=document.querySelector(".overlayb");if(overlayb.addEventListener("click",function(){let e=document.querySelector(".etuitarea");e.classList.contains("ninja")||e.classList.add("ninja")}),"1"===localStorage.getItem("tondeuze")&&"1"===localStorage.getItem("washingmachine")&&"1"===localStorage.getItem("frigo")&&"1"===localStorage.getItem("ventilo")&&"1"===localStorage.getItem("incinerator")){localStorage.setItem("b3","1");let t=0;0===localStorage.getItem("contb3")&&(alert("You won badge number 3"),t++,localStorage.setItem("contb3",t))}var teamCynthia=localStorage.getItem("team1");if(teamCynthia===JSON.stringify(["spiritomb","lucario","milotic","garchomp"])){localStorage.setItem("b1","1");let s=0;0===localStorage.getItem("contb1")&&(alert("You won badge number 1"),s++,localStorage.setItem("contb1",s))}let b1Value=localStorage.getItem("b1"),image=document.querySelector(".b1");"1"===b1Value&&(image.src="img/b1.png",image.classList.add("lithg"));let b2Value=localStorage.getItem("b2"),image2=document.querySelector(".b2");"1"===b2Value&&(image2.src="img/b2.png",image2.classList.add("lithg"));let b3Value=localStorage.getItem("b3"),image3=document.querySelector(".b3");"1"===b3Value&&(image3.src="img/b3.png",image3.classList.add("lithg"));let b4Value=localStorage.getItem("b4"),image4=document.querySelector(".b4");if("1"===b4Value){let a=document.querySelector(".b4");a.src="img/b4.png",a.classList.add("lithg")}var b1color=localStorage.getItem("b1"),b2color=localStorage.getItem("b2"),b3color=localStorage.getItem("b3"),b4color=localStorage.getItem("b4"),count=0;let etuitcolor=document.querySelector("#receptacle");1==b1color&&count++,1==b2color&&count++,1==b3color&&count++,1==b4color&&count++,1==count?etuitcolor.classList.add("copper"):2==count?etuitcolor.classList.add("silver"):3==count?etuitcolor.classList.add("gold"):4==count&&etuitcolor.classList.add("platinum");let help=document.querySelector(".help");help.addEventListener("click",function(){let e=document.querySelector(".tuto");console.log("turbo"),e.classList.contains("ninja")&&e.classList.remove("ninja");document.querySelector(".go").addEventListener("click",function(){e.classList.add("ninja")})});