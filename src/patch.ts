import {
  ANode,
  AText,
  AComment,
  ATree,
  ONode,
  OText,
  OComment,
  OTree
} from './vtypes'

function create(aTree: ATree): OTree {
  if (aTree.type === 'node') {
    const node = document.createElement(aTree.tag)
    const data = aTree.data || {}
    Object.keys(data).forEach(key => node.setAttribute(key, data[key]))
    const children = aTree.children.map(create)
    children.forEach(sTree => node.appendChild(sTree.node))
    return {...aTree, data, children, node}
  } else if (aTree.type === 'text') {
    const node = document.createTextNode(aTree.data)
    return {...aTree, node}
  } else if (aTree.type === 'comment') {
    const node = document.createComment(aTree.data)
    return {...aTree, node}
  } else {
    return assertNever()
  }
}

function updateChildren(
  node: Node,
  oldChlds: OTree[],
  newChlds: ATree[]
): OTree[] {
  var oldStartIdx = 0
  var oldEndIdx = oldChlds.length - 1
  var oldStartTree = oldChlds[oldStartIdx]
  var oldEndTree = oldChlds[oldEndIdx]
  var newStartIdx = 0
  var newEndIdx = newChlds.length - 1
  var newStartTree = newChlds[newStartIdx]
  var newEndTree = newChlds[newEndIdx]
  var oldKeyToIdx: Record<string, number> | undefined
  const children: OTree[] = []
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isSame(oldStartTree, newStartTree)) {
      children[newStartIdx] = update(oldStartTree, newStartTree)
      oldStartTree = oldChlds[++oldStartIdx]
      newStartTree = newChlds[++newStartIdx]
    } else if (isSame(oldEndTree, newEndTree)) {
      children[newEndIdx] = update(oldEndTree, newEndTree)
      oldEndTree = oldChlds[--oldEndIdx]
      newEndTree = newChlds[--newEndIdx]
    } else if (isSame(oldStartTree, newEndTree)) {
      // Vnode moved right
      children[newEndIdx] = update(oldStartTree, newEndTree)
      node.insertBefore(oldStartTree.node, oldEndTree.node.nextSibling)
      oldStartTree = oldChlds[++oldStartIdx]
      newEndTree = newChlds[--newEndIdx]
    } else if (isSame(oldEndTree, newStartTree)) {
      // Vnode moved left
      children[newStartIdx] = update(oldEndTree, newStartTree)
      node.insertBefore(oldEndTree.node, oldStartTree.node)
      oldEndTree = oldChlds[--oldEndIdx]
      newStartTree = newChlds[++newStartIdx]
    } else {
      if (newStartTree.type === 'node' && newStartTree.key) {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldChlds, oldStartIdx, oldEndIdx)
        }
        const idxInOld: number | undefined = oldKeyToIdx[newStartTree.key]
        if (!idxInOld) {
          const sTree = create(newStartTree)
          node.insertBefore(sTree.node, oldStartTree.node)
          children[newStartIdx] = sTree
          newStartTree = newChlds[++newStartIdx]
        } else {
        }
      }
      // idxInOld = oldKeyToIdx[newStartVnode.key as string];
      // if (isUndef(idxInOld)) { // New element
      //   api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm as Node);
      //   newStartVnode = newCh[++newStartIdx];
      // } else {
      //   elmToMove = oldCh[idxInOld];
      //   if (elmToMove.sel !== newStartVnode.sel) {
      //     api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm as Node);
      //   } else {
      //     patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
      //     oldCh[idxInOld] = undefined as any;
      //     api.insertBefore(parentElm, (elmToMove.elm as Node), oldStartVnode.elm as Node);
      //   }
      //   newStartVnode = newCh[++newStartIdx];
      // }
    }
  }
  return children
}

function createKeyToOldIdx(
  children: Array<OTree>,
  beginIdx: number,
  endIdx: number
): Record<string, number> {
  let i: number,
    map: Record<string, number> = {},
    ch: OTree
  for (i = beginIdx; i <= endIdx; ++i) {
    ch = children[i]
    if (ch.type === 'node' && ch.key) {
      map[ch.key] = i
    }
  }
  return map
}

function update(oTree: OTree, aTree: ATree): OTree {
  return oTree.type === 'node'
    ? updateNode(oTree, aTree as ANode)
    : oTree.type === 'text'
      ? updateText(oTree, aTree as AText)
      : updateComment(oTree, aTree as AComment)
}

function updateNode(oNode: ONode, aNode: ANode): ONode {
  const oldData = oNode.data
  const newData = aNode.data || {}
  const oldChildren = oNode.children
  const newChildren = aNode.children
  const node = oNode.node
  for (var key in oldData)
    if (typeof newData[key] === 'undefined') node.removeAttribute(key)
  for (var key in newData)
    if (oldData[key] !== newData[key]) node.setAttribute(key, newData[key])

  var children: OTree[]
  if (oldChildren.length && newChildren.length) {
    children = updateChildren(node, oldChildren, newChildren)
  } else if (newChildren.length) {
    children = newChildren.map(create)
    children.forEach(nTree => node.insertBefore(nTree.node, null))
  } else if (oldChildren.length) {
    children = []
    oldChildren.forEach(oTree => node.removeChild(oTree.node))
  } else {
    children = []
  }
  return {
    ...aNode,
    data: newData,
    children,
    node: oNode.node
  }
}

function updateText(oText: OText, aText: AText): OText {
  const node = oText.node
  const nText = aText.data
  if (node.textContent === nText) return oText
  node.textContent = nText
  return {...aText, node}
}
function updateComment(oComment: OComment, aComment: AComment): OComment {
  const node = oComment.node
  const nText = aComment.data
  if (node.textContent === nText) return oComment
  node.textContent = aComment.data
  return {...aComment, node}
}

function patch(oTree: OTree, aTree: ATree): OTree {
  if (oTree === aTree) {
    return oTree
  } else if (isSame(oTree, aTree)) {
    return update(oTree, aTree)
  } else {
    const sTree = create(aTree)
    const oNode = oTree.node
    const aNode = sTree.node
    const parentNode = oNode.parentNode
    parentNode && parentNode.insertBefore(aNode, oNode.nextSibling)
    return sTree
  }
}

const rootNode = document.getElementById('root-node')
if (!rootNode) throw new Error('cant find node')

// rootNode.setAttribute('style', 'width: 100px;')
// rootNode.innerHTML =
//   '<h1 onclick="alert(\'a\')" style="color: blue;">hello</h1>'

const oldTree = oTree(rootNode)
const newTree = {
  type: 'node',
  tag: 'div',
  // key: 'a',
  data: {
    id: 'gj',
    class: 'zmuki',
    style: 'height: 600px; width: 800px; background-color: #CFF;'
  },
  children: [
    {type: 'text', data: 'hello'},
    {
      type: 'node',
      tag: 'h1',
      data: {style: 'color: blue;'},
      children: [{type: 'text', data: 'hello'}]
    }
  ]
} as ANode

console.log(oldTree, patch(oldTree, newTree))

// const p1 = patch(oldTree, {type: 'text', data: 'hello'})
// setTimeout(() => {
//   const p2 = patch(p1, {type: 'text', data: 'hello!!!'})
//   setTimeout(() => {
//     const p3 = patch(p2, newTree)
//   }, 3000)
// }, 3000)

function oTree(node: Node): OTree {
  if (isElement(node)) {
    const tag = node.tagName.toLowerCase()
    const data: Record<string, string> = {}
    const children: Array<OTree> = []
    const elmAttrs = node.attributes
    const elmChildren = node.childNodes
    for (var i = 0, n = elmAttrs.length; i < n; i++) {
      const value = elmAttrs[i].nodeValue
      if (value) data[elmAttrs[i].nodeName] = value
    }
    for (var i = 0, n = elmChildren.length; i < n; i++) {
      children.push(oTree(elmChildren[i]))
    }
    return {type: 'node', tag, data, children, node}
  } else if (isText(node)) {
    return {type: 'text', data: node.textContent || '', node}
  } else if (isComment(node)) {
    return {type: 'comment', data: node.textContent || '', node}
  } else {
    return assertNever()
  }
}

function isSame(oTree: OTree, aTree: ATree): boolean {
  if (oTree.type === 'node' && aTree.type === 'node') {
    return oTree.tag === aTree.tag && oTree.key === aTree.key
  } else {
    return oTree.type === aTree.type
  }
}

function sameNode(oNode: ONode, aNode: ANode) {
  return oNode.tag === aNode.tag && oNode.key === aNode.key
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
