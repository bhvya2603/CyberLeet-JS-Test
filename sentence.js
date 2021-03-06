'use strict'

/*
 * Create a function `sentence` that takes an array of strings
 * and return a strings of all the element separated by spaces
 *
 * @next words
 */

function sentence(str){
    var sentence = "";
    for(var i=0; i< str.length-1 ; i++){
        sentence = sentence.concat(str[i], " ");
    }
    sentence = sentence.concat(str[i]);
   
    return sentence;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof sentence, 'function')
assert.strictEqual(sentence.length, 1)
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c')
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f')
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol']), 'wol.lol lo,lol')
// End of tests */
