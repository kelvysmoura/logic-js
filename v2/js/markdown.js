
let MDConverter;

let classMap = {}

let bindings = Object.keys(classMap).map(key => ({
  type: 'output',
  regex: new RegExp(`<${key}(.*)>`, 'g'),
  replace: `<${key} class="${classMap[key]}" $1>`
}));

function create() {
  if(!MDConverter) {
    MDConverter = new showdown.Converter({
      extensions: [...bindings],
      customizedHeaderId: true,
      ghMentions: true,
      openLinksInNewWindow: true,
      simplifiedAutoLink: true,
      tables: true,
      tasklists: true
    });
  }
}

export default function (text) {
  create()
  return MDConverter.makeHtml(text);
}