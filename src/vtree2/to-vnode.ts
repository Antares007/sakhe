import {VNode, VTree, Tags} from './types'

export function toVNode<Tag extends Tags>(element: Element): VNode<Tag> {
  const tag = element.tagName.toLowerCase() as Tag
  const data: Record<string, string> = {}
  const children: Array<VTree<any>> = []
  const elmAttrs = element.attributes
  const elmChildren = element.childNodes
  for (var i = 0, n = elmAttrs.length; i < n; i++) {
    const value = elmAttrs[i].nodeValue
    if (value) data[elmAttrs[i].nodeName] = value
  }
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

function isElement(node: Node): node is Element {
  return node.nodeType === 1
}

function isText(node: Node): node is Text {
  return node.nodeType === 3
}

function isComment(node: Node): node is Comment {
  return node.nodeType === 8
}
