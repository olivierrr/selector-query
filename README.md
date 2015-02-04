# selector-query
querySelector >< selectorQuery

##usage
```js
var selectorQuery = require('selector-query')

documnet.addEventListner('click', function(e) {
  console.log(selectorQuery(e.target)) // *click* -> '#foo div.bar:nth-child(3) span'
})
```
