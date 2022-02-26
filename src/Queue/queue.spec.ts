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

  describe('enqueue', () => {
    it('should be defined', () => {
      expect(queue.enqueue).toBeDefined();
      expect(queue.enqueue).toBeInstanceOf(Function);
    });
  });
});
