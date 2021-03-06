function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){

  const ranks = document.querySelectorAll('ul.ranked-list li');

  for(let i of ranks){
    i.innerHTML = parseInt(i.innerHTML) + n;
  }
}

function deepestChild(){

  var grand = document.querySelectorAll('div#grand-node');
  var curr = grand[0];

  while(curr.childElementCount > 0){
    curr = curr.children[0];
  }
  return curr;
}
