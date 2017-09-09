function getFirstSelector(selector){
  return document.querySelector(selector);
}


function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){

  const ranks = document.querySelectorAll('ul.ranked-list li');

  for(var i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(i.innerHTML) + 1);
  }
}
