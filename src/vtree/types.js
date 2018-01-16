// @flow
export type AllEventTypes =
  | MouseEventTypes
  | FocusEventTypes
  | KeyboardEventTypes
  | TouchEventTypes
  | WheelEventTypes
  | ProgressEventTypes
  | DragEventTypes
  | AnimationEventTypes

export interface Data {
  +attrs?: {[key: string]: string | boolean | number};
  +class?: {[key: string]: boolean};
  +props?: {[key: string]: mixed};
  +style?: {[key: string]: string};
  +on?: {[key: AllEventTypes]: mixed};
}

export interface VNode {
  type: 'node';
  tag: string;
  key: ?string;
  data: Data;
  children: VTree[];
  node: Element;
}

export interface VText {
  type: 'text';
  data: string;
  node: Text;
}

export interface VComment {
  type: 'comment';
  data: string;
  node: Comment;
}

export type VCharacterData = VComment | VText

export type VTree = VNode | VText | VComment
