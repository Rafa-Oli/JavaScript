//novo recurso do EC2015

const pessoa= {
  nome: 'Ana',
  idade: 5,
  endereco: {
      logradouro: 'Rua ABC',
      numero: 1000
  }
}
//operador de desestruturacao
const{nome,idade} = pessoa
console.log(nome,idade)

//extraindo valores e colocando em nova variavel
const{nome: n, idade: i} = pessoa
console.log(n,i)

const{ sobrenome,bemHumorada= true} = pessoa
console.log(sobrenome,bemHumorada)

const{endereco: {logradouro,numero,cep}}= pessoa
console.log(logradouro,numero,cep)