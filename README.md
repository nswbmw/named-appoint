## named-appoint

Named Promise based on [appoint](https://github.com/nswbmw/appoint).

### Install

```bash
npm install named-appoint
```

### Usage

```javascript
var Promise = require('named-appoint');
// or use the pollyfill
require('named-appoint/polyfill');
```

### Example

```javascript
var Promise = require('named-appoint')
new Promise(function username(resolve, reject) {
  setTimeout(() => {
    resolve('nswbmw')
  })
})
.then(function user(_, username) {
  return {
    name: 'nswbmw',
    age: '17'
  }
})
.then(function followers(_, username, user) {
  return [
    {
      name: 'zhangsan',
      age: '17'
    },
    {
      name: 'lisi',
      age: '18'
    }
  ]
})
.then((_, user, followers, username) => {
  assert.deepEqual(_, [ { name: 'zhangsan', age: '17' }, { name: 'lisi', age: '18' } ])
  assert(username === 'nswbmw')
  assert.deepEqual(user, { name: 'nswbmw', age: '17' })
  assert.deepEqual(followers, [ { name: 'zhangsan', age: '17' }, { name: 'lisi', age: '18' } ])
})
```

error:

```javascript
var Promise = require('named-appoint')
new Promise(function username(resolve, reject) {
  setTimeout(() => {
    reject('Oops')
  })
})
.then(function user() {
  return {
    name: 'nswbmw',
    age: '17'
  }
})
.catch((e, user, username) => {
  assert(e === 'Oops')
  assert(user === undefined)
  assert(username === 'Oops')
})
```

### License

MIT