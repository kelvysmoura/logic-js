import { ICONS } from "../consts.js";

export default function ({id, label, icon = ICONS.PLAY}) {
    return `
        <span id="${id}" class="p-2 text-lg w-full align-middle">
            <img src="${icon}" class="bg-vscode-50 rounded-full inline-block case-img">
            <span class="inline-block">${label}</span>
            <div class="error-message"></div>
        </span>
    `;
}