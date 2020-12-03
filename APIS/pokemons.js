let container = document.querySelector(".container");

let fragment = document.createDocumentFragment();

let div1 = document.createElement("DIV");
let div2 = document.createElement("DIV");

div1.classList.add("div-column1");
div2.classList.add("div-column2");


// fetch ACCESO A UNA API (POKEMON):

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res =>res.json())
    .then(data =>{
        let i = 0;
        data.results.forEach(element => {
            i++;
            div1.innerHTML += `Nombre Pokemons${i}: <b>${element.name}</b><br>`;
        });
    })
    .catch(error => console.log(error)); //aqui pintaria cualquier error por parte de la API


    //async await IGUAL QUE FETCH PERO AHORRANDO CODIGO


const obtenerPokemons = async() =>{
    try {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon");
        let data = await res.json();
        let i = 0;
        data.results.forEach(element => {
            i++;
            div2.innerHTML += `Nombre Pokemons${i}: <b>${element.name}</b><br>`;
        });
    } catch (error) {
        console.log(error);
    };
};

obtenerPokemons();

fragment.appendChild(div1);
fragment.appendChild(div2);
container.appendChild(fragment);