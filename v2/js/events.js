
function randomString(qty = 2) {
    return Array(qty).fill(1).map(() => {
        return Math.random().toString(16).replace('0.', '');
    }).join('_');
}

export function clickEvent(fn, element) {

    let functionName = fn.name === ""
        ? `clickEvent_${randomString()}`
        : fn.name;

    if(!window[functionName]) {
        window[functionName] = fn
    }

    if(element) {
        return element.replace('onclick', `onclick="${functionName}()"`);
    }

    return functionName;

}