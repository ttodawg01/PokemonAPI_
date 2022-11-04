// get the from and everything

{
    let form = document.getElementById('Pokeform');
    console.log(form)

    async function handleSubmit(e){
        e.preventDefault()
        // console.log(e);
        let pokemonNames = e.target.pokemonNames.value;
        // console.log(pokemonNames)
        let PokemonInfo = await getPokemonInfo(pokemonNames);
        console.log(PokemonInfo);
        console.log(typeof (PokemonInfo));

        e.target.pokemonNames.value = ''
    }

    // create a fuction for the pokemon names

    async function getPokemonInfo(PokemonName){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}/`);
        // console.log(response)
        let data = await response.json();
        // console.log(data[0])
        return data;
    }

    // add handlesubmit function
    form.addEventListener('submit', handleSubmit)
}