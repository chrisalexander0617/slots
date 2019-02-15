$(document).ready(function startGame(){

  console.log("game started");

  //const variable for slot images
  const bar= 'https://images.trvl-media.com/media/content/expus/graphics/promos/deals/casino/slot-icon-04.png';
  const lemon = "https://img.icons8.com/cotton/2x/sour-lemon.png"
  const diamond = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsVqKKb8T4wUEBcVuN-68wmkyE7nO-QlZUS0rV62uk2dKR420';
  const orange = 'https://img11.androidappsapk.co/300/d/6/3/com.freedom.ocregister.png';
  const strawberry = "https://cdn.iconscout.com/icon/free/png-256/strawberry-fruit-vitamin-healthy-sweet-31190.png";
  const chip = 'https://static.thenounproject.com/png/117762-200.png';
  const bell = 'https://cdn2.iconfinder.com/data/icons/social-media-8/512/bell.png';
  const seven = 'https://image.flaticon.com/icons/png/512/247/247814.png';
  const watermelon = 'https://vignette.wikia.nocookie.net/clubpenguin/images/f/f9/Watermelon_Pin.PNG/revision/20140323201318';
  const barbarbar = 'https://www.thecasinodb.com/img/icons/casino/maps-and-flags.png';


  //variables holding the slot vectors
  var reelA = $("#a");
  var reelB = $("#b");
  var reelC = $("#c");

  //button
  var button = $("button");
  //credits
  var credits = $("#credits");
  var money = 250;
  $(credits).text(money);
  //Global random number variables
  var epromA
  var epromB
  var epromC
  //array holding images
  const arr = [bar, diamond, lemon, seven, orange, bell, watermelon, barbarbar, chip, strawberry];
  //const bars = [bar, barbarbar];


  //button starts the spinning (official game start)
  $(button).on("click", function spin(){

    function disableButton()
    {
      $(button).prop('disabled', true);

    }
    disableButton();


    $("img").addClass("blur");

    $("img").removeClass("shake");

    $("#a").addClass("top");
    $("#b").addClass("top2");
    $("#c").addClass("top3");





    console.log("spinning!");

    //result display variable (led screen that shows what the player wins)
    var result = document.getElementById("result");
    //default display text
    $(result).text("");
    //this number stops the function once the max number condition has been met
    var counter = 0;
    //function for slot one spin
    var setIntervalId = setInterval(function slotOne(){

      //counter adds one ever 10 milliseconds until it reaches 200
      counter ++;

      //computer chooses a random number based on how many items are in array
      epromA = Math.floor(Math.random() * arr.length) ;

      //random number is the index of the array that given time (changes every 10 milliseconds)
      $(reelA).attr("src", arr[epromA]);


      //Once the counter variable reaches 200, reel one stops and diplays the current image based on the index of the array
      if(counter === 100){

        //stopping the spin funcion 
        clearInterval(setIntervalId);
        console.log("slot stopped 1");
        //displaying the current image in reel one
        console.log(epromA);
        //playing the stop sound after reel is finished spinning 
        var reelStopA = new Audio("https://www.soundjay.com/mechanical/multi-plier-open-1.mp3");
        reelStopA.play();
        $("#a").removeClass("blur");
        $("#a").addClass("shake");
        $("#a").removeClass("top");

        return 
        //end of all functions for reel one
      }

      //this number determines how fast the reel spins (higher slower the RNG animation)
    },10);
    //======================// refer to reel one for explanation
    var counterB = 0;
    var setIntervalIdB = setInterval(function slotTwo(){
      counterB ++;
      epromB = Math.floor(Math.random() * arr.length);
      $(reelB).attr("src", arr[epromB]);
      //console.log("spinning slot 2"); 
      if(counterB === 150){
        clearInterval(setIntervalIdB);
        console.log("slot stopped 2");
        console.log(epromB);
        var reelStopB = new Audio("https://www.soundjay.com/mechanical/multi-plier-open-1.mp3");
        reelStopB.play();
        $("#b").removeClass("blur");
        $("#b").addClass("shake");
        $("#b").removeClass("top2");

        return 
      }
    },10);
    //====================//
    //***Reel 3 is compares wins in all variables and spits out score at return
    var counterC = 0;
    var setIntervalIdC = setInterval(function slotThree(){
      counterC ++;
      epromC = Math.floor(Math.random() * arr.length);
      $(reelC).attr("src", arr[epromC]);
      //console.log("spinning slot 3"); 
      if(counterC === 300){
        clearInterval(setIntervalIdC);
        console.log("slot stopped 3");
        console.log(epromC);
        var reelStopC = new Audio("https://www.soundjay.com/mechanical/multi-plier-open-1.mp3");
        reelStopC.play();
        console.log("STOP!");
        $("#c").removeClass("blur");
        $("#c").addClass("shake");
        $("#c").removeClass("top3");



        console.log(epromA + " " + epromB + " " + epromC);

        //Play Table
        //bar, diamond, lemon, seven, orange, bell, watermelon, barbarbar, chip, strawberry

        //SCOREBOARD 

        //BAR IN THE MIDDLE
        if(epromA == 0 || epromB == 0|| epromC == 0){
          console.log("user wins 50 credits");
          money = money + 50;
          var winSound = new Audio('./audio/win.mp3');
          winSound.play();
          $(credits).text(money);
          function bar(){
            $(result).text("WIN $" + 50);
          }
          bar();
        }


        if(epromA == 1 || epromB == 1 || epromC == 1){
          console.log("user wins 100 credits");
          money = money + 100;
          var winSound = new Audio('./audio/win.mp3');
          winSound.play();
          $(credits).text(money);
          function diamond()
          {
            $(result).text("WIN $" + 100);
          }
          diamond();
        }

        if(epromA == 3 || epromB == 3 || epromC == 3){
          console.log("user wins 50 credits");
          money = money + 50;
          var winSound = new Audio('./audio/win.mp3');
          winSound.play();
          $(credits).text(money);
          function seven()
          {
            $(result).text("WIN $" + 50);
          }
          seven();
        }

        if(epromA == 7 || epromB == 7 || epromC == 7){
          console.log("user wins 50 credits");
          money = money + 50;
          var winSound = new Audio('./audio/win.mp3');
          winSound.play();
          $(credits).text(money);
          function barBarBar()
          {
            $(result).text("WIN $" + 50);
          }
          barBarBar();
        }

        function enableButton()
        {
          $(button).prop('disabled', false);

        }
        setTimeout(enableButton, 1000);
        return 
        //end of last spin reel
      }
    },10);

    money = money - 50;
    $(credits).text(money);
    if(money <=0){

      function zeroCredits()
      {
        money = 0;
        $(result).text("NO CREDITS"); 
        $(credits).text(0);
        $(credits).css("color", "red")
        $("button").attr("disabled", "disabled");
      }
      zeroCredits();

    }
    //end of click event
  });
  //end of document ready event
});
