import Collection from '@project/Collection';

export default class Queue<T> implements Collection {
    private _items: Array<T>;
    private _frontIndex: number;
    private _rearIndex: number;
    private _maxSize: number;

    constructor(items: Array<T> = [], maxSize = 10) {
        this._items = items;
        this._frontIndex = 0;
        this._rearIndex = items.length;
        this._maxSize = Math.max(items.length, maxSize);
    }

    public get frontIndex() {
        return this._frontIndex;
    }

    public get rearIndex() {
        return this._rearIndex;
    }

    toArray() {
        return this._items;
    }

    peek() {
        return this._items[this._frontIndex];
    }

    enqueue(value: T) {
        if (this._items.length < this._maxSize) {
            this._items[this._rearIndex] = value;
            this._rearIndex = (this._rearIndex + 1) % this._maxSize;
        }
    }
}
