const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonImgDiv = document.getElementById("pokemon-img");
const pokemonTypesDiv = document.getElementById("types");
const pokemonNameSpan = document.getElementById("pokemon-name");
const pokemonIdSpan = document.getElementById("pokemon-id");
const weightSpan = document.getElementById("weight");
const heightSpan = document.getElementById("height");
const typesSpan = document.getElementById("types");
const hpSapn = document.getElementById("hp");
const attackSpan = document.getElementById("attack");
const defenseSpan = document.getElementById("defense");
const specialAttackSpan = document.getElementById("special-attack");
const specialDefenseSpan = document.getElementById("special-defense");
const speedSpan = document.getElementById("speed");

const statList = {
    "hp": hpSapn,
    "attack": attackSpan,
    "defense": defenseSpan,
    "special-attack": specialAttackSpan,
    "special-defense": specialDefenseSpan,
    "speed": speedSpan
}

const showPokemonInfo = (info) => {
    pokemonImgDiv.innerHTML = `<img id="sprite" src="${info.sprites.front_default}" />`;
    pokemonTypesDiv.innerHTML = info.types.map(({ type }) => `<span>${type.name.toUpperCase()}</span>`).join("");
    pokemonIdSpan.textContent = info.id;
    pokemonNameSpan.textContent = info.name;
    heightSpan.textContent = info.height;
    weightSpan.textContent = info.weight;
    for (let item of info.stats) {
        statList[item.stat.name].textContent = String(item.base_stat)
    }

}

const searchPokemon = async (text) => {
    try {
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${text.toLowerCase()}`);
        const data = await res.json();
        showPokemonInfo(data);
    } catch (err) {
        console.log(err)
        alert("Pokémon not found")

    }
}

searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value;
    if (!searchText) {
        alert("please input text")
    }
    searchPokemon(searchText)
})


