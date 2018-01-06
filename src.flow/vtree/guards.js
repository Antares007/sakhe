// @flow
export function isHTMLElement(node: Element): ?HTMLElement {
  if (node.style != null) return (node: any)
}

export function isElement(node: Node): ?Element {
  if (node.nodeType === 1) return (node: any)
  return undefined
}

export function isText(node: Node): ?Text {
  if (node.nodeType === 3) return (node: any)
}

export function isComment(node: Node): ?Comment {
  if (node.nodeType === 8) return (node: any)
}
