var captureclass = require('../../');

module.exports = function(expected) {
  return function(t) {
    t.plan(1);
    t.deepEqual(
      captureclass(t.name).cfg,
      expected,
      JSON.stringify(expected)
    );
  };
};