(function SectionA() {
  function test(a, b, c) {
    console.log("a b c", a, b, c);
    console.log("this:", this);
    console.log("arguments:", arguments);
  }

  test(1, 2, 3);
  (function HERE() {
    test.call(HERE, 1, 2, 3);
  })();
});

(function SectionB() {
  function test2(a, b) {
    b = 10;
    console.log(arguments);
  }
  test2(1);

  test2(1, 2);

  function test3(a, b) {
    arguments[1] = 10;
    console.log(b);
  }

  test3(1, 2);
})();
