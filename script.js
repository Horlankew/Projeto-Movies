// definindo o objeto 
let movies = {
    imagem: '',
    titulo: '',
    genero: '',
    nota: 0,
    id:0
};
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
        id:new Date().getTime()
    };
}
// inserindo os valores dos inputs dentro da var movie, atribuindo class e data-id para a 'div' a ser criada
// que vai formar o elemento com o card do movie, e inserindo ele no html c template literals
const montaItem = () => {
    const movie = document.createElement('div')
    movie.setAttribute('data-id', movies.id)
    movie.setAttribute('class','cards')
    movie.insertAdjacentHTML('beforeEnd',
    `   
        <img src="${movies.imagem}" class="mobile" alt="imagem do filme"></img>
        <div class="div-infos">
            <h3>${movies.titulo}</h3>
            <h4>${movies.genero}</h4>
            <h1>${movies.nota}</h1>   
        </div>
        <button class="delete-movie" data-id="${movies.id}">
            <i class="fa-solid fa-trash excluir fa-flash" style="--fa-flash-opacity: 0.1; --fa-flash-scale: 1.25;" ></i>
        </button> 

    `)
    
return movie

}
// função q adc um movie individual dentro do elemento addMovies
const cadastrar = () =>{
    document.getElementById('addMovies').appendChild(montaItem())
    movies = {}
    imagem.value = ''
    titulo.value = ''
    genero.value = ''
    nota.value = ''
    id.value = ''
}



// addMovies.push(movies)
// console.log(addMovies);





