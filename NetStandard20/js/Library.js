import { toConsole, printf } from "./fable-core/String.js";
export function hello(name) {
  toConsole(printf("Hello %s"))(name);
}