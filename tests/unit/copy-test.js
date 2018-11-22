import { copy } from 'ember-copy';
import { module, test } from 'qunit';

module('Unit | Utility | copy', function(/*hooks*/) {

  test('copy null', function(assert) {
    let obj = { field: null };
    assert.equal(copy(obj, true).field, null, 'null should still be null');
  });
  
  test('copy date', function(assert) {
    let date = new Date(2014, 7, 22);
    let dateCopy = copy(date);
  
    assert.equal(date.getTime(), dateCopy.getTime(), 'dates should be equivalent');
  });
  
  test('copy null prototype object', function(assert) {
    let obj = Object.create(null);
    obj.foo = 'bar';
    assert.equal(copy(obj).foo, 'bar', 'bar should still be bar');
  });
  
  test('copy Array', function(assert) {
    let array = [1, null, new Date(2015, 9, 9), 'four'];
    let arrayCopy = copy(array);
  
    assert.deepEqual(array, arrayCopy, 'array content cloned successfully in new array');
  });


  test('copy cycle detection', function(assert) {
    let obj = {
      foo: {
        bar: 'bar',
      },
    };
    obj.foo.foo = obj.foo;
    let cycleCopy = copy(obj, true);

    assert.equal(cycleCopy.foo.bar, 'bar');
    assert.notEqual(cycleCopy.foo.foo, obj.foo.foo);
    assert.strictEqual(cycleCopy.foo.foo, cycleCopy.foo.foo);
  });
});
