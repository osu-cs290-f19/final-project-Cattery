var postRequest = new XMLHttpRequest();
var requestURL = "/";



//Arrays used to stores kitten and adult images sets
var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg", "images/white-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg", "images/white-adult.jpg"];


//Used to track which cat is currently selected for groom,feed, play incrementation
var focus_variable = 0;

//Used to track number of cats and assign to cat# when a cat is made
var cat_tracker = 0;

//Arrays of cat cards, their images, their states, and their names
var catCards = document.getElementsByClassName('cat-card');
var images = document.getElementsByClassName('catImg');
var pP = document.getElementsByClassName("play-stat-text");
var pG = document.getElementsByClassName("groom-stat-text");
var pF = document.getElementsByClassName("feed-stat-text");
var catNames = document.getElementsByClassName("cat-name");

//Start off first cat with grey background signifying that cat is selected
catCards[focus_variable].style['background-color'] = "#ededf0";

//Add listener to Ancestor cat
catCards[0].addEventListener('click',function(event) {
    catCards[focus_variable].style['background-color'] = "white";
    event.currentTarget.style['background-color'] = "#ededf0";
    focus_variable = event.currentTarget.getAttribute("data-cat-num");
});

//Adds event listener which changes focus variable and background color of cat card to each cat card
function addListToCats(){
  for(var i = 0; i < catCards.length; i++){
  catCards[i].addEventListener('click',function(event) {
      catCards[focus_variable].style['background-color'] = "white";
      event.currentTarget.style['background-color'] = "#ededf0";
      focus_variable = event.currentTarget.getAttribute("data-cat-num");
});
}
}

//Opens modal and gets name for new catcard each time a cat card is created
function nameKitten(){
  var mainModal = document.getElementById('main-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');
  mainModal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
}
/*loads modal on window load*/
window.onload = nameKitten;

//Assigns name or prompts user to enter name when a user selects "enter" on the name modal
var enterButton = document.getElementById("modal-enter");
enterButton.addEventListener('click', function () {
  var mainModal = document.getElementById('main-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');
  var name = document.getElementById("text-input").value.trim();
  if (!name) {
    alert("Don't be heartless, give you kitty a name!");
  }
  else {
    console.log("name is", name);
        mainModal.classList = 'hidden';
        modalBackdrop.classList = 'hidden';
        catNames[cat_tracker].textContent = name;
        document.getElementById("text-input").value = "";

  }
});

//Creates a new cat card using handlebars
function createCatCard(){
  cat_tracker++;
  var img_num = Math.floor(Math.random() * 4); // Generates random number (0-3) in order to select a random cat img from array
  var name = nameKitten();
  var catHTML = Handlebars.templates.catCard({
    catID: "cat" + cat_tracker,
    catNUM: cat_tracker,
    catName: name,
    age: 0,
    photoURL: kittenImgURL[img_num],
    color: img_num,
    feedStat: 0,
    groomStat: 0,
    playStat: 0,
    total: 0
  });
  postRequest.open('POST',requestURL);
  var requestBody = JSON.stringify({
    catID: "cat" + cat_tracker,
    catNUM: cat_tracker,
    catName: name,
    age: 0,
    photoURL: kittenImgURL[img_num],
    color: img_num,
    feedStat: 0,
    groomStat: 0,
    playStat: 0,
    total: 0
   });
   postRequest.setRequestHeader('Content-Type', 'application/json');
  var cats = document.getElementById('cats');
  cats.insertAdjacentHTML('beforeend',catHTML);
  addListToCats();
  postRequest.send(requestBody);
  console.log("postSent");
}

//Following functions increment the feed, groom, and play stats of selected cats
var feed = document.getElementById("Feed");
feed.addEventListener('click',function(){
  var hungry_cat = document.getElementById("cat" + focus_variable).getAttribute("data-feed-stat");
  var total = document.getElementById("cat" + focus_variable).getAttribute("data-total");
  var age = document.getElementById("cat" + focus_variable).getAttribute("data-is-adult");
  var kids = document.getElementById("cat" + focus_variable).getAttribute("data-kids");
  if(hungry_cat < 2){
  hungry_cat++;
  document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', hungry_cat);
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total', total);
  pF[focus_variable].textContent = hungry_cat + "/2";
}
if(kids == 3){
  alert("Cat " + catNames[focus_variable].textContent + " is now too old to have more kitten!");
}
  if(total == 6 && age == 1){
    if(kids < 3){
      kids++;
      document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
      pF[focus_variable].textContent = "0/2";
      pG[focus_variable].textContent = "0/2";
      pP[focus_variable].textContent = "0/2";
      document.getElementById("cat" + focus_variable).setAttribute('data-kids', kids);
      createCatCard();
      alert("A new kitten was born!");
    }
  }
  if(kids == 3){
    pF[focus_variable].textContent = "2/2";
    pG[focus_variable].textContent = "2/2";
    pP[focus_variable].textContent = "2/2";
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
  var kids = document.getElementById("cat"+focus_variable).getAttribute("data-kids");
  if(dirty_cat < 2){
  dirty_cat++;
  document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat',dirty_cat)
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total', total)
  pG[focus_variable].textContent = dirty_cat + "/2";
}
if(kids == 3){
  alert("Cat " + catNames[focus_variable].textContent + " is now too old to have more kitten!");
}
  if(total == 6 && age == 1){
    if(kids < 3){
      kids++;
      document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
      pF[focus_variable].textContent = "0/2";
      pG[focus_variable].textContent = "0/2";
      pP[focus_variable].textContent = "0/2";
      document.getElementById("cat" + focus_variable).setAttribute('data-kids', kids);
      createCatCard();
      alert("A new kitten was born!");
    }
  }
  if(kids == 3){
    pF[focus_variable].textContent = "2/2";
    pG[focus_variable].textContent = "2/2";
    pP[focus_variable].textContent = "2/2";
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
  var kids = document.getElementById("cat"+focus_variable).getAttribute("data-kids");
  if(bored_cat < 2){
  bored_cat++;
  document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', bored_cat)
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total',total);
  pP[focus_variable].textContent = bored_cat + "/2";
}
if(kids == 3){
  alert("Cat " + catNames[focus_variable].textContent + " is now too old to have more kitten!");
}
  if(total == 6 && age == 1){
    if(kids < 3){
      kids++;
      document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
      document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
      pF[focus_variable].textContent = "0/2";
      pG[focus_variable].textContent = "0/2";
      pP[focus_variable].textContent = "0/2";
      document.getElementById("cat" + focus_variable).setAttribute('data-kids', kids);
      createCatCard();
      alert("A new kitten was born!");
    }
  }
  if(kids == 3){
    pF[focus_variable].textContent = "2/2";
    pG[focus_variable].textContent = "2/2";
    pP[focus_variable].textContent = "2/2";
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
