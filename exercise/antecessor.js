import docs from "../src/docs.js";
let errorMsg = 'Função aceita apenas números como argumento!';

export default {
  username: "kelvysmoura",

  title: "Antecessor",
  
  details: `
Requisitos
- Criar uma função com o nome \`antecessor\`
- Função deve ser capaz de receber um número como argumento
- Função deve ser capaz de converter textos em numeros
- Função deve retornar o a frase "O antecessor do número {parametro recebido} é impar/par"
- Quando a função receber um valor diferente de número deve retornar a mensagem ${errorMsg}

**Links que podem ajudar**
- ${docs.remainder}
- ${docs.increment}
- ${docs.isNaN}
  `,
  tests: [
    {
      params: [10],
      expect: "O antecessor do número 10 é ímpar"
    },
    {
      params: [0],
      expect: "O antecessor do número 0 é ímpar"
    },
    {
      params: ["15"],
      expect: "O antecessor do número 15 é par"
    },
    {
      params: [-5],
      expect: "O antecessor do número -5 é par"
    },
    {
      params: [1],
      expect: "O antecessor do número 1 é par"
    },
    {
      params: ["parametro que não é um número"],
      expect: errorMsg
    },
  ]
}
