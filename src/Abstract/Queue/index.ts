export default abstract class AbstractQueue<T> {
  abstract enqueue(item: T): void
  abstract dequeue(): T
  abstract peek(): T
}
