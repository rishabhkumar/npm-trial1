/**
 * Created by rishabh on 26/11/16.
 */


const test1 = require('./index');

test1.increment(10, 2, 2, (result) => {
    console.log('The result is: ' + result);
})