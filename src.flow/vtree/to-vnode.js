// @flow
import type {VNode, VTree, Data} from './types'
import {isHTMLElement, isElement, isText, isComment} from './guards'

function readAttrs(elmAttrs: NamedNodeMap): $PropertyType<Data, 'attrs'> {
  const l = elmAttrs.length
  if (l === 0) return undefined
  const attrs = {}
  for (let i = 0; i < l; i++) {
    const name = elmAttrs[i].nodeName
    if (name !== 'class' && name !== 'style') {
      const value = elmAttrs[i].nodeValue
      if (value) attrs[name] = value
    }
  }
  return attrs
}

function readClass(classList: DOMTokenList): $PropertyType<Data, 'class'> {
  const l = classList.length
  if (l === 0) return undefined
  const classes = {}
  for (let i = 0; i < l; i++) {
    classes[classList.item(i)] = true
  }
  return classes
}

function readStyle(style: CSSStyleDeclaration): $PropertyType<Data, 'style'> {
  const l = style.length
  if (l === 0) return undefined
  const styles = {}
  for (let i = 0; i < l; i++) {
    const name = style[i]
    styles[name] = style.getPropertyValue(name)
  }
  return styles
}

export default function toVNode(element: Element): VNode {
  const tag = element.tagName.toLowerCase()
  const attrs = readAttrs(element.attributes)
  const klass = readClass(element.classList)
  const data = {}
  let x
  const style = (x = isHTMLElement(element)) ? readStyle(x.style) : undefined
  if (attrs) data.attrs = attrs
  if (klass) data.class = klass
  if (style) data.style = style

  const children = []
  const elmChildren = element.childNodes
  for (let i = 0, n = elmChildren.length; i < n; i++) {
    children.push(toVTree(elmChildren[i]))
  }
  return {type: 'node', tag, data, children, node: element}
}

function toVTree(x: Node): VTree {
  let node
  if ((node = isElement(x))) {
    return toVNode(node)
  } else if ((node = isText(x))) {
    return {type: 'text', data: x.textContent || '', node}
  } else if ((node = isComment(x))) {
    return {type: 'comment', data: x.textContent || '', node}
  }
  throw new Error('unexpected node type')
}
