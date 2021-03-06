var postRequest = new XMLHttpRequest();
var requestURL = "/";



//Arrays used to stores kitten and adult images sets
var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg", "images/white-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg", "images/white-adult.jpg"];
var img_num;

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
window.onload = createCatCard();

//Assigns name or prompts user to enter name when a user selects "enter" on the name modal
var enterButton = document.getElementById("modal-enter");
enterButton.addEventListener('click', function () {getCatName()});

function getCatName(){
  var mainModal = document.getElementById('main-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');
  var name = document.getElementById("text-input").value.trim();
  if (!name) {
    alert("Don't be heartless, give you kitty a name!");
  }
  else {
    postRequest.open('POST',requestURL);
    //Send post request with new cat data
    var requestBody = JSON.stringify({
      catName: name,
      catID: "cat" + cat_tracker,
      catNUM: cat_tracker,
      age: 0,
      photoURL: kittenImgURL[img_num],
      color: img_num,
      feedStat: 0,
      groomStat: 0,
      playStat: 0,
      total: 0
    });
    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(requestBody);
    console.log("postSent");

    console.log("name is", name);
        mainModal.classList = 'hidden';
        modalBackdrop.classList = 'hidden';
        catNames[cat_tracker].textContent = name;
        cat_tracker++;
        document.getElementById("text-input").value = "";
  }
}

//detect a button click on enter or return
var input = document.getElementById('text-input');
input.addEventListener("keyup", function (event){
  if( event.keyCode === 13){
    var mainModal = document.getElementById('main-modal');
    var modalBackdrop = document.getElementById('modal-backdrop');
    var name = document.getElementById("text-input").value.trim();
    if (!name) {
      alert("Don't be heartless, give you kitty a name!");
    }
    else {
      console.log("name is", name);
      postRequest.open('POST',requestURL);
      //Send post request with new cat data
      var requestBody = JSON.stringify({
        catName: name,
        catID: "cat" + cat_tracker,
        catNUM: cat_tracker,
        age: 0,
        photoURL: kittenImgURL[img_num],
        color: img_num,
        feedStat: 0,
        groomStat: 0,
        playStat: 0,
        total: 0
      });
      postRequest.setRequestHeader('Content-Type', 'application/json');
      postRequest.send(requestBody);
      console.log("postSent");
          mainModal.classList = 'hidden';
          modalBackdrop.classList = 'hidden';
          catNames[cat_tracker].textContent = name;
          cat_tracker++;
          document.getElementById("text-input").value = "";
    }
  }
});

//Reset the stat back to 0
function statReset(){
  document.getElementById("cat"+focus_variable).setAttribute('data-feed-stat', 0);
  document.getElementById("cat"+focus_variable).setAttribute('data-groom-stat', 0);
  document.getElementById("cat"+focus_variable).setAttribute('data-play-stat', 0);
  document.getElementById("cat"+focus_variable).setAttribute('data-total', 0);
  pF[focus_variable].textContent = "0/2";
  pG[focus_variable].textContent = "0/2";
  pP[focus_variable].textContent = "0/2";
}

//Creates a new cat card using handlebars
function createCatCard(){
  img_num = Math.floor(Math.random() * 4); // Generates random number (0-3) in order to select a random cat img from array
  var catHTML = Handlebars.templates.catCard({
    catID: "cat" + cat_tracker,
    catNUM: cat_tracker,
    age: 0,
    photoURL: kittenImgURL[img_num],
    color: img_num,
    feedStat: 0,
    groomStat: 0,
    playStat: 0,
    total: 0
  });
  var cats = document.getElementById('cats');
  cats.insertAdjacentHTML('beforeend',catHTML);
  addListToCats();
  nameKitten();
}

//The followingincrement the feed, groom, and play stats of selected cats, check if
//they have reach adult or have reach the maximum number of kitten
var feed = document.getElementById("Feed");
feed.addEventListener('click',  function(){ stat("data-feed-stat", pF) });

var groom = document.getElementById("Groom");
groom.addEventListener('click',  function(){ stat("data-groom-stat", pG) });

var play = document.getElementById("Play");
play.addEventListener('click',  function(){ stat("data-play-stat", pP) });


function stat(att,attArray){
  var bored_cat = document.getElementById("cat"+focus_variable).getAttribute(att);
  var total = document.getElementById("cat"+focus_variable).getAttribute("data-total");
  var age = document.getElementById("cat"+focus_variable).getAttribute("data-is-adult");
  var kids = document.getElementById("cat"+focus_variable).getAttribute("data-kids");
  if(bored_cat < 2){
  bored_cat++;
  document.getElementById("cat"+focus_variable).setAttribute(att, bored_cat)
  total++;
  document.getElementById("cat"+focus_variable).setAttribute('data-total',total);
  attArray[focus_variable].textContent = bored_cat + "/2";
}
if(kids == 3){
  alert("Cat " + catNames[focus_variable].textContent + " is now too old to have more kitten!");
}
  if(total == 6 && age == 1){
    if(kids < 3){
      kids++;
      if(kids < 3){
        statReset();
      }
      document.getElementById("cat" + focus_variable).setAttribute('data-kids', kids);
      createCatCard();
      alert("A new kitten was born!");
    }
  }
  if(total == 6 && age == 0){
    document.getElementById("cat" + focus_variable).setAttribute('data-is-adult', 1);
    var color = document.getElementById("cat"+focus_variable).getAttribute("data-color");
    images[focus_variable].src = adultImgURL[color];
    alert("All grown up!");
    statReset();

  }
}
