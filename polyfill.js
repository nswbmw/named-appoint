'use strict';

if (typeof global.Promise !== 'function') {
  global.Promise = require('./appoint');
}