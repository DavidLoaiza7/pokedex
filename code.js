
const url= `https://pokeapi.co/api/v2/pokemon/1`; 

const fetchData = async(url) => {
    const response = await fetch(url);
    const pokeOrder = await response.json();
    const idElement = document.getElementById('pokemon_id');
    const nameElement = document.getElementById('pokemon_name');
    const imgElement = document.getElementById('img_poke').src=`${pokeOrder.sprites.front_default}`;
    const typeElement = document.getElementById('pokemon_type');
    const speedElement = document.getElementById('speed');
    const hpElement = document.getElementById ('hp');
    const attackElement = document.getElementById('attack');
    idElement.innerHTML = `${pokeOrder.id}`;
    nameElement.innerHTML = `${pokeOrder.name[0]}` .toUpperCase() + pokeOrder.name.substring(1);
    typeElement.innerHTML = `${pokeOrder.types[0].type.name[0]}`.toUpperCase() + pokeOrder.types[0].type.name.substring(1);
    speedElement.innerHTML = `${pokeOrder.stats[5].base_stat}`;
    hpElement.innerHTML = `${pokeOrder.stats[0].base_stat}`;
    attackElement.innerHTML = `${pokeOrder.stats[1].base_stat}`;
    console.log(pokeOrder);
}

let pokeData = {}
pokeData = fetchData(url); 



const urlName = `https://pokeapi.co/api/v2/pokemon?` + new URLSearchParams({limit:1126});

const searchPokemon = async () => {
    const res = await fetch(urlName);
    const pokeName = await res.json();
    const pokeList = pokeName.results;
    const finalList = pokeList.map((pokemon) => pokemon.name);
    console.log(finalList);
    return finalList 
    
}



const allPokemonList = searchPokemon();


const form = document.getElementById('pokeForm');

form.addEventListener ('submit', function(event){
    event.preventDefault();
})




function viewArray() {
  var inputsValues = document.getElementsByClassName('datoInput')[0].value.toLowerCase();
  console.log(inputsValues);
  const finalUrl = `https://pokeapi.co/api/v2/pokemon/${inputsValues}`;
  fetchData(finalUrl);
}

