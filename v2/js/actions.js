
export function toggleElementById(id) {
    let element = document.getElementById(id);
    if(element) {
        let isBlock = element.style.getPropertyValue('display') === "block"
        if(isBlock) {
            element.style.setProperty('display', 'none');
        } else {
            element.style.setProperty('display', 'block');
        }
        return element;
    }
    console.error(`Não existe elemento com ID ${id}`)
}