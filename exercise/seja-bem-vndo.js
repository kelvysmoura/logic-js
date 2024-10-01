let errorMsg = 'Função aceita apenas string como argumento!';

export default {
  username: "kelvysmoura",

  title: "Seja em vindo",
  
  details: `
Requisitos
- Criar uma função com o nome \`sejaBemVindo\`
- Função deve ser capaz de receber um texto como argumento
- Função deve retornar o valor recebido concatenado com a frase "Seja bem vindo(a)"
- Quando a função receber um valor diferente de texto deve retornar a mensagem ${errorMsg}
  `,
  tests: [
    {
      params: ["Maria"],
      expect: "Maria, Seja bem vindo(a)!"
    },
    {
      params: ["Jefferson"],
      expect: "Jefferson, Seja bem vindo(a)!"
    },
    {
      params: [10],
      expect: errorMsg
    },
  ]
}
