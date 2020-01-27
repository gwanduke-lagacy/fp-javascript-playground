const _ = require("lodash");

// ----- Basic -----
function callWith(a) {
  return function(b, func) {
    return func(a, b);
  };
}

function add(a, b) {
  return a + b;
}

const callWith10 = callWith(10);
console.log(callWith10(5, add));

// ----- Advanced -----
callWith([1, 2, 3])(function(v) {
  return v * 10;
}, _.map);

_.get = function(list, idx) {
  return list[idx];
};

var callWithUsers = callWith([
  { id: 2, name: "HA", age: 25 },

  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 }
]);
callWithUsers(2, _.get);

callWithUsers(function(user) {
  return user.age > 25;
}, _.find);
