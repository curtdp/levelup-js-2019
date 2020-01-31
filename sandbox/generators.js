const person = { name: 'Igor', phone: '555-51-5151' };

person[Symbol.iterator] = () => {
  let calls = 0;
  return {
    next: () => {
      const stop = calls >= Object.keys(person).length;
      calls++;
      if (!stop) {
        return {
          value: Object.keys(person)[calls - 1],
          done: false
        };
      }
      return { done: true };
    }
  };
};

const p = [...person];
