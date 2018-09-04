export function runTask(task) {
  try {
    task.run();
  } catch (err) {
    task.error(err);
  }
}
export function defer(task$$1) {
  return Promise.resolve(task$$1).then(runTask);
}