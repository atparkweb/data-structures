import Stack from '.';

describe('Stack', () => {
  let stack1: Stack<any>;

  beforeEach(() => {
    stack1 = new Stack();
  });

  it('should be defined', () => {
    expect(Stack).toBeDefined();
  });

  describe('toArray', () => {
    it('should be defined', () => {
      expect(stack1.toArray).toBeDefined();
      expect(stack1.toArray).toBeInstanceOf(Function);
    });

    it('should be able to create a stack from an array', () => {
      const stack = new Stack<number>([1, 2, 3]);
      expect(stack.toArray()).toEqual([1,2,3]);
    });

    it('should not allow internal array to change outside', () => {
      const stack = new Stack<number>([4, 5, 6]);
      const arr = stack.toArray();
      arr[0] = 1;
      expect(stack.toArray()).toEqual([4, 5, 6]);
    });
  });

  describe('pop', () => {
    it('should be defined', () => {
      expect(stack1.pop).toBeDefined();
      expect(stack1.pop).toBeInstanceOf(Function);
    });

    it('should remove the "top" item', () => {

    });
  });
});