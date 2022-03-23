//callback function

/* Chamando uma função de maneira simples

function sayMyName(name){

  name('ainda não estou numa callback')

}

sayMyName()
*/

//Chamando uma função usando o método callback
/*
function sayMyName(name) {
  console.log('antes da callback')
 
  name()

  console.log('depois da callback')
}

sayMyName(
  ()=>{
    console.log('estou em uma callback')
  }

)
*/
/*
function carro(andar){

  andar()
  
}

function carro(frear){
  frear()
}

carro(
  ()=>{
    console.log(carro)
  }
)
*/


function agradecer(){
  console.log('Obrigado pelas dicas 3lement!')
}

console.log(agradecer)