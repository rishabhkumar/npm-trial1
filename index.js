/**
 * Created by rishabh on 26/11/16.
 */


module.exports = {
    increment: function (inputNumber, incrementValue, iterations, callback) {
        if(isNaN(inputNumber)) {
            return new Error('Provide a number please!')
        }
        for(let i = 0; i<iterations; i++) {
            inputNumber += incrementValue;
            if(i == iterations-1) {
                callback(inputNumber);
            }
        }
    }
}