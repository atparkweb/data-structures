import AbstractCollection from "@project/Abstract/Collection";

export interface Node<T> {
    value: T,
    next: Node<T> | null
}

export default class LinkedList<T> implements AbstractCollection<T> {
    length: number;
    head: Node<T> | null;
    tail: Node<T> | null;

    constructor(items: Array<T> = []) {
        this.length = 0;
        this.head = null;
        this.tail = null;

        for (let i = 0; i < items.length; i++) {
            this.appendToTail(items[i]);
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    private incrementLength() {
        this.length += 1;
    }

    private decrementLength() {
        this.length -= 1;
    }

    appendToTail(value: T) {
        const newNode: Node<T> = {
            value,
            next: null
        };

        if (!this.head) {
            this.head = newNode;
        }

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.incrementLength();

        return newNode;
    }

    insertAtFront(value: T) {
        const currentHead = this.head ? { value: this.head.value, next: this.head.next } : null;

        this.head = {
            value,
            next: currentHead
        };

        this.incrementLength();
    }

    search(value: T) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    removeAt(position: number) {
        let current = this.head;
        let previous = current;
        let index = 0;

        while (current !== null) {

            if (index === position) {
                break;
            }

            previous = current;
            current = current.next;
            index += 1;
        }
        if (current === null || previous === null) return;

        previous.next = current.next;

        // update the tail if the last node was removed
        if (index === this.length - 1) {
            this.tail = previous;
        }

        this.decrementLength();
    }

    insertAt(position: number, value: T) {
        if (position > this.length || position < 0) throw new Error('Position out of bounds');

        if (position === this.length) {
            this.appendToTail(value);
            return;
        }

        let current = this.head;
        let previous = current;

        let index = 0;

        while (current !== null) {
            if (index === position) {
                const newNode = {
                    value,
                    next: current
                };

                if (previous !== null) {
                    previous.next = newNode;
                }
                this.incrementLength();
                break;
            }

            index += 1;
            previous = current;
            current = current.next;
        }

        if (this.head === null) {
            this.head = {
                value,
                next: null
            };
            this.incrementLength();
        }
    }

    toArray() {
        const result = [];

        let current = this.head;

        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }
}
