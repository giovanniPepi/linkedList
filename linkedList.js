const LinkedList = () => {
  const Node = (input) => {
    return {
      value: input || null,
      nextNode: null,
      changeValue(newValue) {
        this.value = newValue;
      },
    };
  };

  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length++;
    // sets the HEAD when the first node is created
    if (HEAD === null) {
      return (HEAD = newNode);
    }

    let pointer = HEAD;

    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    length++;

    if (HEAD === null) {
      return (HEAD = newNode);
    }

    const size = () => {
      if (!HEAD) return null;
      return length;
    };

    const head = () => {
      if (!HEAD) return null;
      return HEAD.value;
    };

    const tail = () => {
      if (!HEAD) return null;
      let pointer = HEAD;
      // trasverse the list until tail is found
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      return pointer.value;
    };

    const at = (index) => {
      if (!HEAD) return null;
      let pointer = HEAD;
      // trasverse the list until index
      for (let i = 0; i < index; i++) {
        pointer = pointer.nextNode;
      }
      return pointer;
    };

    const pop = () => {
      if (!HEAD) return null;
      // single list
      if (HEAD.nextNode === null) {
        HEAD = null;
      }

      at(size() - 2).nextNode = null;
      length--;
    };

    const contains = (value) => {
      if (!HEAD) return null;
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        if (pointer.value === value) return true;
        pointer = pointer.nextNode;
      }
      // checks the last node
      return pointer.value === value ? true : false;
    };

    const find = (value) => {
      if (!HEAD) return null;
      let index = 0;
      let pointer = HEAD;
      while (pointer.nextNode !== null) {
        if (pointer.value === value) return index;
        pointer = pointer.nextNode;
        index++;
      }

      return pointer.value === value ? index : null;
    };

    const toString = () => {};
  };
};
export default LinkedList;
