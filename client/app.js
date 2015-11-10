
// 如果有用到 generator 就要掛這個 polyfill
require('babel-polyfill');
import fn, {e} from './m1.js'

console.log(fn(e))

import co from 'co';

co(function *() {
  yield new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
  return 1;
}).then(function (result) {
  console.log(result)
});

var arr = ['a', 'b'];

arr = arr.map( item => {
  var p = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100);
  } );
  return 'name_' + item;
})

console.log( 'arr: ', arr );

var [foo] = arr;
console.log( 'foo: ', foo );

var bar = {b:'11', c:'22'};
var {c} = bar;
// var {...rest} = bar;
console.log( 'coo: ', c);

// function *zoo(){
//   for( let i = 0; i<4; i++ ){
//     console.log( 'i= ', i );
//     yield i;
//   }
// }
// let runner = zoo(), result;
// while( runner.next().done == false ){
//   //
// }

var foo = 'barrr'
console.log( '>', `${foo}` );

var t = ['a', 'b', 'c', 'd'];
var [z1, z2, ...tada] = t;
console.log( 'z: ', tada );
