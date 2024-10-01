
export default {
    cases: [
        {
            type: 'variables',
            label: `Variavel hello que guarda a frase "Hello World"`,
            expetedName: "hello",
            expetedValue: "Hello World",
            validate(content) {
                content = `
                    ${content}

                    if(typeof ${this.expetedName} === "undefined") {
                        throw new Error("Não existe nenhuma variavel ${this.expetedName}");
                    }

                    if(${this.expetedName} !== '${this.expetedValue}') {
                        throw new Error("Variavel ${this.expetedName} não tem o valor Hello World");
                    }
                `;

                let wrap = new Function(content);

                console.log(wrap())
            }
        }
    ]
}