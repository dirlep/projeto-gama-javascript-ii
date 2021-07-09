const livros = require('./database')

const readline = require('readline-sync')

//input do usuario
const entradaInicial = readline.question('Deseja buscar um livro por categoria? S/N ')

//se sim, mostrar categorias disponiveis
//se nao, mostrar todos os livros em ordem crescente de páginas
if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('As categorias disponíveis são:')
    console.log('Suspense', '/ Romance', '/ Horror', '/ Baseados em Jogos')

    const entradaCategoria = readline.question('Qual categoria deseja? ')
    const retorno = livros.filter(livro => livro.categoria.toLocaleUpperCase() === entradaCategoria.toLocaleUpperCase())
    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis em todas as categorias: ')
    console.table(livrosOrdenados)
}

