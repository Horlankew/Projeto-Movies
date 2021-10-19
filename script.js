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

