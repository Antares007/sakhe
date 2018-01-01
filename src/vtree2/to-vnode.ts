import {VNode, VTree, Tags, Data} from './types'

function readAttrs(elmAttrs: NamedNodeMap): Data['attrs'] {
  const l = elmAttrs.length
  if (l === 0) return
  const attrs: Data['attrs'] = {}
  for (var i = 0; i < l; i++) {
    const name = elmAttrs[i].nodeName
    if (name === 'class' || name === 'style') continue
    const value = elmAttrs[i].nodeValue
    if (value) attrs[name] = value
  }
  return attrs
}

function readClass(classList: DOMTokenList): Data['class'] {
  const l = classList.length
  if (l === 0) return
  const classes: Data['class'] = {}
  for (let i = 0; i < l; i++) {
    classes[classList[i]] = true
  }
  return classes
}

function readStyle(style: CSSStyleDeclaration): Data['style'] {
  const l = style.length
  if (l === 0) return
  const styles: any = {}
  for (let i = 0; i < l; i++) {
    const name = style[i]
    styles[name] = style.getPropertyValue(name)
  }
  return styles
}

export function toVNode<Tag extends Tags>(element: Element): VNode<Tag> {
  const tag = element.tagName.toLowerCase() as Tag
  const data: Data = {}
  const attrs = readAttrs(element.attributes)
  const klass = readClass(element.classList)
  const style = isHTMLElement(element) ? readStyle(element.style) : void 0
  if (attrs) data.attrs = attrs
  if (klass) data.class = klass
  if (style) data.style = style
  const children: Array<VTree<any>> = []
  const elmChildren = element.childNodes
  for (var i = 0, n = elmChildren.length; i < n; i++) {
    children.push(toVTree(elmChildren[i]))
  }
  return {type: 'node', tag, data, children, node: element}
}

export function toVTree<Tag extends Tags>(node: Node): VTree<Tag> {
  if (isElement(node)) {
    return toVNode(node)
  } else if (isText(node)) {
    return {type: 'text', data: node.textContent || '', node}
  } else if (isComment(node)) {
    return {type: 'comment', data: node.textContent || '', node}
  } else {
    return assertNever()
  }
}

function assertNever(message = 'never'): never {
  throw new Error(message)
}

function isHTMLElement(node: Node): node is HTMLElement {
  return isElement(node) && (<any>node).style
}

function isElement(node: Node): node is Element {
  return node.nodeType === 1
}

function isText(node: Node): node is Text {
  return node.nodeType === 3
}

function isComment(node: Node): node is Comment {
  return node.nodeType === 8
}
