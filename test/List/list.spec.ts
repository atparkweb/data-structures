import LinkedList from '../../src/List/LinkedList';

describe('List ADT', () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should be a constructor', () => {
    expect(typeof LinkedList).toEqual('function');
  });

  it('should be able to check if empty', () => {
    expect(list.isEmpty()).toBe(true);
  });

  describe('toArray', () => {
    it('should be able to change to array', () => {
      const newList = new LinkedList([10, 8]);
      expect(newList.toArray()).toEqual([10, 8]);
    });

    it('should be able to create from an array', () => {
      const newList = new LinkedList([1, 4, 9, 16]);
      expect(newList.head.value).toEqual(1);
      expect(newList.toArray()).toEqual([1, 4, 9, 16]);
    });
  });

  describe('appendToTail', () => {
    it('should be defined', () => {
      expect(list.appendToTail).toBeDefined();
    });
  });
});
