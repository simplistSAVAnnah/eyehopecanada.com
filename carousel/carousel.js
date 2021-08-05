var position = 1;
var time = 2600;

var leftButton = document.getElementById("control-left");
var rightButton = document.getElementById("control-right");

function onLoad() {
  //Centre align cards
  var card1 = document.getElementById("card-1");
  var compStyles = window.getComputedStyle(card1);
  var value = compStyles.getPropertyValue('transform');
  card1.style.transform = "translate(0px, 50px)";
  card1.style.opacity = "100%";

  var card2 = document.getElementById("card-2");
  var card3 = document.getElementById("card-3");
  var card4 = document.getElementById("card-4");
  card2.style.opacity = "50%";
  card3.style.opacity = "50%";
  card4.style.opacity = "50%";

  leftButton.removeAttribute("onclick");
  leftButton.setAttribute("style", "opacity:50%;");
}

function onResize() {
  console.log("card-" + position.toString());
  var cardMain = document.getElementById("card-" + position.toString());
  var card1 = document.getElementById("card-1");

  if (window.innerWidth > 925) {
    cardMain.style.width = "800px";
    for (let i = 1; i < 5; i++) {
      if (i != position) {
        var card = document.getElementById("card-" + i.toString());
        card.style.width = "600px";
        var newMarginLeft = "-" + (631 * (position - 1)).toString() + "px"
        card1.style.marginLeft = newMarginLeft;
      }
    }

  } else {
    cardMain.style.width = "400px";
    for (let i = 1; i < 5; i++) {
      if (i != position) {
        var card = document.getElementById("card-" + i.toString());
        card.style.width = "300px";
        var newMarginLeft = "-" + (331 * (position - 1)).toString() + "px"
        card1.style.marginLeft = newMarginLeft;
      }
    }
  }

  // setTimeout(function() {
  //   console.log("card-" + position.toString());
  //   var cardMain = document.getElementById("card-" + position.toString());
  //   var card1 = document.getElementById("card-1");
  //
  //   if (window.innerWidth > 925) {
  //     cardMain.style.width = "800px";
  //     for (let i = 1; i < 5; i++) {
  //       if (i != position) {
  //         var card = document.getElementById("card-" + i.toString());
  //         card.style.width = "600px";
  //         var newMarginLeft = "-" + (631 * (position - 1)).toString() + "px"
  //         card1.style.marginLeft = newMarginLeft;
  //       }
  //     }
  //
  //   } else {
  //     cardMain.style.width = "400px";
  //     for (let i = 1; i < 5; i++) {
  //       if (i != position) {
  //         var card = document.getElementById("card-" + i.toString());
  //         card.style.width = "300px";
  //         var newMarginLeft = "-" + (331 * (position - 1)).toString() + "px"
  //         card1.style.marginLeft = newMarginLeft;
  //       }
  //     }
  //   }
  // }, 2000);

}

function moveLeft() {
  if (window.innerWidth > 925) { //Disable buttons
    if (position != 2) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        leftButton.setAttribute("onclick", "moveLeft()");
        leftButton.setAttribute("style", "opacity:100%;");
        rightButton.setAttribute("onclick", "moveRight()");
        rightButton.setAttribute("style", "opacity:100%;");
      }, time);
    } else if (position == 2) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        rightButton.setAttribute("onclick", "moveRight()");
        rightButton.setAttribute("style", "opacity:100%;");
      }, time);
    }

    //Only change the left margin for card 1 (other cards will follow since right margin was fixed in css)
    var card1 = document.getElementById("card-1");
    var compStyles = window.getComputedStyle(card1);
    var marginLeft = compStyles.getPropertyValue('margin-left');
    var marginLeftString = marginLeft.toString();
    var newMarginLeft = (parseInt(marginLeftString.replace(/px/, "")) + 631) + "px"

    //Only change size of adjacent cards
    var middleCard = document.getElementById("card-" + position.toString());
    var leftCard = document.getElementById("card-" + (position - 1).toString());

    middleCard.style.transform = "";
    middleCard.classList.add('moveLeftShrink');
    setTimeout(function() {
      card1.style.marginLeft = newMarginLeft;

      middleCard.style.opacity = "50%";
      middleCard.style.width = "600px";
      middleCard.style.height = "300px";
      middleCard.classList.remove('moveLeftShrink')
    }, time);

    leftCard.classList.add('moveLeftZoom');
    setTimeout(function() {
      leftCard.style.opacity = "100%";
      leftCard.style.width = "800px";
      leftCard.style.height = "400px";
      leftCard.style.transform = "translate(0px, 50px)";
      leftCard.classList.remove('moveLeftZoom')
    }, time);

    //Move the same sized cards **CHANGE IF TOTAL NUMBER OF CARDS CHANGE
    if (position == 2) {
      var otherCard1 = document.getElementById("card-3");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 3) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 4) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-2");
    } else {
      console.log("DONT MOVE");
    }

    otherCard1.classList.add('moveLeft');
    setTimeout(function() {
      otherCard1.classList.remove('moveLeft');
    }, time);

    otherCard2.classList.add('moveLeft');
    setTimeout(function() {
      otherCard2.classList.remove('moveLeft');
    }, time);

    //Change the carousel position
    position = position - 1;
  } else {
    if (position != 2) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        leftButton.setAttribute("onclick", "moveLeft()");
        leftButton.setAttribute("style", "opacity:100%;");
        rightButton.setAttribute("onclick", "moveRight()");
        rightButton.setAttribute("style", "opacity:100%;");
      }, time);
    } else if (position == 2) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        rightButton.setAttribute("onclick", "moveRight()");
        rightButton.setAttribute("style", "opacity:100%;");
      }, time);
    }

    //Only change the left margin for card 1 (other cards will follow since right margin was fixed in css)
    var card1 = document.getElementById("card-1");
    var compStyles = window.getComputedStyle(card1);
    var marginLeft = compStyles.getPropertyValue('margin-left');
    var marginLeftString = marginLeft.toString();
    var newMarginLeft = (parseInt(marginLeftString.replace(/px/, "")) + 331) + "px"

    //Only change size of adjacent cards
    var middleCard = document.getElementById("card-" + position.toString());
    var leftCard = document.getElementById("card-" + (position - 1).toString());

    middleCard.style.transform = "";
    middleCard.classList.add('moveLeftShrink');
    setTimeout(function() {
      card1.style.marginLeft = newMarginLeft;

      middleCard.style.opacity = "50%";
      middleCard.style.width = "300px";
      middleCard.style.height = "300px";
      middleCard.classList.remove('moveLeftShrink')
    }, time);

    leftCard.classList.add('moveLeftZoom');
    setTimeout(function() {
      leftCard.style.opacity = "100%";
      leftCard.style.width = "400px";
      leftCard.style.height = "400px";
      leftCard.style.transform = "translate(0px, 50px)";
      leftCard.classList.remove('moveLeftZoom')
    }, time);

    //Move the same sized cards **CHANGE IF TOTAL NUMBER OF CARDS CHANGE
    if (position == 2) {
      var otherCard1 = document.getElementById("card-3");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 3) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 4) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-2");
    } else {
      console.log("DONT MOVE");
    }

    otherCard1.classList.add('moveLeft');
    setTimeout(function() {
      otherCard1.classList.remove('moveLeft');
    }, time);

    otherCard2.classList.add('moveLeft');
    setTimeout(function() {
      otherCard2.classList.remove('moveLeft');
    }, time);

    //Change the carousel position
    position = position - 1;
  }

}

function moveRight() {
  if (window.innerWidth > 925) {
    //Disable buttons
    if (position != 3) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        leftButton.setAttribute("onclick", "moveLeft()");
        leftButton.setAttribute("style", "opacity:100%;");
        rightButton.setAttribute("onclick", "moveRight()");
        rightButton.setAttribute("style", "opacity:100%;");
      }, time);
    } else if (position == 3) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        leftButton.setAttribute("onclick", "moveLeft()");
        leftButton.setAttribute("style", "opacity:100%;");
      }, time);
    }

    //Only change the left margin for card 1 (other cards will follow since right margin was fixed in css)
    var card1 = document.getElementById("card-1");
    var compStyles = window.getComputedStyle(card1);
    var marginLeft = compStyles.getPropertyValue('margin-left');
    var marginLeftString = marginLeft.toString();
    var newMarginLeft = (parseInt(marginLeftString.replace(/px/, "")) - 631) + "px"

    //Only change size of adjacent cards
    var middleCard = document.getElementById("card-" + position.toString());
    var rightCard = document.getElementById("card-" + (position + 1).toString());

    middleCard.style.transform = "";
    middleCard.classList.add('moveRightShrink');
    setTimeout(function() {
      card1.style.marginLeft = newMarginLeft;

      middleCard.style.width = "600px";
      middleCard.style.height = "300px";
      middleCard.style.opacity = "50%"; //
      middleCard.classList.remove('moveRightShrink')
    }, time);

    rightCard.classList.add('moveRightZoom');
    setTimeout(function() {
      rightCard.style.width = "800px";
      rightCard.style.height = "400px";
      rightCard.style.opacity = "100%";
      rightCard.style.transform = "translate(0px, 50px)";
      rightCard.classList.remove('moveRightZoom')
    }, time);

    //Move the same sized cards **CHANGE IF TOTAL NUMBER OF CARDS CHANGE
    if (position == 1) {
      var otherCard1 = document.getElementById("card-3");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 2) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 3) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-2");
    } else {
      console.log("DONT MOVE");
    }

    otherCard1.classList.add('moveRight');
    setTimeout(function() {
      otherCard1.classList.remove('moveRight');
    }, time);

    otherCard2.classList.add('moveRight');
    setTimeout(function() {
      otherCard2.classList.remove('moveRight');
    }, time);

    //Change the carousel position
    position = position + 1;
  } else {
    //Disable buttons
    if (position != 3) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        leftButton.setAttribute("onclick", "moveLeft()");
        leftButton.setAttribute("style", "opacity:100%;");
        rightButton.setAttribute("onclick", "moveRight()");
        rightButton.setAttribute("style", "opacity:100%;");
      }, time);
    } else if (position == 3) {
      leftButton.removeAttribute("onclick");
      leftButton.setAttribute("style", "opacity:50%;");
      rightButton.removeAttribute("onclick");
      rightButton.setAttribute("style", "opacity:50%;");
      setTimeout(function() {
        leftButton.setAttribute("onclick", "moveLeft()");
        leftButton.setAttribute("style", "opacity:100%;");
      }, time);
    }

    //Only change the left margin for card 1 (other cards will follow since right margin was fixed in css)
    var card1 = document.getElementById("card-1");
    var compStyles = window.getComputedStyle(card1);
    var marginLeft = compStyles.getPropertyValue('margin-left');
    var marginLeftString = marginLeft.toString();
    var newMarginLeft = (parseInt(marginLeftString.replace(/px/, "")) - 331) + "px"

    //Only change size of adjacent cards
    var middleCard = document.getElementById("card-" + position.toString());
    var rightCard = document.getElementById("card-" + (position + 1).toString());

    middleCard.style.transform = "";
    middleCard.classList.add('moveRightShrink');
    setTimeout(function() {
      card1.style.marginLeft = newMarginLeft;

      middleCard.style.width = "300px";
      middleCard.style.height = "300px";
      middleCard.style.opacity = "50%"; //
      middleCard.classList.remove('moveRightShrink')
    }, time);

    rightCard.classList.add('moveRightZoom');
    setTimeout(function() {
      rightCard.style.width = "400px";
      rightCard.style.height = "400px";
      rightCard.style.opacity = "100%";
      rightCard.style.transform = "translate(0px, 50px)";
      rightCard.classList.remove('moveRightZoom')
    }, time);

    //Move the same sized cards **CHANGE IF TOTAL NUMBER OF CARDS CHANGE
    if (position == 1) {
      var otherCard1 = document.getElementById("card-3");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 2) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-4");
    } else if (position == 3) {
      var otherCard1 = document.getElementById("card-1");
      var otherCard2 = document.getElementById("card-2");
    } else {
      console.log("DONT MOVE");
    }

    otherCard1.classList.add('moveRight');
    setTimeout(function() {
      otherCard1.classList.remove('moveRight');
    }, time);

    otherCard2.classList.add('moveRight');
    setTimeout(function() {
      otherCard2.classList.remove('moveRight');
    }, time);

    //Change the carousel position
    position = position + 1;
  }

}
