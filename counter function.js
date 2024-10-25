function createCounter() {
    let count = 0; // Initial count value
  
    return {
      increment: function() {
        count++;
        console.log(`Count: ${count}`);
        return count;
      },
      decrement: function() {
        count--;
        console.log(`Count: ${count}`);
        return count;
      },
      getCount: function() {
        return count;
      },
      reset: function() {
        count = 0;
        console.log(`Count reset to: ${count}`);
        return count;
      }
    };
  }
  
  // Usage example
  const counter = createCounter();
  
  counter.increment(); // Count: 1
  counter.increment(); // Count: 2
  counter.decrement(); // Count: 1
  console.log(`Current count: ${counter.getCount()}`); // Current count: 1
  counter.reset(); // Count reset to: 0