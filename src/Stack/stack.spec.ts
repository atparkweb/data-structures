import Stack from '.';

describe('Stack', () => {
  let stack1: Stack<any>,
    stack2: Stack<any>;

  beforeEach(() => {
    stack1 = new Stack();
    stack2 = new Stack([1, 2, 3, 4, 5, 6]);
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

  describe('isEmpty', () => {
    it('should be defined', () => {
      expect(stack1.isEmpty).toBeDefined();
    });

    it('should return true for empty stacks', () => {
      expect(stack1.isEmpty()).toEqual(true);
    });

    it('should return false for stack with items', () => {
      const stack = new Stack([1, 10, 100, 1000]);
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('pop', () => {
    it('should be defined', () => {
      expect(stack1.pop).toBeDefined();
      expect(stack1.pop).toBeInstanceOf(Function);
    });

    it('should remove and return the "top" item', () => {
      const stack = new Stack(["a", "b", "c", "d", "e"]);
      expect(stack.pop()).toEqual("e");
      expect(stack.pop()).toEqual("d");
    });

    it('should alter the array in place', () => {
      const stack = new Stack([1, 2, 3]);
      stack.pop();
      expect(stack.toArray()).toEqual([1, 2]);
    });
  });

  describe('push', () => {
    it('should be defined', () => {
      expect(stack1.push).toBeDefined();
      expect(stack1.push).toBeInstanceOf(Function);
    });

    it('should add items to the "top" of the array', () => {
      stack1.push(1);
      expect(stack1.toArray()).toEqual([1]);
    });

    it('should return the stack', () => {
      expect(stack1.push(100)).toBeInstanceOf(Stack);
      expect(stack1.push(100)).toEqual(stack1);
    });
  });

  describe('peek', () => {
    it('should be defined', () => {
      expect(stack1.peek).toBeDefined();
      expect(stack1.peek).toBeInstanceOf(Function);
    });

    it('should return the top element', () => {
      expect(stack2.peek()).toEqual(6);
    });

    it('should not alter the stack', () => {
      stack2.peek();
      expect(stack2.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});