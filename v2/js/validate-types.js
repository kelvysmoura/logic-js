
import { CASE_TYPES } from "./consts.js";

export default {
    [CASE_TYPES.primitiveVariable]: function (content, {variable, value}) {
        content = `
            ${content}\n
            if(typeof ${variable} === "undefined") {
                throw new Error("Não existe nenhuma variavel ${variable}");
            }
            if(${variable} !== '${value}') {
                throw new Error("Variavel ${variable} não tem o valor Hello World");
            }
        `;
        (new Function(content))();
    }
}