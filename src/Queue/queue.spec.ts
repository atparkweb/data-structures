import Queue from '@project/Queue';
import Collection from '@project/Collection';

describe.only('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it('should exist', () => {
        expect(Queue).toBeDefined();
        expect(Queue).toBeInstanceOf(Function);
    });
});
