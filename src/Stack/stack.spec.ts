import Stack from '.';

describe('Stack', () => {
  let stack1: Stack;

  beforeEach(() => {
    stack1 = new Stack();
  });

  it('should be defined', () => {
    expect(Stack).toBeDefined();
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