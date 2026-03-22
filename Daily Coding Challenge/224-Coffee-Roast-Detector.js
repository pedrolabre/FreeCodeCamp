/*
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.
*/

// SINTAXE: 'function' é a palavra-chave para criar uma função. 'detectRoast' é o nome que damos a ela.
// '(beans)' é o parâmetro, ou seja, a variável que vai receber a string de grãos de café quando a função for chamada.
function detectRoast(beans) {

  // SINTAXE: 'let' cria uma variável cujo valor pode mudar depois. '=' é o operador de atribuição.
  // SEMÂNTICA: Inicializamos a variável com o número 0.
  // LÓGICA: Precisamos de um lugar para acumular a pontuação total dos grãos antes de calcular a média.
  let totalPoints = 0;
  
  // SINTAXE: 'for (let variavel of iteravel)' é um laço de repetição.
  // SEMÂNTICA: Para cada caractere ('char') dentro da string ('beans'), execute o código abaixo.
  // LÓGICA: Precisamos analisar cada grão (caractere) individualmente para somar seus pontos.
  for (let char of beans) {
  
    // SINTAXE: 'if' (se) testa uma condição entre parênteses. '===' testa se o valor e o tipo são estritamente iguais.
    // LÓGICA & SEMÂNTICA: Se o caractere atual for um apóstrofo (torra clara), adicionamos 1 ponto.
    // 'totalPoints += 1' é uma abreviação sintática para 'totalPoints = totalPoints + 1'.
    if (char === "'") totalPoints += 1;
    
    // SINTAXE: 'else if' (senão se) testa uma nova condição caso a anterior seja falsa.
    // LÓGICA & SEMÂNTICA: Se não for apóstrofo, mas for um traço (torra média), adicionamos 2 pontos.
    else if (char === "-") totalPoints += 2;
    
    // SINTAXE e LÓGICA: Mesma estrutura acima. Se for um ponto (torra escura), adicionamos 3 pontos.
    else if (char === ".") totalPoints += 3;
      } 

  // SINTAXE: 'const' cria uma variável cujo valor NÃO pode ser reatribuído.
  // '.length' é uma propriedade nativa do JavaScript que retorna o tamanho (quantidade de caracteres) de uma string.
  // LÓGICA: Média = (soma de todos os pontos) dividida pela (quantidade total de grãos).
  const average = totalPoints / beans.length;
  
  // SINTAXE: Início da estrutura condicional final para decidir o que a função vai devolver.
  // LÓGICA & SEMÂNTICA: Se a média calculada for estritamente menor que 1.75...
  if (average < 1.75) {
  
    // SINTAXE: 'return' encerra a função imediatamente e "cospe" (devolve) o valor à direita.
    // LÓGICA: ...devolva a palavra "Light".
    return "Light";
    
  // SINTAXE: '&&' é o operador lógico "E" (AND). Ambas as condições precisam ser verdadeiras.
  // LÓGICA & SEMÂNTICA: Se a média for maior ou igual a 1.75 E menor ou igual a 2.5...
  } else if (average >= 1.75 && average <= 2.5) {
  
    return "Medium"; // ...devolva "Medium".
    
  // SINTAXE: 'else' (senão) captura qualquer caso que não tenha caído nas condições anteriores.
  // LÓGICA: Se não é menor que 1.75, nem está entre 1.75 e 2.5, só pode ser maior que 2.5.
  } else {
  
    return "Dark"; // ...portanto, devolva "Dark".
    
  } // Fecha o bloco do 'else'
} // Fecha o bloco da função 'detectRoast'