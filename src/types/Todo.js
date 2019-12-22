export default class Todo {
  constructor(task, completed, id) {
    if (task) this._task = task;
    this._completed = !!completed;
    if (!id) this._id = Date.now();
  }
  get task() {
    return this._task;
  }
  get completed() {
    return this._completed;
  }
  get id() {
    return this._id;
  }
}
