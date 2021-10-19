let dados = {
    imagem: '',
    titulo: '',
    genero: '',
    nota: 0,
};

const atualizarDados = () =>{
console.log('test');
dados ={
    imagem: document.getElementById('imagem').value,
    titulo: document.getElementById('titulo').value,
    genero: document.getElementById('genero').value,
    nota: document.getElementById('nota').value,
};

document.getElementById('debug').innerHTML = JSON.stringify(dados)
}
console.log(dados);
const montaItem = () => {
const item = document.createElement('div')
const id = new Date.getTime();
item.insertAdjacentHTML('beforeEnd',`
<i class="fa-solid fa-trash excluir fa-flash" style="--fa-flash-opacity: 0.1; --fa-flash-scale: 1.25;" ></i>
<img src="${dados.imagem}" class="mobile" alt=""></img>
<h3>${dados.titulo}</h3>
<h4>${dados.genero}</h4>
<h1 class="notas">${dados.nota}</h1>               
`)
return item

}

const cadastrar = () =>{
    document.getElementById('addMovies').appendChild(montaItem())

}

// // definindo uma var form para receber os valores do form do HTML c getElementById

// let form = document.getElementById('form')
// // console.log(form);============
// // ouvindo o evento submit c addEventListener e com o preventDefault "descartando o f5 q o submit dá na pg qd envia"
// let movies = [];
// form.addEventListener('submit', (evento) =>{
//     evento.preventDefault();
// // pegando os valores dos inputs para add um novo filme na lista movie
//     const inputTitulo = document.getElementById('titulo').value;
//     const inputImagem = document.getElementById('imagem').value;
//     const inputGenero = document.getElementById('genero').value;
//     const inputNota = document.getElementById('nota').value;
// // definindo meu obj movie para receber os valore vindo dos inputs
//     const movie = {
//         titulo: inputTitulo,
//         imagem: inputImagem,
//         genero: inputGenero,
//         nota: inputNota,
//     }
// // inserindo os valores dos inputs dentro da var movies c o push
//     movies.push(movie)
//     console.log(movies)
//     const addMovies = document.getElementById('addMovies')
//     console.log(addMovies);
//     movies.map((movie) => {
//         addMovies.innerHTML('beforeEnd',
//         `
//         <div class="meus-filmes-favoritos">
//         <button>
//         <i class="fa-solid fa-trash excluir fa-flash" style="--fa-flash-opacity: 0.1; --fa-flash-scale: 1.25;" ></i>
//         </button>
//             <img src=${movie.imagem} class="mobile"alt=""></img>
//             <h3>${movie.titulo}</h3>
//             <h4>${movie.genero}</h4>
//             <h1 class="notas">${movie.nota}</h1>

//         </div>  
        
//         `)

        // console.log(addMovies);===========
//         addMovies.append(movie)
//     })
// })

/* <i class="fa-solid fa-trash excluir fa-flash" style="--fa-flash-opacity: 0.1; --fa-flash-scale: 1.25;" ></i> */

// função q adc um movie individual dentro do array de movie



