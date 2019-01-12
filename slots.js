//TITLE

var title = $("#title");

//BUTTONS
const spinButton = $("#spin");

//SLOT CONTAINERS


var c_two = $("#c-two");
var c_three = $("#c-three");

const slotOne = $("#slot-one");
const slotTwo = $("#slot-two");
const slotThree = $("#slot-three");

//ICONS
const cherry = 'http://gdurl.com/n2Xe';
const grapes = 'http://gdurl.com/Gfve';
const seven = 'http://gdurl.com/eWTb';
const orange = 'http://gdurl.com/SI1g';
const diamond = 'http://gdurl.com/1RmL';
const strawberry = "http://gdurl.com/QYGM";
const apple = 'http://gdurl.com/6pHT';
const heart = 'http://gdurl.com/UBJy';
const tripleSevens = 'http://gdurl.com/lm43';
const cash = 'http://gdurl.com/F8jL';
const coin = "http://gdurl.com/1Wbs";

/*LOCAL FILE EXTENTIONS --- DESKTOP ONLY
const cherry = 'img/cherry.svg';
const grapes = 'img/grapes.svg';
const seven = 'img/seven.svg';
const orange = 'img/orange.svg';
const diamond = 'img/diamond.svg';
const strawberry = "img/strawberry.svg";
const apple = 'img/apple.svg';
const heart = 'img/heart.svg';
const tripleSevens = 'img/triple_sevens.svg';
const cash = 'img/cash.svg';
const coin = "img/coin.svg";
*/


//ARRAY HOLDING IMG VARIABLES
const arr = [cherry, grapes, seven, orange, diamond, heart, tripleSevens, cash, apple, strawberry, coin];

//================================================================================================//
//================================================================================================//
//================================================================================================//

//CREDITS AT GAME START
var coins = 50;
var credits = coins;
var displayCredits = $("#credits").text(credits);

//PAYOUT TOTAL AT GAME START 
var payout = 0;
var wins = payout;
var displayWins = $("#payout").text(payout); 



//SPIN BUTTON (AUDIO) "CLICK"
$(spinButton).on("mousedown", function click(){
    var clickOn = new Audio("audio/spin.mp3");
    clickOn.play();
});
//spin song :):):)
$(spinButton).on("mouseup", function(){
    var spinSounds = ["audio/retro_slot_sound_1.mp3", "audio/retro_slot_sound_2.mp3", "audio/retro_slot_sound_3.mp3"];
    
    var soundSelect = Math.floor(Math.random() * 3);
    
    var spinSound = new Audio(spinSounds[soundSelect]);
    spinSound.play();
});

//*******************************************************************************************************//
//*******************************************************************************************************//
//*******************************************************************************************************//


//START GAME ON CLICK EVENT
$(spinButton).on("click", function start(){


    var startTime = new Date().getTime();

    var interval = setInterval(function spin(){



    //random number generators
    var epromOne = Math.floor(Math.random() * 11 );
    var epromTwo = Math.floor(Math.random() * 11 );
    var epromThree = Math.floor(Math.random() * 11 );

    if(new Date().getTime() - startTime > 2000){

        clearInterval(interval);

        
        function result(){
          
        const resultOne = epromOne;
        const resultTwo = epromTwo;
        const resultThree = epromThree;

        $(slotOne).attr("src", arr[resultOne]);
        $(slotTwo).attr("src", arr[resultTwo]);
        $(slotThree).attr("src", arr[resultThree]);

        var spinEnd = new Audio("audio/spin-end.mp3");
        spinEnd.play();

        //showing index
        console.log(resultOne);
        console.log(resultTwo);
        console.log(resultThree);


        credits = credits - 5;

          //RULES FOR RESULTS

         

          //============================================================================
          //============================================================================

          //============================================================================
          //$$$JACKPOT$$$ --- LUCKY DIAMONDS
          //$32,000
            var startTime = new Date().getTime();
            var luckyDiamonds = setInterval(function jackpot(){
            if(new Date().getTime() - startTime >= 16000){

            clearInterval(luckyDiamonds);
            //audio loops randomly when put into this area --- still troubleshooting
            return;
            }
            if(resultOne == 4 && resultTwo == 4 && resultThree == 4 ){
              console.log("player wins $3,200");
              credits = credits + 50;
              displayCredits.text(credits);

              payout = payout + 50;
              displayWins.text(payout);

              var jackpot = new Audio("audio/jackpot_short.mp3");
              jackpot.play();
              
            }

          }, 250);
          //========================================================================================
          //CRAZY COIN$
          //$16,000
          var startTime = new Date().getTime();
          var crazyCoins = setInterval(function crazyCoins(){
          if(new Date().getTime() - startTime >= 16000){
          clearInterval(crazyCoins);
          //audio loops randomly when put into this area --- still troubleshooting
          return;
          }
          if(resultOne == 10 && resultTwo == 10 && resultThree == 10 ){
            console.log("user wins $1,600");
            credits = credits + 25;
            displayCredits.text(credits);

            payout = payout + 25;
            displayWins.text(payout);

            var jackpot = new Audio("audio/jackpot_short.mp3");
            jackpot.play();
          }
        }, 250);
          //============================================================================
          //LUCKY LITTLE 7s
          //$2560
          var startTime = new Date().getTime();
          var luckyLittleSevens = setInterval(function luckyLittleSevens(){
          if(new Date().getTime() - startTime >= 16000){
          clearInterval(luckyLittleSevens);
          //audio loops randomly when put into this area --- still troubleshooting
          return;
          }
          if(resultOne == 6 && resultTwo == 6 && resultThree == 6 ){
            console.log("player wins $2560 ");

            credits = credits + 40;
            displayCredits.text(credits);

            payout = payout + 40;
            displayWins.text(payout);

            var jackpot = new Audio("audio/jackpot_short.mp3");
            jackpot.play();
          }
        }, 250);
        //============================================================================
          //LUCKY 7s
          //$800
          var startTime = new Date().getTime();
          var luckyLittleSevens = setInterval(function luckyLittleSevens(){
          if(new Date().getTime() - startTime >= 16000){
          clearInterval(luckyLittleSevens);
          //audio loops randomly when put into this area --- still troubleshooting
          return;
          }
          if(resultOne == 2 && resultTwo == 2 && resultThree == 2 ){
            console.log("player wins $1,280 ");

            credits = credits + 20;
            displayCredits.text(credits);

            payout = payout + 20;
            displayWins.text(payout);

            var jackpot = new Audio("audio/jackpot_short.mp3");
            jackpot.play();
          }
        }, 250);

          //-5 credits on loss if no wins are present (BACKUP CODE)
          //credits = credits - 5;
          
          
          //============================================================================
          //Diamond on reel two ---- WIN $30
           if(resultTwo !== 4){
            console.log("LOSS");
            
            displayCredits.text(credits);
           } else if(resultTwo == 4 ){

            console.log("PLAYER WINS $30");
            
            credits = credits + 30;
            displayCredits.text(credits);
            
            payout = payout + 30;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }
          //============================================================================
           //STR8 CA$$$$H (single) ---- WIN $75
           if(resultOne !==7 && resultTwo !==7 && resultThree !==7){
            console.log("LOSS");
            
            displayCredits.text(credits);
           } else if(resultOne ==7 && resultTwo ==7 && resultThree ==7){

            console.log("PLAYER WINS $75");
            
            credits = credits + 75;
            displayCredits.text(credits);
            
            payout = payout + 75;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }

        //============================================================================
           //ALL CHERRYS  ---- WIN $100
           if(resultOne !==0 && resultTwo !==0 && resultThree !==0){
            console.log("LOSS ALL CHERRYS");
            
            displayCredits.text(credits);
           } else if(resultOne ==0 && resultTwo ==0 && resultThree ==0){

            console.log("PLAYER WINS $100");
            
            credits = credits + 100;
            displayCredits.text(credits);
            
            payout = payout + 100;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }

        //============================================================================
           //ALL GRAPES  ---- WIN $200
           if(resultOne !==0 && resultTwo !==0 && resultThree !==0){
            console.log("LOSS");
            
            displayCredits.text(credits);
           } else if(resultOne ==0 && resultTwo ==0 && resultThree ==0){

            console.log("PLAYER WINS $200");
            
            credits = credits + 200;
            displayCredits.text(credits);
            
            payout = payout + 200;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }

           //============================================================================
           //ALL HEARTS  ---- WIN $300
           if(resultOne !==5 && resultTwo !==5 && resultThree !==5){
            console.log("LOSS FOR THE LOVE OF MONEY");
            
            displayCredits.text(credits);
           } else if(resultOne ==5 && resultTwo ==5 && resultThree ==5){

            console.log("PLAYER WINS $300");
            
            credits = credits + 300;
            displayCredits.text(credits);
            
            payout = payout + 300;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }

        //============================================================================
           //ALL ORANGES  ---- WIN $400
           if(resultOne !==3 && resultTwo !==3 && resultThree !==3){
            console.log("LOSS FOR THE LOVE OF MONEY");
            
            displayCredits.text(credits);
           } else if(resultOne ==5 && resultTwo ==5 && resultThree ==5){

            console.log("PLAYER WINS $400");
            
            credits = credits + 400;
            displayCredits.text(credits);
            
            payout = payout + 400;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }
         //============================================================================
           //3 IN THE MIDDLE  ---- WIN $500
           if(resultOne !==2 && resultTwo !==6 && resultThree !==2){
            console.log("LOSS FOR THE LOVE OF MONEY");
            
            displayCredits.text(credits);
           } else if(resultOne ==2 && resultTwo ==6 && resultThree ==2){

            console.log("PLAYER WINS $400");
            
            credits = credits + 400;
            displayCredits.text(credits);
            
            payout = payout + 400;
            displayWins.text(payout);

            var miniWin = new Audio("audio/mini-win.mp3");
            miniWin.play();
        }

       


                //IF USER RUNS OUT OF CREDITS
                if(credits <= 0){

                    console.log("no more credits");
                    credits = 0;
                    displayCredits.text(credits + " CREDITS");

                    $(displayCredits).css("color", "red");
                    

                    $(spinButton).css("display", "none");
                    $(spinButton).css("visibility", "hidden");

                }

          

  }  
    result();

    return

    };


    //for the animation
    //runnging thru array indexes until clear interval function condition is met.
    $(slotOne).attr("src", arr[epromOne]);
    $(slotTwo).attr("src", arr[epromTwo]);
    $(slotThree).attr("src", arr[epromThree]);
   ///rate of speed which arr is looping thru imgs (20ms)
}, 20);


});
