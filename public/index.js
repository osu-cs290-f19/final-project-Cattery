var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg", "white-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg", "white-adult.jpg"];

var x = 0;

function createCatCard(){
  var img_num = Math.floor(Math.random() * 4);
  var imgURL = kittenImgURL[img_num];
  var name = modalOpen)();
  var catHTML = Handlebars.templates.catCard({
    name: name,
    catID: "cat" + x,
    age: 0,
    photoURL: imgURL,
    color: img_num,
    total: 0,
  });
  var postsSection = document.getElementById('posts');
  postsSection.insertAdjacentHTML('beforeend',postHTML);
}

function feedCat(which_cat){
  var hungry_cat = document.getElementById("which_cat").getAttribute("data-feed-stat");
  if(hungry_cat < 2){
  hungry_cat++;
}
}

function groomCat(which_cat){
  var dirty_cat = document.getElementById("which_cat").getAttribute("data-groom-stat");
  var total = document.getElementById("which_cat").getAttribute("data-total");
  if(dirty_cat < 2){
  dirty_cat++;
  total++;
}
}

function playCat(which_cat){
  var bored_cat = document.getElementById("which_cat").getAttribute("data-play-stat");
  if(bored_cat < 2){
  bored_cat++;
}
}
