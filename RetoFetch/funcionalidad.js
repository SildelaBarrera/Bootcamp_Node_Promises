class Pokemon{
    constructor(name, abilities, sprites){
        this.name = name;
        this.abilities = abilities;
        this.sprites = sprites;    
    }
}

function buscar(){
    let inputName = document.getElementById("input1").value
    getPokemon(inputName)
}

async function getPokemon(inputName){

    let url = "https://pokeapi.co/api/v2/pokemon/";
    let urlPokemon = url + inputName;

    let param = {
        headers: {"Content-type": "application/json; charset=UTF-8"},
        method: "GET"
    }
    fetch(urlPokemon, param)
    .then(function(data){

        console.log(data);
        return data.json()
    })
    .then(function(result){
        console.log(result)
        if(!result.error){
            let nombre = document.getElementById("mostrarNombre") 
            nombre.innerHTML = "<h2>" + result.name + "</h2>";

            let habilidades = document.getElementById("mostrarHabilidades")
            habilidades.innerHTML = "<h4>Habilidades:</h4>" 
            for(let i=0; i < result.abilities.length; i++){    
                habilidades.innerHTML += "<h3> ❂ " + result.abilities[i].ability.name + "</h3>"}
            
            let imagen = document.getElementById("mostrarImagen")
            imagen.innerHTML = "<img src=" + result.sprites.front_default + ">";
        }
        else
            alert("ERROR")
    })
    .catch(function(error){
        console.log(error);
    })      
}


