require('babel-register')({  //babel-register 是为了使用import
    presets: ['es2015', 'react']
  })
require('./src/server');