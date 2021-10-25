let MovieList = []
// definindo o objeto 
let movies = {
    imagem: '',
    titulo: '',
    genero: '',
    nota: 0,
    id:0
    
}

// ouvindo o evento submit c addEventListener e com o preventDefault "descartando o f5 q o submit dá na pg qd envia"
// definindo uma var form para receber os valores do form do HTML c getElementById
let form = document.getElementById('form')
form.addEventListener('submit',(evento)=>{
    evento.preventDefault()
});
// pegando os valores dos inputs para add um novo filme na lista movie
const atualizarDados = () =>{
// Reatribuindo os valore vindo dos inputs ao meu obj movies
    movies ={
        imagem: document.getElementById('imagem').value,
        titulo: document.getElementById('titulo').value,
        genero: document.getElementById('genero').value,
        nota: document.getElementById('nota').value,
        id: new Date().getTime()
    };
    
    MovieList.push(movies)
    console.log('obj-vazio-pq',MovieList);
}
// inserindo os valores dos inputs dentro da var movie, atribuindo class e data-id para a 'div' a ser criada
// que vai formar o elemento com o card do movie, e inserindo ele no html c template literals
const montaItem = () => {
    addToStorage()
    const ItemMovie = document.createElement('div')
    ItemMovie.setAttribute('data-id', movies.id)
    ItemMovie.setAttribute('class','cards')
    // const movieExist = document.querySelector(`[data-id='${ItemMovie.id}']`)
    
    ItemMovie.insertAdjacentHTML('beforeEnd',
    `   
        <img src="${movies.imagem}" alt="imagem do filme"></img>
        <div class="div-infos">
            <h3>${movies.titulo}</h3>
            <h4>${movies.genero}</h4>
            <h1>${movies.nota}</h1>   
        </div>
        <button class="delete-movie" data-id="${movies.id}" onClick="Delete(${movies.id})">
            <i class="fa-solid fa-trash excluir fa-flip" style="--fa-animation-duration: 3s;"></i>
        </button> 

    `)
    return ItemMovie
}

console.log('test',MovieList);
// função q adc um movie individual dentro do elemento addMovies
const cadastrar = () =>{
    document.getElementById('addMovies').appendChild(montaItem())
    // movies = {}
    imagem.value = '',
    titulo.value = '',
    genero.value = '',
    nota.value = ''
}
// console.log('minha lista',MovieList)
const Delete = (id) =>{
    const deleted = document.querySelector(`[data-id='${id}']`)
    deleted.remove();
    // const index = MovieList.findIndex(movies => movies.id === id)
    // MovieList.splice(index,1)
}

const addToStorage = () => {
    localStorage.setItem('ListMovies', JSON.stringify(MovieList))
}


const renderListMovieStorage = () => {

    const movieStorage = localStorage.getItem('ListMovies')
    console.log('obj',movieStorage);
    if(movieStorage > 0){
        MovieList = JSON.parse(movieStorage)
        console.log('obj c valores', MovieList);
        MovieList.map((movie) =>{
            montaItem(movie)
        })
    }
}
renderListMovieStorage()
// metodo antigo de delete que eu tava testando 
// const Delete = (id) =>{
//     const index = movies.findIndex(movies => movies.id === id)
//     movies.splice(index, 1)
        

//     console.log('achei',movies)
// }








