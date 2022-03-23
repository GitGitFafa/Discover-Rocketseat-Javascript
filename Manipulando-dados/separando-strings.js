//Manipulando Strings e Arrays

//Separe um texto que contenha espaços, em um novo array onde cada palavra do texto é uma posição do array. Depois disso, transforme o array em um texto , e onde eram espaços, coloque _ (underscore)

let phrase = 'Eu quero viver o amor!'
let myArray = phrase.split(" ")

console.log(myArray)

let phraseWithUnderscore = myArray.join('_')

console.log(phraseWithUnderscore)
