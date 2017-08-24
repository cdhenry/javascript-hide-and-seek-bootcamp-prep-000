function getFirstSelector(selector){
  var selection = document.querySelector(selector)
  return selection
}

function nestedTarget(){
  var target = document.getElementById('nested').querySelector('.target')
  return target
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node').querySelectorAll('div')
  return current[(current.length-1)]
}
