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

    it('should be able to appendToTail', () => {
      list.appendToTail(9)
      expect(list.toArray()).toEqual([9]);
      list.appendToTail(16)
      expect(list.toArray()).toEqual([9, 16]);
      list.appendToTail(25)
      expect(list.toArray()).toEqual([9, 16, 25]);
    });

    it('should update length after insert', () => {
      expect(list.length).toEqual(0);
      list.appendToTail(1);
      expect(list.length).toEqual(1);
      list.appendToTail(2);
      expect(list.length).toEqual(2);
    });
  });

  describe('insertAtFront', () => {
    it('should be defined', () => {
      expect(list.insertAtFront).toBeDefined();
    });

    it('should add node to front', () => {
      list.insertAtFront(5);
      expect(list.toArray()).toEqual([5]);
      list.insertAtFront(3);
      expect(list.toArray()).toEqual([3, 5]);
    });

    it('should update length after insert', () => {
      expect(list.length).toEqual(0);
      list.insertAtFront(1);
      expect(list.length).toEqual(1);
      list.insertAtFront(2);
      expect(list.length).toEqual(2);
    });
  });

  describe('insertAt', () => {
    it.skip('should be defined', () => {
    });

    it.skip('should throw error when out of bounds', () => {
    });

    it.skip('should insert value at position', () => {
    });
  });
});
