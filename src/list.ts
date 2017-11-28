type List = null | {head: string | number; tail: List}

const cons = (head: string | number, tail: List): List => ({head, tail})

const endsWith = (f: List, s: List): boolean => {
  return s === null || f === s || (f !== null && endsWith(f.tail, s))
}

const toArray = (l: List): (string | number)[] =>
  l === null ? [] : [...toArray(l.tail), l.head]

export {cons, endsWith, toArray, List}
