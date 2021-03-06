export const NAMESPACE_URIS = {
  xlink: 'http://www.w3.org/1999/xlink'
}

export const booleanAttributes = [
  'allowfullscreen',
  'async',
  'autofocus',
  'autoplay',
  'checked',
  'compact',
  'controls',
  'declare',
  'default',
  'defaultchecked',
  'defaultmuted',
  'defaultselected',
  'defer',
  'disabled',
  'draggable',
  'enabled',
  'formnovalidate',
  'hidden',
  'indeterminate',
  'inert',
  'ismap',
  'itemscope',
  'loop',
  'multiple',
  'muted',
  'nohref',
  'noresize',
  'noshade',
  'novalidate',
  'nowrap',
  'open',
  'pauseonexit',
  'readonly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  'selected',
  'sortable',
  'spellcheck',
  'translate',
  'truespeed',
  'typemustmatch',
  'visible'
].reduce((s, k) => {
  s[k] = true
  return s
}, {})
