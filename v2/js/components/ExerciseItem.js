export default function ({hash, label, bgColor = "bg-gray-200", bgHover = 'bg-gray-300'}) {
    return `
        <li>
          <a href="#${hash}" 
            class="
                text-vscode-400
                hover:text-vscode-50
                px-4 py-2 m-2 font-bold block 
                ${bgColor} 
                hover:${bgHover} 
                target:${bgHover}"
            >${label}</a>
        </li>
    `;
}