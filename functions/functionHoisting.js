//function hoisting

//chamando a função antes da função ser declarada. Por conta da função estar declarada dentro de uma constante, a elevação (hoisting) não será realizado.

/*sayMyName()

//função declarada e atribuida a uma constante de nome sayMyName.
const sayMyName = function(){
  console.log('Rafa')
}

*/

// para que funcione, deve ser declarada dessa forma:

sayMyName()

function sayMyName(){
  console.log('Rafa')
}

//Acima temos uma função sofrendo elevação, e em seguida sayMyName como nome de uma função. Dessa forma irá funcionar.