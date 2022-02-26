import Collection from '@project/Collection';

export default class Queue<T> implements Collection {
    private items;

    constructor(items: Array<T> = []) {
        this.items = items;
    }

    toArray() {
        return this.items;
    }
}
