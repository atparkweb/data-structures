import Queue from '@project/Queue';

describe.only('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue();
    });

    it('should exist', () => {
        expect(Queue).toBeDefined();
        expect(Queue).toBeInstanceOf(Function);
    });

    it('should create from an array', () => {
        const q = new Queue([1, 2, 3, 4]);
        expect(q.toArray()).toEqual([1, 2, 3, 4]);
    });

    it('should create an empty array by default', () => {
        expect(queue.toArray()).toEqual([]);
    });

    describe('peek', () => {
        it('should be defined', () => {
            expect(queue.peek).toBeDefined();
            expect(queue.peek).toBeInstanceOf(Function);
        });

        it('should return the value at front', () => {
            const q = new Queue(["First", "Second", "Third"]);
            expect(q.peek()).toEqual("First");
        });
    });

    describe('enqueue', () => {
        it('should be defined', () => {
            expect(queue.enqueue).toBeDefined();
            expect(queue.enqueue).toBeInstanceOf(Function);
        });

        it('should items at the front', () => {
            queue.enqueue(4);
            queue.enqueue(100);
            queue.enqueue(42);
            expect(queue.peek()).toEqual(4);
        });

        it('should update the rear index', () => {
            const q = new Queue([1]);
            expect(q.rearIndex).toEqual(1);
            q.enqueue(3);
            expect(q.rearIndex).toEqual(2);
        });

        it('should not add to the queue if it\'s full', () => {
            const q = new Queue([1, 2, 3], 3);
            q.enqueue(4);
            expect(q.rearIndex).toEqual(3);
            expect(q.toArray()).toEqual([1, 2, 3]);
        });
    });
});
