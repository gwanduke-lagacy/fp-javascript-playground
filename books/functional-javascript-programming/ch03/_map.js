Array.prototype.print = function() {
  console.log(this);
};

var _ = {};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function getLength(list) {
  return list == null ? void 0 : list.length;
}

var isArrayLike = function(list) {
  var length = getLength(list);
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};

_.map = function(data, iteratee) {
  var new_list = [];
  if (isArrayLike(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      new_list.push(iteratee(data[i], i, data));
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key))
        new_list.push(iteratee(data[key], key, data));
    }
  }
  return new_list;
};

_.map([1, 2, 3], function(v) {
  return v * 2;
}).print();

_.map({ a: 3, b: 2, c: 1 }, function(v) {
  return v * 2;
}).print();

_.map(
  [1, 2, 3],
  function(v) {
    return v * this;
  }.bind(5)
).print();
