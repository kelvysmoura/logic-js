
const EXERCISE_LOADED = {}

export const redirect = (to) => {
    location.hash = to
}

export const renderComponent = async (id, content) => {
    let element = document.querySelector(`[id="${id}"]`);
    if (element) {
        element.innerHTML = typeof content.then === 'function' ? await content : content;
        return element;
    }
}

export const getHash = function (url) {
    url = document.location.href;
    url = new URL(url);
    return url.hash.slice(1);
}

export const loadExerciseDescription =  async (hash) => {
    let request = await fetch(`js/exercises/${hash}/description.md`);
    console.log(request.status);
    if (request.status !== 200) {
        return loadExerciseDescription(404);
    }
    return await request.text();
}

export const loadExercise = async (hash) => {
    if(EXERCISE_LOADED[hash]) {
        return EXERCISE_LOADED[hash];
    }
    try {
        let request = await import(`./exercises/${hash}/index.js`);
        EXERCISE_LOADED[hash] = request.default;
        return EXERCISE_LOADED[hash];
    } catch (e) {
        console.log(e.message)
        redirect(404);
    }
}

export const getCurrentExercise = () => {
    return loadExercise(getHash());
}