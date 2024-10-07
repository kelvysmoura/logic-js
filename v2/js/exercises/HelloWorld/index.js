import { primitiveVariable } from "../../case-types.js";

export default {
    name: "helloworld",
    cases: [
        primitiveVariable({
            label: `Variavel hello que guarda a frase "Hello World"`,
            variable: "hello",
            value: "Hello World!"
        })
    ]
}