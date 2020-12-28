function sum(...arguments) {
  console.log(arguments.reduce((acc, el) => acc + el));
}

// function myBind(ctx, ...bindArgs) {
Function.prototype.myBind = function (ctx, ...bindArgs) {
  const fcn = this;

  return function (...callArgs) {
    return fcn.apply(ctx, bindArgs.concat(...callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind(pavlov)("meow", "a tree");
markov.says.myBind(pavlov, "meow")("Markov");

const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");

function curriedSum(numArgs) {
  let nums = [];

  return function _curriedSum(ele) {
    nums.push(ele);
    if (nums.length < numArgs) {
      return _curriedSum;
    } else {
      console.log(nums.reduce((acc, el) => acc + el));
    }
  };
}

Function.prototype.curry = function (numArgs) {
  let nums = [];
  let fnc = this;

  return function _curry(...ele) {
    nums.push(...ele);
    if (nums.length < numArgs) {
      return _curry;
    } else {
      return fnc(...nums);
    }
  };
};

// const sum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56
