//Array

const animals = [
  'Lion',
  'monkey',
 //criando um objeto dentro de um array
  {
    name: 'Cat',
    age: 3
  }
]

//Acessar valores dentro do Array

console.log (animals[1])

//acessando o objeto cat 

console.log(animals[2])

//acessando o nome do objeto cat

console.log(animals[2].name)

//Vale lembrar que cat neste caso é um objeto, lion e monkey são strings. Os acessos são diferentes por conta desta condição. Não dá pra fazer console.log(animals[1].name), pois monkey é uma string e não um objeto.
