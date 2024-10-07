import storage from "./storage.js";
import EditorConfig from "./monaco-editor-config.js";

let editor;
let timeout;

const saveRawCodeAfterTimeout = () => {
    editor.onDidChangeModelContent((event) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            storage.rawCode(editor.getValue())
        }, EditorConfig.customConfig.saveRawCodeAfterTimeout);
    });
}

const saveRawCodeAfterCtrlS = () => {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            storage.rawCode(editor.getValue())
            clearTimeout(timeout);
        }
    });
}


export function StartEditor(elementId) {
    if(!editor) {
        const element = document.getElementById(elementId);
        editor = monaco.editor.create(element, EditorConfig);
    }
    saveRawCodeAfterTimeout();
    saveRawCodeAfterCtrlS();
    return editor;
}