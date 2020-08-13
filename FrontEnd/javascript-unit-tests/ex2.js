const assert = require('assert');

function myRemove(array, item) {
    newArray = []
    for (let i = 0; i < array.length; i+=1) {
        if (item !== array[i]) {
            newArray.push(array[i]);
        }
    }
    return newArray
}
assert.strictEqual(typeof myRemove, 'function');
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); 
assert.notEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); 
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); 