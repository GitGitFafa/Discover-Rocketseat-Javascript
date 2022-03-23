//function expression
//function anonymous

//parâmetros (parameters)

//OBS: Jamais declarar variáveis locais sem as palavras especiais let, const ou var.
//OBS: Evitar ao máximo o uso de var, pois ele alcança escopo local e global. Dê preferência ao let.
const sum= function (number1, number2){
let total = number1 + number2
return total
// retornando a informação acima do return

}

// declarando valores para as variáveis
let number1= 34
let number2= 25


console.log(`o número 1 é ${number1}`)//<== interpolação
console.log(`o número 2 é ${number2}`)//<== interpolação

// mostrando a função sendo executada através de interpolação.
console.log(`a soma é ${sum(number1, number2)}`)