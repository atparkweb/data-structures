import AbstractCollection from "@project/Abstract/Collection";

export default class Stack<T> implements AbstractCollection<T> {
    private array: Array<T>;

    constructor(items: Array<T> = []) {
        this.array = items;
    }

    pop() {
        return this.array.pop();
    }

    push(value: T) {
        this.array.push(value);
        return this;
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    isEmpty() {
        return this.array.length === 0;
    }

    toArray() {
        return [...this.array];
    }
}
