// @flow
export function isHTMLElement(node: Element): ?HTMLElement {
  // $FlowFixMe
  if (node.style != null) return (node: any)
}

export function isElement(node: Node): ?Element {
  // $FlowFixMe
  if (node.nodeType === 1) return (node: any)
}

export function isText(node: Node): ?Text {
  // $FlowFixMe
  if (node.nodeType === 3) return (node: any)
}

export function isComment(node: Node): ?Comment {
  // $FlowFixMe
  if (node.nodeType === 8) return (node: any)
}
