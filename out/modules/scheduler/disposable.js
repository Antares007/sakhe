export const empty = {
  dispose() {}

};
export function return$0027(f) {
  let disposed = false;
  return {
    dispose() {
      if (!disposed) {
        disposed = true;
        f();
      }
    }

  };
}
export function append(l, r) {
  return return$0027(function () {
    l.dispose();
    r.dispose();
  });
}