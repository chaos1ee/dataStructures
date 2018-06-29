class Stack {
  static items = [];

  push(element) {
    items.push(element);
  }

  pop() {
    return items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}