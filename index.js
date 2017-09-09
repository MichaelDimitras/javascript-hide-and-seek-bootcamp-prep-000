function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){

  const ranks = document.querySelectorAll('ul.ranked-list li');

  for(let i of ranks){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepest
