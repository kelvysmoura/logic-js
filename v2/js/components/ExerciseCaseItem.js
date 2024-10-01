
export default function ({label, id}) {
    return `
        <span class="p-2 text-lg w-full" id="${id}">${label}</span>
    `;
}