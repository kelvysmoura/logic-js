
import { CASE_TYPES } from "./consts.js";
import { randomString } from "./app.js";

export const primitiveVariable = ({id, label, variable, value}) => {
    return {
        label,
        variable,
        value,
        type: CASE_TYPES.primitiveVariable,
        validate(content) {
            content = `
                ${content}\n
                if(typeof ${variable} === "undefined") {
                    throw new Error("Não existe nenhuma variavel ${variable}");
                }
                if(${variable} !== '${value}') {
                    throw new Error("Variavel ${variable} não tem o valor Hello World");
                }
                return true;
            `;
            return (new Function(content))();
        }
    }
}