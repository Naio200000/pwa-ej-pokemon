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

const pokeCard = (name) => {
    return `
            <div class="card my-2 mx-1 col-3">
                <div class="row">
                    <div class="col-4">
                        <img src="/pngwing.com.png" alt="" class="img-fluid p-1">
                    </div>
                    <div class="col-8">
                        <p class="card-title h4 text-capitalize">${name}</p>
                        <p class="btn btn-secondary h5 pokeDatos" data-bs-toggle="modal" data-bs-target="#exampleModal" id="${name}">VER MAS</p>
                    </div>
                </div>
            </div>
            `
}

const contenidoPoke = document.getElementById('contenidoPoke');

const createCards = async () => {
    let pokes = await getPokes()
    let contenido = pokes
                    .map(poke => pokeCard(poke.name))
                    .join('')
    contenidoPoke.innerHTML = contenido
    const btnPokeDatos = document.querySelectorAll('.pokeDatos')
    btnPokeDatos.forEach((poke) => {
        poke.addEventListener('click', (e) => {
            let btn = e.target
            getPokefromname(btn.id)
        })
    })
}

createCards()