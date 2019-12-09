var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg", "white-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg", "white-adult.jpg"];

var focus_variable = 0;
var cat_tracker = 0;
var catCards = document.getElementsByClassName('cat-card');
var images = document.getElementsByClassName('catImg');

//Ancestor cat
catCards[0].addEventListener('click',function(event) {
    catCards[focus_variable].style['background-color'] = "white";
    event.currentTarget.style['background-color'] = "#ededf0";
    focus_variable = event.currentTarget.getAttribute("data-cat-num");
});

function addListToCats(){
  for(var i = 0; i < catCards.length; i++){
  catCards[i].addEventListener('click',function(event) {
      catCards[focus_variable].style['background-color'] = "white";
      event.currentTarget.style['background-color'] = "#ededf0";
      focus_variable = event.currentTarget.getAttribute("data-cat-num");
});
}
}

function createCatCard(){
  cat_tracker++;
  var img_num = Math.floor(Math.random() * 4);
  var imgURL = kittenImgURL[img_num];
  //var name = modalOpen();
  var catHTML = Handlebars.templates.catCard({
    catID: "cat" + cat_tracker,
    catNUM: cat_tracker,
    age: 0,
    photoURL: imgURL,
    color: img_num,
    feedStat: 0,
    groomStat: 0,
    playStat: 0,
    total: 0
  });

  var cats = document.getElementById('cats');
  cats.insertAdjacentHTML('beforeend',catHTML);
  addListToCats();
}

var feed = document.getElementById("Feed");
feed.addEventListener('click',function(){
  var hungry_cat = document.getElementById("cat" + focus_variable).getAttribute("data-feed-stat");
  var total = document.getElementById("cat" + focus_variable).getAttribute("data-total");
  var age = document.getElementById("cat" + focus_variable).getAttribute("data-is-adult");
  if(hungry_cat < 2){
  hungry_cat++;
  document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', hungry_cat);
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total', total);
  console.log(total);
}
  if(total == 6 && age == 1){
    createCatCard();
    alert("A new kitten was born!")

  }
  if(total == 6 && age == 0){
    document.getElementById("cat"+focus_variable).setAttribute('data-is-adult', "1");
    var color = document.getElementById("cat" + focus_variable).getAttribute("data-color");
    console.log(focus_variable);
    console.log(color);
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
  }
});

var groom = document.getElementById("Groom");
groom.addEventListener('click',function (){
  var dirty_cat = document.getElementById("cat"+focus_variable).getAttribute("data-groom-stat");
  var total = document.getElementById("cat"+focus_variable).getAttribute("data-total");
  var age = document.getElementById("cat"+focus_variable).getAttribute("data-is-adult");
  if(dirty_cat < 2){
  dirty_cat++;
  document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat',dirty_cat)
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total', total)
  console.log(total);
}
  if(total == 6 && age == 1){
    createCatCard();
    alert("A new kitten was born!")
  }
  if(total == 6 && age == 0){
    document.getElementById("cat"+focus_variable).setAttribute('data-is-adult', 1);
    var color = document.getElementById("cat"+focus_variable).getAttribute("data-color");
    console.log(color);
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
  }
});

var play = document.getElementById("Play");
play.addEventListener('click', function(){
  var bored_cat = document.getElementById("cat"+focus_variable).getAttribute("data-play-stat");
  var total = document.getElementById("cat"+focus_variable).getAttribute("data-total");
  var age = document.getElementById("cat"+focus_variable).getAttribute("data-is-adult");
  if(bored_cat < 2){
  bored_cat++;
  document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', bored_cat)
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total',total);
  console.log(total);
}
  if(total == 6 && age == 1){
    createCatCard();
    alert("A new kitten was born!");

  }
  if(total == 6 && age == 0){
    document.getElementById("cat" + focus_variable).setAttribute('data-is-adult', 1);
    var color = document.getElementById("cat"+focus_variable).getAttribute("data-color");
    console.log(color);
    console.log(focus_variable);
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
  }
});
