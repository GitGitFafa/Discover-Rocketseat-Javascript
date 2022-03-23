//Função liquidificador

/*

Na função:
*Crio uma função; 
*Dou nome a ela; 
*Passo os parâmetros dentro dos parênteses;
* Crio o escopo abrindo as chaves;
* Dentro dela digo o que ela tem que fazer;
* coloco o return para que então ela possa ser chamada fora do escopo.

Fora da função:
* crio uma variável (const, let ou var);
* atribuo a função como valor( nome da função que quero alimentar a variável);
* abro parênteses;
* coloco os argumentos dentro( o que quero executar );
* Executo a variável dentro do consolog (aqui a variável será executada, então chamando a função para ser executada através do return, que vai levar a função para dentro da variável e printar na tela as informações.)




*/
function fazerSuco(fruta1, fruta2){

  return 'suco de: ' +fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)