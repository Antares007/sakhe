import * as path from 'path'
import * as ts from 'typescript'
import * as prettier from 'prettier'
const program = ts.createProgram(
  [path.join(__dirname, '../../node_modules/typescript/lib/lib.dom.d.ts')],
  {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    lib: []
  }
)
const checker = program.getTypeChecker()
const sourceFile = program.getSourceFiles()[0]

const isElementChild = (type: ts.Type): boolean => {
  if (!type.symbol) return false
  if (type.symbol.getName() === 'Element') return true
  const baseTypes = type.getBaseTypes()
  if (!baseTypes) return false
  return baseTypes.some(isElementChild)
}

var ifaces: ts.InterfaceDeclaration[] = []

sourceFile.forEachChild((n: ts.Node) => {
  if (ts.isInterfaceDeclaration(n)) {
    ifaces.push(n)
  }
})

const vfaces = () => {
  const vfaces = ifaces.filter(i =>
    isElementChild(checker.getTypeAtLocation(i))
  )
  return vfaces
    .map(i => {
      const iname = i.name.getText()
      const hc = i.heritageClauses![0].types
        .filter(t => vfaces.some(n => n.name.getText() === t.getText()))
        .map(t => 'V' + t.getText())
      const members = i.members
        .map(m => {
          if (!ts.isPropertySignature(m)) return
          if (!m.type) return
          if (m.modifiers) return
          if (m.type.kind === ts.SyntaxKind.FunctionType) return
          return m.name.getText() + ': ' + m.type.getText()
        })
        .filter(Boolean)
      return (
        'interface V' +
        iname +
        (hc.length ? ' extends ' + hc.join(', ') : ' ') +
        ' {' +
        members.join(';') +
        ' }'
      )
    })
    .join(';')
}
const updateTagNameMap = (iname: string): string | undefined => {
  const emap = ifaces.find(i => i.name.getText() === iname)
  if (!emap) return
  return (
    `interface V${iname} {\n  ` +
    emap!.members
      .map(
        m =>
          `${m.name!.getText()}: V${(m as ts.PropertySignature)
            .type!.getText()}`
      )
      .join('\n  ') +
    '\n}\n'
  )
}

const rezall = prettier.format(vfaces(), {
  parser: (text, {typescript}) => typescript(text),
  semi: false
})
console.log(
  rezall +
    updateTagNameMap('HTMLElementTagNameMap') +
    updateTagNameMap('SVGElementTagNameMap')
)
// console.log(rez)
// console.log(result)
