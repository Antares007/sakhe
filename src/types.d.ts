interface VElement {
  className: string
  id: string
  innerHTML: string
  msContentZoomFactor: number
  outerHTML: string
  scrollLeft: number
  scrollTop: number
  slot: string
}
interface VHTMLAnchorElement extends VHTMLElement {
  charset: string
  coords: string
  download: string
  hash: string
  host: string
  hostname: string
  href: string
  hreflang: string
  Methods: string
  name: string
  pathname: string
  port: string
  protocol: string
  rel: string
  rev: string
  search: string
  shape: string
  target: string
  text: string
  type: string
  urn: string
}
interface VHTMLAppletElement extends VHTMLElement {
  align: string
  alt: string
  altHtml: string
  archive: string
  border: string
  code: string
  codeBase: string
  codeType: string
  data: string
  declare: boolean
  height: string
  hspace: number
  name: string
  object: string | null
  standby: string
  type: string
  useMap: string
  vspace: number
  width: number
}
interface VHTMLAreaElement extends VHTMLElement {
  alt: string
  coords: string
  download: string
  hash: string
  host: string
  hostname: string
  href: string
  noHref: boolean
  pathname: string
  port: string
  protocol: string
  rel: string
  search: string
  shape: string
  target: string
}
interface VHTMLAudioElement extends VHTMLMediaElement {}
interface VHTMLBaseElement extends VHTMLElement {
  href: string
  target: string
}
interface VHTMLBaseFontElement extends VHTMLElement {
  face: string
  size: number
}
interface VHTMLBodyElement extends VHTMLElement {
  aLink: any
  background: string
  bgColor: any
  bgProperties: string
  link: any
  noWrap: boolean
  text: any
  vLink: any
}
interface VHTMLBRElement extends VHTMLElement {
  clear: string
}
interface VHTMLButtonElement extends VHTMLElement {
  autofocus: boolean
  disabled: boolean
  formAction: string
  formEnctype: string
  formMethod: string
  formNoValidate: string
  formTarget: string
  name: string
  status: any
  type: string
  value: string
}
interface VHTMLCanvasElement extends VHTMLElement {
  height: number
  width: number
}
interface VHTMLDataElement extends VHTMLElement {
  value: string
}
interface VHTMLDataListElement extends VHTMLElement {
  options: HTMLCollectionOf<HTMLOptionElement>
}
interface VHTMLDirectoryElement extends VHTMLElement {
  compact: boolean
}
interface VHTMLDivElement extends VHTMLElement {
  align: string
  noWrap: boolean
}
interface VHTMLDListElement extends VHTMLElement {
  compact: boolean
}
interface VHTMLElement extends VElement {
  accessKey: string
  contentEditable: string
  dir: string
  draggable: boolean
  hidden: boolean
  hideFocus: boolean
  innerText: string
  lang: string
  outerText: string
  spellcheck: boolean
  tabIndex: number
  title: string
}
interface VHTMLEmbedElement extends VHTMLElement {
  height: string
  hidden: any
  msPlayToDisabled: boolean
  msPlayToPreferredSourceUri: string
  msPlayToPrimary: boolean
  name: string
  src: string
  units: string
  width: string
}
interface VHTMLFieldSetElement extends VHTMLElement {
  align: string
  disabled: boolean
  name: string
}
interface VHTMLFontElement extends VHTMLElement {
  face: string
}
interface VHTMLFormElement extends VHTMLElement {
  acceptCharset: string
  action: string
  autocomplete: string
  encoding: string
  enctype: string
  method: string
  name: string
  noValidate: boolean
  target: string
}
interface VHTMLFrameElement extends VHTMLElement {
  border: string
  borderColor: any
  frameBorder: string
  frameSpacing: any
  height: string | number
  longDesc: string
  marginHeight: string
  marginWidth: string
  name: string
  noResize: boolean
  scrolling: string
  src: string
  width: string | number
}
interface VHTMLFrameSetElement extends VHTMLElement {
  border: string
  borderColor: any
  cols: string
  frameBorder: string
  frameSpacing: any
  name: string
  rows: string
}
interface VHTMLHeadElement extends VHTMLElement {
  profile: string
}
interface VHTMLHeadingElement extends VHTMLElement {
  align: string
}
interface VHTMLHRElement extends VHTMLElement {
  align: string
  noShade: boolean
  width: number
}
interface VHTMLHtmlElement extends VHTMLElement {
  version: string
}
interface VHTMLIFrameElement extends VHTMLElement {
  align: string
  allowFullscreen: boolean
  allowPaymentRequest: boolean
  border: string
  frameBorder: string
  frameSpacing: any
  height: string
  hspace: number
  longDesc: string
  marginHeight: string
  marginWidth: string
  name: string
  noResize: boolean
  scrolling: string
  src: string
  vspace: number
  width: string
}
interface VHTMLImageElement extends VHTMLElement {
  align: string
  alt: string
  border: string
  crossOrigin: string | null
  height: number
  hspace: number
  isMap: boolean
  longDesc: string
  lowsrc: string
  msPlayToDisabled: boolean
  msPlayToPreferredSourceUri: string
  msPlayToPrimary: boolean
  name: string
  sizes: string
  src: string
  srcset: string
  useMap: string
  vspace: number
  width: number
}
interface VHTMLInputElement extends VHTMLElement {
  accept: string
  align: string
  alt: string
  autocomplete: string
  autofocus: boolean
  border: string
  checked: boolean
  defaultChecked: boolean
  defaultValue: string
  disabled: boolean
  formAction: string
  formEnctype: string
  formMethod: string
  formNoValidate: string
  formTarget: string
  height: string
  hspace: number
  indeterminate: boolean
  max: string
  maxLength: number
  min: string
  multiple: boolean
  name: string
  pattern: string
  placeholder: string
  readOnly: boolean
  required: boolean
  selectionDirection: string
  selectionEnd: number
  selectionStart: number
  size: number
  src: string
  status: boolean
  step: string
  type: string
  useMap: string
  value: string
  valueAsDate: Date
  valueAsNumber: number
  vspace: number
  webkitdirectory: boolean
  width: string
  minLength: number
}
interface VHTMLLabelElement extends VHTMLElement {
  htmlFor: string
}
interface VHTMLLegendElement extends VHTMLElement {
  align: string
}
interface VHTMLLIElement extends VHTMLElement {
  type: string
  value: number
}
interface VHTMLLinkElement extends VHTMLElement {
  charset: string
  disabled: boolean
  href: string
  hreflang: string
  media: string
  rel: string
  rev: string
  target: string
  type: string
  import: Document
  integrity: string
}
interface VHTMLMapElement extends VHTMLElement {
  name: string
}
interface VHTMLMarqueeElement extends VHTMLElement {
  behavior: string
  bgColor: any
  direction: string
  height: string
  hspace: number
  loop: number
  scrollAmount: number
  scrollDelay: number
  trueSpeed: boolean
  vspace: number
  width: string
}
interface VHTMLMediaElement extends VHTMLElement {
  autoplay: boolean
  controls: boolean
  crossOrigin: string | null
  currentTime: number
  defaultMuted: boolean
  defaultPlaybackRate: number
  loop: boolean
  msAudioCategory: string
  msAudioDeviceType: string
  msPlayToDisabled: boolean
  msPlayToPreferredSourceUri: string
  msPlayToPrimary: boolean
  msRealTime: boolean
  muted: boolean
  playbackRate: number
  preload: string
  readyState: number
  src: string
  srcObject: MediaStream | null
  volume: number
}
interface VHTMLMenuElement extends VHTMLElement {
  compact: boolean
  type: string
}
interface VHTMLMetaElement extends VHTMLElement {
  charset: string
  content: string
  httpEquiv: string
  name: string
  scheme: string
  url: string
}
interface VHTMLMeterElement extends VHTMLElement {
  high: number
  low: number
  max: number
  min: number
  optimum: number
  value: number
}
interface VHTMLModElement extends VHTMLElement {
  cite: string
  dateTime: string
}
interface VHTMLObjectElement extends VHTMLElement {
  align: string
  alt: string
  altHtml: string
  archive: string
  border: string
  code: string
  codeBase: string
  codeType: string
  data: string
  declare: boolean
  height: string
  hspace: number
  msPlayToDisabled: boolean
  msPlayToPreferredSourceUri: string
  msPlayToPrimary: boolean
  name: string
  standby: string
  type: string
  useMap: string
  vspace: number
  width: string
}
interface VHTMLOListElement extends VHTMLElement {
  compact: boolean
  start: number
  type: string
}
interface VHTMLOptGroupElement extends VHTMLElement {
  defaultSelected: boolean
  disabled: boolean
  label: string
  selected: boolean
  value: string
}
interface VHTMLOptionElement extends VHTMLElement {
  defaultSelected: boolean
  disabled: boolean
  label: string
  selected: boolean
  text: string
  value: string
}
interface VHTMLOutputElement extends VHTMLElement {
  defaultValue: string
  name: string
  value: string
}
interface VHTMLParagraphElement extends VHTMLElement {
  align: string
  clear: string
}
interface VHTMLParamElement extends VHTMLElement {
  name: string
  type: string
  value: string
  valueType: string
}
interface VHTMLPictureElement extends VHTMLElement {}
interface VHTMLPreElement extends VHTMLElement {
  width: number
}
interface VHTMLProgressElement extends VHTMLElement {
  max: number
  value: number
}
interface VHTMLQuoteElement extends VHTMLElement {
  cite: string
}
interface VHTMLScriptElement extends VHTMLElement {
  async: boolean
  charset: string
  crossOrigin: string | null
  defer: boolean
  event: string
  htmlFor: string
  src: string
  text: string
  type: string
  integrity: string
}
interface VHTMLSelectElement extends VHTMLElement {
  autofocus: boolean
  disabled: boolean
  length: number
  multiple: boolean
  name: string
  required: boolean
  selectedIndex: number
  selectedOptions: HTMLCollectionOf<HTMLOptionElement>
  size: number
  value: string
}
interface VHTMLSourceElement extends VHTMLElement {
  media: string
  msKeySystem: string
  sizes: string
  src: string
  srcset: string
  type: string
}
interface VHTMLSpanElement extends VHTMLElement {}
interface VHTMLStyleElement extends VHTMLElement {
  disabled: boolean
  media: string
  type: string
}
interface VHTMLTableCaptionElement extends VHTMLElement {
  align: string
  vAlign: string
}
interface VHTMLTableCellElement extends VHTMLElement {
  abbr: string
  align: string
  axis: string
  bgColor: any
  colSpan: number
  headers: string
  height: any
  noWrap: boolean
  rowSpan: number
  scope: string
  width: string
}
interface VHTMLTableColElement extends VHTMLElement {
  align: string
  span: number
  width: any
}
interface VHTMLTableDataCellElement extends VHTMLTableCellElement {}
interface VHTMLTableElement extends VHTMLElement {
  align: string
  bgColor: any
  border: string
  borderColor: any
  caption: HTMLTableCaptionElement
  cellPadding: string
  cellSpacing: string
  cols: number
  frame: string
  height: any
  rows: HTMLCollectionOf<HTMLTableRowElement>
  rules: string
  summary: string
  tBodies: HTMLCollectionOf<HTMLTableSectionElement>
  tFoot: HTMLTableSectionElement
  tHead: HTMLTableSectionElement
  width: string
}
interface VHTMLTableHeaderCellElement extends VHTMLTableCellElement {
  scope: string
}
interface VHTMLTableRowElement extends VHTMLElement {
  align: string
  bgColor: any
  cells: HTMLCollectionOf<HTMLTableDataCellElement | HTMLTableHeaderCellElement>
  height: any
}
interface VHTMLTableSectionElement extends VHTMLElement {
  align: string
  rows: HTMLCollectionOf<HTMLTableRowElement>
}
interface VHTMLTemplateElement extends VHTMLElement {}
interface VHTMLTextAreaElement extends VHTMLElement {
  autofocus: boolean
  cols: number
  defaultValue: string
  disabled: boolean
  maxLength: number
  name: string
  placeholder: string
  readOnly: boolean
  required: boolean
  rows: number
  selectionEnd: number
  selectionStart: number
  status: any
  value: string
  wrap: string
  minLength: number
}
interface VHTMLTimeElement extends VHTMLElement {
  dateTime: string
}
interface VHTMLTitleElement extends VHTMLElement {
  text: string
}
interface VHTMLTrackElement extends VHTMLElement {
  default: boolean
  kind: string
  label: string
  src: string
  srclang: string
}
interface VHTMLUListElement extends VHTMLElement {
  compact: boolean
  type: string
}
interface VHTMLUnknownElement extends VHTMLElement {}
interface VHTMLVideoElement extends VHTMLMediaElement {
  height: number
  msHorizontalMirror: boolean
  msStereo3DPackingMode: string
  msStereo3DRenderMode: string
  msZoom: boolean
  poster: string
  width: number
}
interface VMSHTMLWebViewElement extends VHTMLElement {
  height: number
  src: string
  width: number
}
interface VSVGAElement extends VSVGGraphicsElement {}
interface VSVGCircleElement extends VSVGGraphicsElement {}
interface VSVGClipPathElement extends VSVGGraphicsElement {}
interface VSVGComponentTransferFunctionElement extends VSVGElement {}
interface VSVGDefsElement extends VSVGGraphicsElement {}
interface VSVGDescElement extends VSVGElement {}
interface VSVGElement extends VElement {
  className: any
  xmlbase: string
}
interface VSVGEllipseElement extends VSVGGraphicsElement {}
interface VSVGFEBlendElement extends VSVGElement {}
interface VSVGFEColorMatrixElement extends VSVGElement {}
interface VSVGFEComponentTransferElement extends VSVGElement {}
interface VSVGFECompositeElement extends VSVGElement {}
interface VSVGFEConvolveMatrixElement extends VSVGElement {}
interface VSVGFEDiffuseLightingElement extends VSVGElement {}
interface VSVGFEDisplacementMapElement extends VSVGElement {}
interface VSVGFEDistantLightElement extends VSVGElement {}
interface VSVGFEFloodElement extends VSVGElement {}
interface VSVGFEFuncAElement extends VSVGComponentTransferFunctionElement {}
interface VSVGFEFuncBElement extends VSVGComponentTransferFunctionElement {}
interface VSVGFEFuncGElement extends VSVGComponentTransferFunctionElement {}
interface VSVGFEFuncRElement extends VSVGComponentTransferFunctionElement {}
interface VSVGFEGaussianBlurElement extends VSVGElement {}
interface VSVGFEImageElement extends VSVGElement {}
interface VSVGFEMergeElement extends VSVGElement {}
interface VSVGFEMergeNodeElement extends VSVGElement {}
interface VSVGFEMorphologyElement extends VSVGElement {}
interface VSVGFEOffsetElement extends VSVGElement {}
interface VSVGFEPointLightElement extends VSVGElement {}
interface VSVGFESpecularLightingElement extends VSVGElement {}
interface VSVGFESpotLightElement extends VSVGElement {}
interface VSVGFETileElement extends VSVGElement {}
interface VSVGFETurbulenceElement extends VSVGElement {}
interface VSVGFilterElement extends VSVGElement {}
interface VSVGForeignObjectElement extends VSVGGraphicsElement {}
interface VSVGGElement extends VSVGGraphicsElement {}
interface VSVGGradientElement extends VSVGElement {}
interface VSVGGraphicsElement extends VSVGElement {}
interface VSVGImageElement extends VSVGGraphicsElement {}
interface VSVGLinearGradientElement extends VSVGGradientElement {}
interface VSVGLineElement extends VSVGGraphicsElement {}
interface VSVGMarkerElement extends VSVGElement {}
interface VSVGMaskElement extends VSVGElement {}
interface VSVGMetadataElement extends VSVGElement {}
interface VSVGPathElement extends VSVGGraphicsElement {}
interface VSVGPatternElement extends VSVGElement {}
interface VSVGPolygonElement extends VSVGGraphicsElement {}
interface VSVGPolylineElement extends VSVGGraphicsElement {}
interface VSVGRadialGradientElement extends VSVGGradientElement {}
interface VSVGRectElement extends VSVGGraphicsElement {}
interface VSVGScriptElement extends VSVGElement {
  type: string
}
interface VSVGStopElement extends VSVGElement {}
interface VSVGStyleElement extends VSVGElement {
  disabled: boolean
  media: string
  title: string
  type: string
}
interface VSVGSVGElement extends VSVGGraphicsElement {
  contentScriptType: string
  contentStyleType: string
  currentScale: number
}
interface VSVGSwitchElement extends VSVGGraphicsElement {}
interface VSVGSymbolElement extends VSVGElement {}
interface VSVGTextContentElement extends VSVGGraphicsElement {}
interface VSVGTextElement extends VSVGTextPositioningElement {}
interface VSVGTextPathElement extends VSVGTextContentElement {}
interface VSVGTextPositioningElement extends VSVGTextContentElement {}
interface VSVGTitleElement extends VSVGElement {}
interface VSVGTSpanElement extends VSVGTextPositioningElement {}
interface VSVGUseElement extends VSVGGraphicsElement {}
interface VSVGViewElement extends VSVGElement {}
interface VHTMLSlotElement extends VHTMLElement {
  name: string
}
interface VHTMLDialogElement extends VHTMLElement {
  open: boolean
  returnValue: string
}
interface VHTMLMainElement extends VHTMLElement {}
interface VHTMLDetailsElement extends VHTMLElement {
  open: boolean
}
interface VHTMLSummaryElement extends VHTMLElement {}
interface VHTMLElementTagNameMap {
  "a": VHTMLAnchorElement
  "abbr": VHTMLElement
  "acronym": VHTMLElement
  "address": VHTMLElement
  "applet": VHTMLAppletElement
  "area": VHTMLAreaElement
  "article": VHTMLElement
  "aside": VHTMLElement
  "audio": VHTMLAudioElement
  "b": VHTMLElement
  "base": VHTMLBaseElement
  "basefont": VHTMLBaseFontElement
  "bdo": VHTMLElement
  "big": VHTMLElement
  "blockquote": VHTMLQuoteElement
  "body": VHTMLBodyElement
  "br": VHTMLBRElement
  "button": VHTMLButtonElement
  "canvas": VHTMLCanvasElement
  "caption": VHTMLTableCaptionElement
  "center": VHTMLElement
  "cite": VHTMLElement
  "code": VHTMLElement
  "col": VHTMLTableColElement
  "colgroup": VHTMLTableColElement
  "data": VHTMLDataElement
  "datalist": VHTMLDataListElement
  "dd": VHTMLElement
  "del": VHTMLModElement
  "dfn": VHTMLElement
  "dir": VHTMLDirectoryElement
  "div": VHTMLDivElement
  "dl": VHTMLDListElement
  "dt": VHTMLElement
  "em": VHTMLElement
  "embed": VHTMLEmbedElement
  "fieldset": VHTMLFieldSetElement
  "figcaption": VHTMLElement
  "figure": VHTMLElement
  "font": VHTMLFontElement
  "footer": VHTMLElement
  "form": VHTMLFormElement
  "frame": VHTMLFrameElement
  "frameset": VHTMLFrameSetElement
  "h1": VHTMLHeadingElement
  "h2": VHTMLHeadingElement
  "h3": VHTMLHeadingElement
  "h4": VHTMLHeadingElement
  "h5": VHTMLHeadingElement
  "h6": VHTMLHeadingElement
  "head": VHTMLHeadElement
  "header": VHTMLElement
  "hgroup": VHTMLElement
  "hr": VHTMLHRElement
  "html": VHTMLHtmlElement
  "i": VHTMLElement
  "iframe": VHTMLIFrameElement
  "img": VHTMLImageElement
  "input": VHTMLInputElement
  "ins": VHTMLModElement
  "isindex": VHTMLUnknownElement
  "kbd": VHTMLElement
  "keygen": VHTMLElement
  "label": VHTMLLabelElement
  "legend": VHTMLLegendElement
  "li": VHTMLLIElement
  "link": VHTMLLinkElement
  "listing": VHTMLPreElement
  "map": VHTMLMapElement
  "mark": VHTMLElement
  "marquee": VHTMLMarqueeElement
  "menu": VHTMLMenuElement
  "meta": VHTMLMetaElement
  "meter": VHTMLMeterElement
  "nav": VHTMLElement
  "nextid": VHTMLUnknownElement
  "nobr": VHTMLElement
  "noframes": VHTMLElement
  "noscript": VHTMLElement
  "object": VHTMLObjectElement
  "ol": VHTMLOListElement
  "optgroup": VHTMLOptGroupElement
  "option": VHTMLOptionElement
  "output": VHTMLOutputElement
  "p": VHTMLParagraphElement
  "param": VHTMLParamElement
  "picture": VHTMLPictureElement
  "plaintext": VHTMLElement
  "pre": VHTMLPreElement
  "progress": VHTMLProgressElement
  "q": VHTMLQuoteElement
  "rt": VHTMLElement
  "ruby": VHTMLElement
  "s": VHTMLElement
  "samp": VHTMLElement
  "script": VHTMLScriptElement
  "section": VHTMLElement
  "select": VHTMLSelectElement
  "small": VHTMLElement
  "source": VHTMLSourceElement
  "span": VHTMLSpanElement
  "strike": VHTMLElement
  "strong": VHTMLElement
  "style": VHTMLStyleElement
  "sub": VHTMLElement
  "sup": VHTMLElement
  "table": VHTMLTableElement
  "tbody": VHTMLTableSectionElement
  "td": VHTMLTableDataCellElement
  "template": VHTMLTemplateElement
  "textarea": VHTMLTextAreaElement
  "tfoot": VHTMLTableSectionElement
  "th": VHTMLTableHeaderCellElement
  "thead": VHTMLTableSectionElement
  "time": VHTMLTimeElement
  "title": VHTMLTitleElement
  "tr": VHTMLTableRowElement
  "track": VHTMLTrackElement
  "tt": VHTMLElement
  "u": VHTMLElement
  "ul": VHTMLUListElement
  "var": VHTMLElement
  "video": VHTMLVideoElement
  "wbr": VHTMLElement
  "x-ms-webview": VMSHTMLWebViewElement
  "xmp": VHTMLPreElement
}
interface VSVGElementTagNameMap {
  "circle": VSVGCircleElement
  "clippath": VSVGClipPathElement
  "defs": VSVGDefsElement
  "desc": VSVGDescElement
  "ellipse": VSVGEllipseElement
  "feblend": VSVGFEBlendElement
  "fecolormatrix": VSVGFEColorMatrixElement
  "fecomponenttransfer": VSVGFEComponentTransferElement
  "fecomposite": VSVGFECompositeElement
  "feconvolvematrix": VSVGFEConvolveMatrixElement
  "fediffuselighting": VSVGFEDiffuseLightingElement
  "fedisplacementmap": VSVGFEDisplacementMapElement
  "fedistantlight": VSVGFEDistantLightElement
  "feflood": VSVGFEFloodElement
  "fefunca": VSVGFEFuncAElement
  "fefuncb": VSVGFEFuncBElement
  "fefuncg": VSVGFEFuncGElement
  "fefuncr": VSVGFEFuncRElement
  "fegaussianblur": VSVGFEGaussianBlurElement
  "feimage": VSVGFEImageElement
  "femerge": VSVGFEMergeElement
  "femergenode": VSVGFEMergeNodeElement
  "femorphology": VSVGFEMorphologyElement
  "feoffset": VSVGFEOffsetElement
  "fepointlight": VSVGFEPointLightElement
  "fespecularlighting": VSVGFESpecularLightingElement
  "fespotlight": VSVGFESpotLightElement
  "fetile": VSVGFETileElement
  "feturbulence": VSVGFETurbulenceElement
  "filter": VSVGFilterElement
  "foreignobject": VSVGForeignObjectElement
  "g": VSVGGElement
  "image": VSVGImageElement
  "line": VSVGLineElement
  "lineargradient": VSVGLinearGradientElement
  "marker": VSVGMarkerElement
  "mask": VSVGMaskElement
  "metadata": VSVGMetadataElement
  "path": VSVGPathElement
  "pattern": VSVGPatternElement
  "polygon": VSVGPolygonElement
  "polyline": VSVGPolylineElement
  "radialgradient": VSVGRadialGradientElement
  "rect": VSVGRectElement
  "stop": VSVGStopElement
  "svg": VSVGSVGElement
  "switch": VSVGSwitchElement
  "symbol": VSVGSymbolElement
  "text": VSVGTextElement
  "textpath": VSVGTextPathElement
  "tspan": VSVGTSpanElement
  "use": VSVGUseElement
  "view": VSVGViewElement
}
