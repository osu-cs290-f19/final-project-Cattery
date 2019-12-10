var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg", "images/white-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg", "images/white-adult.jpg"];

var focus_variable = 0;
var cat_tracker = 0;
var catCards = document.getElementsByClassName('cat-card');
var images = document.getElementsByClassName('catImg');
var pP = document.getElementsByClassName("play-stat-text");
var pG = document.getElementsByClassName("groom-stat-text");
var pF = document.getElementsByClassName("feed-stat-text");


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
  console.log(img_num);
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
  pF[focus_variable].textContent = hungry_cat + "/2";
}
  if(total == 6 && age == 1){
    createCatCard();
    alert("A new kitten was born!")

  }
  if(total == 6 && age == 0){
    document.getElementById("cat"+focus_variable).setAttribute('data-is-adult', "1");
    var color = document.getElementById("cat" + focus_variable).getAttribute("data-color");
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
    document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
    pF[focus_variable].textContent = "0/2";
    pG[focus_variable].textContent = "0/2";
    pP[focus_variable].textContent = "0/2";
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
  pG[focus_variable].textContent = dirty_cat + "/2";
}
  if(total == 6 && age == 1){
    createCatCard();
    alert("A new kitten was born!")
  }
  if(total == 6 && age == 0){
    document.getElementById("cat"+focus_variable).setAttribute('data-is-adult', 1);
    var color = document.getElementById("cat"+focus_variable).getAttribute("data-color");
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
    document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
    pF[focus_variable].textContent = "0/2";
    pG[focus_variable].textContent = "0/2";
    pP[focus_variable].textContent = "0/2";
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
  pP[focus_variable].textContent = bored_cat + "/2";
}
  if(total == 6 && age == 1){
    createCatCard();
    alert("A new kitten was born!");

  }
  if(total == 6 && age == 0){
    document.getElementById("cat" + focus_variable).setAttribute('data-is-adult', 1);
    var color = document.getElementById("cat"+focus_variable).getAttribute("data-color");
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
    document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
    document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
    pF[focus_variable].textContent = "0/2";
    pG[focus_variable].textContent = "0/2";
    pP[focus_variable].textContent = "0/2";

  }
});

function modalEnterClick () {
    if (!modalText.value.trim()) {
    alert("You must give your kitten a name!");
    }
    else {

        hideModal();
}

/*unhides modal to name new kitten*/
function nameKitten() {
    nameModal.classList = 'visible';
    modalBackdrop.classList = 'visible';
}

/*hide modal and name kitten*/
function hideModal() {
    modalText.value = "";

    nameModal.classList = 'hidden';
    modalBackdrop.classList = 'hidden';
}

/*loads modal on window load*/
window.onload = nameKitten;
window.addEventListener('DOMContentLoaded', nameKitten());

btnEnter.addEventListener('click', modalEnterClick);
