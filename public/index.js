var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg", "white-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg", "white-adult.jpg"];

var focus_variable = 0;
var cat_tracker = 0;

function createCatCard(){
  var img_num = Math.floor(Math.random() * 4);
  var imgURL = kittenImgURL[img_num];
  var name = modalOpen();
  var catHTML = Handlebars.templates.catCard({
    name: name,
    catID: "cat" + cat_tracker,
    catNUM: cat_tracker,
    age: 0,
    photoURL: imgURL,
    color: img_num,
    total: 0,
  });
  var cats = document.getElementById('cat-card');
  cats.insertAdjacentHTML('beforeend',catHTML);
}


function feedCat(){
  var hungry_cat = document.getElementById("cat" + focus_variable).getAttribute("data-feed-stat");
  var total = document.getElementById("cat" + focus_variable).getAttribute("data-total");
  var age = document.getElementById("cat" + focus_variable).getAttribute("data-is-adult");
  if(hungry_cat < 2){
  hungry_cat++;
  total++;
  if(total == 6 && age == 1){
    createCatCard();
  }
  if(total == 6 && age == 0){
    var color = document.getElementById("cat"+focus_variable).getAttribute("color");
    var img = document.getElementById("cat"+focus_variable).getElementsByTagName("img");
    img = adultImgURL[color];

  }
}
}

function groomCat(){
  var dirty_cat = document.getElementById("cat"+focus_variable).getAttribute("data-groom-stat");
  var total = document.getElementById("cat"+focus_variable).getAttribute("data-total");
  if(dirty_cat < 2){
  dirty_cat++;
  total++;
  if(total == 6 && age == 1){
    createCatCard();
  }
  if(total == 6 && age == 0){
    var color = document.getElementById("cat"+focus_variable).getAttribute("color");
    var img = document.getElementById("cat"+focus_variable).getElementsByTagName("img");
    img = adultImgURL[color];
  }
}
}

function playCat(which_cat){
  var bored_cat = document.getElementById("cat"+focus_variable).getAttribute("data-play-stat");
  if(bored_cat < 2){
  bored_cat++;
  if(total == 6 && age == 1){
    createCatCard();
  }
  if(total == 6 && age == 0){
    var color = document.getElementById("cat"+focus_variable).getAttribute("color");
    var img = document.getElementById("cat"+focus_variable).getElementsByTagName("img");
    img = adultImgURL[color];
  }
}
}

var catCards = document.getElementsByClassName('cat-card');
for(var i = 0; i < catCards.length; i++){
catCards[i].addEventListener('click', function (event){
    catCards[focus_variable].style['background-color'] = "white";
    event.currentTarget.style['background-color'] = "#ededf0";
    focus_variable = event.currentTarget.getAttribute("data-cat-num");
    console.log(focus_variable);
});
}
