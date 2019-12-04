
function feedCat(which_cat){
  var hungry_cat = document.getElementById("which_cat").getAttribute("data-feed-stat");
  if(hungry_cat < 2){
  hungry_cat++;
}
}

function groomCat(which_cat){
  var dirty_cat = document.getElementById("which_cat").getAttribute("data-groom-stat");
  if(dirty_cat < 2){
  dirty_cat++;
}
}

function playCat(which_cat){
  var bored_cat = document.getElementById("which_cat").getAttribute("data-play-stat");
  if(bored_cat < 2){
  bored_cat++;
}
}
