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



}


function dfs(arr){

  var s = [];
  var v = Array(arr.length).fill(0);


  s.push(arr[0]);
  v


}
