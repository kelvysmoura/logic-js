
export default function ({hash, label, bgColor = "bg-gray-200", bgHover = 'bg-gray-300'}) {
    return `
        <li>
          <a href="#${hash}" class="px-4 py-2 m-2 font-bold rounded block ${bgColor} hover:${bgHover} target:${bgHover} target:border-2 target:border-black target:border-solid" id="${hash}">${label}</a>
        </li>
    `;
}