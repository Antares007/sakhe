export default function toVNode (element) {
  const tag = element.tagName.toLowerCase()

  const attrs = readAttrs(element.attributes)
  const klass = readClass(element.classList)
  const style = element.style != null ? readStyle(element.style) : undefined

  const data = {}
  if (attrs) data.attrs = attrs
  if (klass) data.class = klass
  if (style) data.style = style

  const children = []
  const elmChildren = element.childNodes
  for (let i = 0, n = elmChildren.length; i < n; i++) {
    children.push(toVTree(elmChildren[i]))
  }
  return {type: 'node', tag, key: undefined, data, children, node: element}
}

function toVTree (node) {
  const {nodeType} = node
  if (nodeType === 1) {
    return toVNode(node)
  } else if (nodeType === 3) {
    return {type: 'text', data: node.textContent || '', node}
  } else if (nodeType === 8) {
    return {type: 'comment', data: node.textContent || '', node}
  }
  throw new Error(`unexpected node type [${nodeType}]`)
}

function readAttrs (elmAttrs) {
  const l = elmAttrs.length
  if (l === 0) return
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

function readClass (classList) {
  const l = classList.length
  if (l === 0) return undefined
  const classes = {}
  for (let i = 0; i < l; i++) {
    classes[classList.item(i)] = true
  }
  return classes
}

function readStyle (style) {
  const l = style.length
  if (l === 0) return undefined
  const styles = {}
  for (let i = 0; i < l; i++) {
    const name = style[i]
    styles[name] = style.getPropertyValue(name)
  }
  return styles
}
