const poke = fetch (`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
                .then(data => data.json())
                .then(({data}) => data)
                .then(data => console.log(data))