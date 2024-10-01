import EditorConfig from "./monaco-editor-config.js";
import loadComponents from "./load-components.js";
import { 
    renderComponent, 
    loadExercise, loadExerciseDescription,
    getHash,
    getCurrentExercise
} from "./app.js";

Object.entries(loadComponents).forEach(async ([name, content]) => {
    renderComponent(name, content)
});

let runCodeButton = document.getElementById('run-code');

runCodeButton.addEventListener('click', async () => {
    let exercise = await getCurrentExercise();
    exercise.cases.forEach(caseItem => {
        caseItem.validate(editor.getValue());
    })
});


const editor = monaco.editor.create(document.getElementById('editor'), EditorConfig);



const bootstrap = async () => {
    let exercise = await getCurrentExercise()
    let content = await loadExerciseDescription(getHash());
    renderComponent("ExerciseContentByHash", content);
};

window.addEventListener('hashchange', bootstrap);

bootstrap()

