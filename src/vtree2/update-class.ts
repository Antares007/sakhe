import {VNode} from './types'

export function updateClass(formerVNode: VNode<any>, vNode: VNode<any>): void {
  const { data: { class: formerClass = {} }, node: formerElement } = formerVNode
  const { data: { class: klass = {} }, node: element } = vNode

  if (formerClass === klass) return

  for (const name in formerClass)
    if (!klass[name])
      formerElement.classList.remove(name)

  for (const name in klass)
    if (klass[name] !== formerClass[name])
      element.classList.toggle(name)
}
