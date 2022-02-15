import ListNode from './ListNode';

export default class LinkedList {
    length: number;
    head: ListNode;

    constructor(numbers: number[] = []) {
        this.length = numbers.length;

        this.head = {
            value: numbers[0],
            next: null
        };

        if (numbers.length > 0) {
            let next = this.head;
            for (let i = 1; i < numbers.length; i++) {
                next.next = {
                    value: numbers[i],
                    next: null
                }
                
                next = next.next;
            }
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    appendToTail(value: number) {
        let current = this.head;

        if (current !== null) {
            while (current.next !== null) {
                current = current.next;
            }

            current.next = {
                value,
                next: null
            };

            this.length += 1;
        }
    }

    insertAtFront(value: number) {
        const currentHead = this.head ? { value: this.head.value, next: this.head.next } : null;

        this.head = {
            value,
            next: currentHead
        };

        this.length += 1;
    }

    toArray() {
        const result = [];

        let current = this.head ? this.head : null;

        while (current !== null) {
            if (current.value) {
                result.push(current.value);
            }
            current = current?.next;
        }

        return result;
    }
}
