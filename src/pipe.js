export default function pipe (...fns) {
  return a => fns.reduce((b, fn) => fn(b), a)
}
