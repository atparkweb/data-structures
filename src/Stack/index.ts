import Collection from "@project/Collection";

export default class Stack<T> implements Collection {
  private array: Array<T>;

  constructor(items: Array<T> = []) {
    this.array = items;
  }
  pop() {}
  push() {}
  peek() {}
  isEmpty() {}
  toArray() {
    return [...this.array];
  }
}