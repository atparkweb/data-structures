import Collection from '@project/Collection';

export interface ListNode {
  value: number,
  next: ListNode | null
}

export default class LinkedList extends Collection {
    length: number;
    head: ListNode | null;
    tail: ListNode | null;

    constructor(numbers: number[] = []) {
        super();
        this.length = 0;
        this.head = null;
        this.tail = null;

        for (let i = 0; i < numbers.length; i++) {
            const node = this.appendToTail(numbers[i]);

            if (i === numbers.length - 1) {
                this.tail = node;
            }
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    appendToTail(value: number) {
        let newNode;

        if (!this.head) {
            newNode = this.head = {
                value,
                next: null
            };
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            newNode = current.next = {
                value,
                next: null
            };
        }

        this.length += 1;
        return newNode;
    }

    insertAtFront(value: number) {
        const currentHead = this.head ? { value: this.head.value, next: this.head.next } : null;

        this.head = {
            value,
            next: currentHead
        };

        this.length += 1;
    }

    search(value: number) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    // TODO: update tail if last is removed
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
        this.length -= 1;
    }

    // TODO: update tail if inserted at back
    insertAt(position: number, value: number) {
        if (position > this.length || position < 0) throw new Error('Position out of bounds');

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
                this.length += 1;
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
            this.length += 1;
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