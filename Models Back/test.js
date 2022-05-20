const { resolve } = require('path');
let locals = resolve(__dirname, 'src', '**', '*.js');

console.log(locals);
