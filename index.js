
module.exports = selectorQuery

function selectorQuery(node) {
  if(typeof node !== 'object') {
    throw new Error('expects dom node')
  }

  var selector = ''

  if(node.nodeName === 'HTML') {
    return 'html'
  }

  do {

    if(node.nodeName === 'HTML' | node.nodeName === '#document') {
      break;
    }

    if(node.id) {
      selector += ' #' + node.id
      break;
    }

    if(node.nodeName === 'BODY') {
      selector += ' ' + 'body'
      continue;
    }

    // refactor me *dying cough*
    if(node.className) {
      selector += ' ' + node.nodeName.toLowerCase() + (node.className.trim().split(/\s+/).map(function(x){return '.' + x.replace('.', '\\\\.')}).join('')) + ':nth-child(' + getNth(node) + ')'
    } else {
      selector += ' ' + node.nodeName.toLowerCase() + ':nth-child(' + getNth(node) + ')'
    }

  } while (node = node.parentNode)

  selector = selector.split(' ').reverse().join(' ')
  return selector || null
}

function getNth(node) {
  var startNode = node

  var i = 1
  while(node = node.previousElementSibling) {
    ++i
  }
  return i
}
