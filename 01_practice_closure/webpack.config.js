var path = require('path');
module.exports = {
    entry: {
        //Save this context in that local variable
        that: './closure_that.js',
        apply: './closure_apply.js',
        call: './closure_call.js',
        bind: './closure_bind.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    }
}