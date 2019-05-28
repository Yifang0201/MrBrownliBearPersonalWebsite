// --------------------------------- Meal Section ----------------------------------------
var randomNumber1 = 0;
var randomNumber2 = 0;
var count1 = 3;
var count2 = 3;

//choose the food at most three times
$(".food-button").click(function() {
  if (randomNumber1 === 0) {
    randomNumber1 = Math.floor(Math.random() * 4) + 1;
    select("f", randomNumber1);
    count1--;
    $("#click-counter-food").html(count1 + " Times!");
  } else {
    if (count1 > 0) {
      count1--;
      deselect("f", randomNumber1);
      randomNumber1 = Math.floor(Math.random() * 4) + 1;
      select("f", randomNumber1);
      switch (count1) {
        case 0:
          $("#click-counter-food").html("No Chance!");
          break;
        case 1:
          $("#click-counter-food").html("Last Chance!");
          break;
        default:
          $("#click-counter-food").html(count1 + " Times!");
      }
    }
  }
});


//choose the drink at most three times
$(".drink-button").click(function() {
  if (randomNumber2 === 0) {
    randomNumber2 = Math.floor(Math.random() * 4) + 1;
    select("d", randomNumber2);
    count2--;
    $("#click-counter-drink").html(count2 + " Times!");
  } else {
    if (count2 > 0) {
      count2--;
      deselect("d", randomNumber2);
      randomNumber2 = Math.floor(Math.random() * 4) + 1;
      select("d", randomNumber2);
      switch (count2) {
        case 0:
          $("#click-counter-drink").html("No Chance!");
          break;
        case 1:
          $("#click-counter-drink").html("Last Chance!");
          break;
        default:
          $("#click-counter-drink").html(count2 + " Times!");
      }
    }
  }
});


//select function  if image is selected, color it
function select(type, randomValue) {
  var name = "." + type + randomValue + "-img";
  $(name).css("opacity", "1");
}

//de-select function
function deselect(type, randomValue) {
  var name = "." + type + randomValue + "-img";
  $(name).css("opacity", "0.2");
}




//Refresh Button
$(".refresh-button").click(function() {
  location.reload();
});

//Submit Button
$(".submit-button").click(function() {
  alert(messageAfterFeed(randomNumber1, randomNumber2));
});



function messageAfterFeed(random1, random2) {
  var message;

  var foodType = "f" + random1;
  switch (foodType) {
    case "f1":
      message = "I like dome, it's sweet! ";
      break;
    case "f2":
      message = "The sausage in the hotdog tastes good. ";
      break;
    case "f3":
      message = "Oh, just a pancake, no meat? ";
      break;
    case "f4":
      message = "Wow, it's a beef hamburger. ";
      break;
    default:
      message = "I'm so hungry! Give me some food. ";
  }

  var drinkType = "d" + random2;
  switch (drinkType) {
    case "d1":
      message += "The orange juice is so cool!";
      break;
    case "d2":
      message += "The mojito is not bad!";
      break;
    case "d3":
      message += "I cannot fall asleep after I drink the coffee.";
      break;
    case "d4":
      message += "What? Beer! It's too bitter for me!";
      break;
    default:
      message += "I am too thirsty! No drink?";
  }
  return message;
}




// ------------------------------ Play Music Section ---------------------------------
var musicId = 0;
var numberOfSongs = 4;
var musicOn = false;

//paly and pause button
// Don't use toggleClass("fa-stop"), it will add class if the class doesn't exist, otherwise it remove that class
// Use removeClass and addClass
$(".play-btn").click(function() {
  if (Boolean(musicOn) === false) {
    $(this).find("i").removeClass("fa-play").addClass("fa-stop");
    playMusic(musicId);
    musicOn = true;
  } else {
    pauseMusic(musicId);
    musicOn = false;
    $(this).find("i").removeClass("fa-stop").addClass("fa-play");
  }
});

//play next song button
$(".next-btn").click(function() {
  pauseMusic(musicId);
  playFromStart(musicId);
  musicId++;
  musicId = musicId % numberOfSongs;
  playMusic(musicId);
});

//play previous song button
$(".previous-btn").click(function() {
  pauseMusic(musicId);
  playFromStart(musicId);
  musicId--;
  musicId += numberOfSongs;
  musicId = musicId % numberOfSongs;
  playMusic(musicId);
});

// replay the song button
$(".replay-btn").click(function() {
  pauseMusic(musicId);
  playFromStart(musicId);
  playMusic(musicId);

});


// All Functions
//paly function
function playMusic(ids) {
  $("audio")[ids].play();
}

//pause function
function pauseMusic(ids) {
  $("audio")[ids].pause();
}

function playFromStart(ids) {
  $("audio")[ids].currentTime = 0;
}









// Good Night section
// Get the modal
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

document.querySelector(".light-off").addEventListener("click", function() {
  // pop up the image
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = this.alt;
});

//  closes the modal
document.querySelector(".light-on").addEventListener("click", function() {
  // change the background color to white
  document.querySelector("body").style.backgroundColor = "#fff";
  // close the image
  modal.style.display = "none";
});





//Footer section

//move to right top
function rightMove() {
  var elem = document.getElementById("animation-left-bear");

  var pos = -30;
  var id = setInterval(frame, 100);
  var temp = 0;

  function frame() {
    if (pos === 60) {
      pos = -30;
    } else {
      if (pos < 0) {
        pos++;
        elem.style.left = pos + 'px';
        elem.style.bottom = pos + 'px';

      } else {
        pos++;
        temp = (0 - (pos - (0)));
        elem.style.left = temp + 'px';
        elem.style.bottom = temp + 'px';
      }

    }
  }
}

//move to left top
function leftMove() {
  var elem = document.getElementById("animation-right-bear");
  var pos = 0;
  var id = setInterval(frame, 40);
  var temp = 0;

  function frame() {
    if (pos === 180) {
      //clearInterval(id);
      pos = 0;
    } else {
      if (pos < 90) {
        pos++;
        elem.style.right = pos + 'px';
      } else {
        pos++;
        temp = (90 - (pos - 90));
        elem.style.right = temp + 'px';
        // pos = 0;
      }

    }
  }
}

//all onload functions
function onLoadFunction() {
  leftMove();
  rightMove();
}
