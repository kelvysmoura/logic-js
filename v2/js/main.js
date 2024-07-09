import EditorConfig from "./monaco-editor-config.js";
import loadComponents from "./load-components.js";

Object.entries(loadComponents).forEach(([name, content]) => {
    let element = document.querySelector(`[id="${name}"]`);
    if(element) {
        element.innerHTML = content;
    }
})

const editor = monaco.editor.create(document.getElementById('editor'), EditorConfig);

