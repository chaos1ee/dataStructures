class Stack {
  static items = [];

  push(element) {
    items.push(element);
  }

  pop() {
    return items.pop();
  }

  peek() {
    return items[this.items.length - 1];
  }

  isEmpty() {
    return items.length === 0;
  }

  size() {
    return items.length;
  }
}