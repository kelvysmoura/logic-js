import ExerciseItem from './components/ExerciseItem.js';

let colorEasy = {
    bgColor: "bg-emerald-800",
    bgHover: "bg-emerald-900",
}

let colorMedium = {
    bgColor: "bg-yellow-800",
    bgHover: "bg-yellow-900",
}


let colorHard = {
    bgColor: "bg-rose-800",
    bgHover: "bg-rose-900",
}

colorEasy = {
    bgColor: "bg-vscode-600",
    bgHover: "bg-vscode-700",
}

colorMedium = {
    bgColor: "bg-vscode-700",
    bgHover: "bg-vscode-800",
}

colorHard = {
    bgColor: "bg-vscode-800",
    bgHover: "bg-vscode-900",
}



const menu = {
    
    easy: [
        {
            hash: "ex8",
            label: "Exercicio Easy 1",
            ...colorEasy
        },
        {
            hash: "ex9",
            label: "Exercicio Easy 1",
            ...colorEasy
        },
        {
            hash: "HelloWorld",
            label: "Exercicio Easy 3",
            ...colorEasy
        },
        {
            hash: "ex9",
            label: "Exercicio Easy 1",
            ...colorEasy
        }
    ],
    medium: [
        {
            hash: "ex1",
            label: "Exercicio Medium 1",
            ...colorMedium
        },
        {
            hash: "ex2",
            label: "Exercicio Medium 1",
            ...colorMedium
        },
        {
            hash: "ex3",
            label: "Exercicio Medium 1",
            ...colorMedium
        },
        {
            hash: "ex1",
            label: "Exercicio Medium 1",
            ...colorMedium
        },
        {
            hash: "ex2",
            label: "Exercicio Medium 1",
            ...colorMedium
        },
        {
            hash: "ex3",
            label: "Exercicio Medium 1",
            ...colorMedium
        }
        
    ],
    hard: [
        {
            hash: "ex4",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex5",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex6",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex7",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex4",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex5",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex6",
            label: "Exercicio Hard 1",
            ...colorHard
        },
        {
            hash: "ex7",
            label: "Exercicio Hard 1",
            ...colorHard
        },
    ]
}

const itemsToExport = [];
for(let level in menu) {
    let items = menu[level]
    if(Array.isArray(items)) {
        let menuElement = items.map(item => ExerciseItem(item));
        itemsToExport.push(`
            <span class="block px-2 py-1 text-upper">${level}</span>
            ${menuElement.join('\n')}
            `)
    }
}

export default itemsToExport;