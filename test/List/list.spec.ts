import LinkedList from '../../src/List/LinkedList';

describe('List ADT', () => {
  let list1: LinkedList;
  let list2: LinkedList;

  beforeEach(() => {
    list1 = new LinkedList();
    list2 = new LinkedList([1, 2, 3, 4, 5]);
  });

  it('should be a constructor', () => {
    expect(typeof LinkedList).toEqual('function');
  });

  it('should be able to check if empty', () => {
    expect(list1.isEmpty()).toBe(true);
  });

  describe('toArray', () => {
    it('should be able to change to array', () => {
      const newList = new LinkedList([10, 8]);
      expect(newList.toArray()).toEqual([10, 8]);
    });

    it('should be able to create from an array', () => {
      const newList = new LinkedList([1, 4, 9, 16]);
      expect(newList.head?.value).toEqual(1);
      expect(newList.toArray()).toEqual([1, 4, 9, 16]);
    });
  });

  describe('appendToTail', () => {
    it('should be defined', () => {
      expect(list1.appendToTail).toBeDefined();
    });

    it('should be able to appendToTail', () => {
      list1.appendToTail(9)
      expect(list1.toArray()).toEqual([9]);
      list1.appendToTail(16)
      expect(list1.toArray()).toEqual([9, 16]);
      list1.appendToTail(25)
      expect(list1.toArray()).toEqual([9, 16, 25]);
    });

    it('should update length after insert', () => {
      expect(list1.length).toEqual(0);
      list1.appendToTail(1);
      expect(list1.length).toEqual(1);
      list1.appendToTail(2);
      expect(list1.length).toEqual(2);
    });
  });

  describe('insertAtFront', () => {
    it('should be defined', () => {
      expect(list1.insertAtFront).toBeDefined();
    });

    it('should add node to front', () => {
      list1.insertAtFront(5);
      expect(list1.toArray()).toEqual([5]);
      list1.insertAtFront(3);
      expect(list1.toArray()).toEqual([3, 5]);
    });

    it('should update length after insert', () => {
      expect(list1.length).toEqual(0);
      list1.insertAtFront(1);
      expect(list1.length).toEqual(1);
      list1.insertAtFront(2);
      expect(list1.length).toEqual(2);
    });
  });

  describe('remove', () => {
    it('should exist', () => {
      expect(list2.remove).toBeDefined();
    });

    it('should remove the correct node', () => {
      list2.remove(3);
      expect(list2.toArray()).toEqual([1, 2, 4, 5]);
    });
  });

  describe('search', () => {
    it('should exist', () => {
      expect(list2.search).toBeDefined();
    });

    it('should be able to find a node by value', () => {
        const result = list2.search(4);
        expect(result?.value).toEqual(4);
    });

    it('should return null if not found', () => {
      const result = list2.search(100);
      expect(result).toBeNull();
    });
  });

  describe('insertAt', () => {
    it('should be defined', () => {
      expect(list2.insertAt).toBeDefined();
    });

    it('should throw error when out of bounds', () => {
      const errorMessage = 'Position out of bounds';
      expect(() => list2.insertAt(100, 8)).toThrowError(errorMessage);
      expect(() => list2.insertAt(-10, 1)).toThrowError(errorMessage);
    });

    it('should insert value at position', () => {
      list2.insertAt(3, 3)
    });

    it('should insert value on an empty list', () => {
      list1.insertAt(0, 1);
      expect(list1.toArray()).toEqual([1]);
    });
  });
});
