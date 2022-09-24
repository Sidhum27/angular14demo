var concat = require('concat'); 
var compile_to = './dist/micro-fe/micro-fe.js';
  concat([ './dist/angular14demo/main.js', './dist/angular14demo/runtime.js', './dist/angular14demo/polyfills.js' ], compile_to, function(err) 
 { if (err) throw console.log('Compiled to , ', compile_to); });