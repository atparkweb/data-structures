import ListNode from './ListNode';

export default class LinkedList {
    length: number;
    head: ListNode | null;

    constructor(numbers: number[] = []) {
        this.length = numbers.length;
        this.head = null;

        for (let i = 0; i < numbers.length; i++) {
            this.appendToTail(numbers[i]);
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    appendToTail(value: number) {
        if (!this.head) {
            this.head = {
                value,
                next: null
            }
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = {
                value,
                next: null
            };
        }

        this.length += 1;
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

    remove(value: number) {
        let current = this.head;
        let previous = current;

        if (current?.value === value) {
            this.head = current.next;
        }

        while (current !== null) {

            if (current.value === value) {
                break;
            }

            previous = current;
            current = current.next;
        }
        if (current === null || previous === null) return;

        previous.next = current.next;
    }

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
        }
    }

    toArray() {
        const result: Array<number> = [];

        this.traverse((current: ListNode) => {
            result.push(current.value);
        });

        return result;
    }

    traverse(callback: Function) {
        let current  = this.head;
        let previous = null;

        while (current !== null) {
            const breakLoop = callback(current, previous);
            if (breakLoop) break;

            previous = current;
            current = current.next;
        }
    }
}
