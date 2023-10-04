const getPokes = () => {
    return fetch (`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then(rta => rta.json())
        .then((data) => data.results)
        .then(results => results.map((pokemon) =>{
            let {name, url} = pokemon;
            return {
                name,
                url
            }
        }));
}
