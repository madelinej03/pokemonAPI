function fetchAllPokemon (){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(response => response.json())
    .then(pokemonInfo => {
        displayPokemon(pokemonInfo.results);
    })
}
 
//interaction button
let buttonElement = document.getElementById("find-pokemon");
//display results area
let resultsElement = document.getElementById('final');
 
function displayPokemon(results) {
    resultsElement.innerHTML = '';
console.log(results)
results.forEach(item => {
    console.log(item)
    let pokeList = document.createElement('li');
    pokeList.innerText = item.name;
    resultsElement.appendChild(pokeList);
});
}
 
buttonElement.addEventListener("click", fetchAllPokemon)

