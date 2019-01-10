//BUTTONS
const spinButton = $("#spin");

//SLOT CONTAINERS
const slotOne = $("#slot-one");
const slotTwo = $("#slot-two");
const slotThree = $("#slot-three");

//ICONS
const cherry = 'img/cherry.svg';
const grapes = 'img/grapes.svg';
const seven = 'img/seven.svg';
const orange = 'img/orange.svg';
const diamond = 'img/diamond.svg';
const strawberry = "img/strawberry.svg";
const apple = 'img/apple.svg';
const bar = 'img/bar.png';
const barTwo = 'img/bartwo.png';
const barThree = 'img/barthree.png';
const bitcoin = "img/bitcoin.jpg";

//ARRAY HOLDING IMG VARIABLES
const arr = [cherry, grapes, seven, orange, diamond, bar, barTwo, barThree, apple, strawberry, bitcoin];

//================================================================================================//
//================================================================================================//
//================================================================================================//

//CREDITS AT GAME START
var coins = 100;
var credits = coins;
var displayCredits = $("#credits").text(coins);


//SPIN BUTTON (AUDIO)
$(spinButton).on("mousedown", function click(){
    var clickOn = new Audio("audio/spin.mp3");
    clickOn.play();
});
//spin song :):):)
$(spinButton).on("mouseup", function(){
    var spinSound = new Audio("audio/bloopness.mp3");
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
    var epromOne = Math.floor(Math.random() * 12 );
    var epromTwo = Math.floor(Math.random() * 12 );
    var epromThree = Math.floor(Math.random() * 12 );

    if(new Date().getTime() - startTime > 2000){

        clearInterval(interval);
        
        function result(){

        const resultOne = epromOne;
        const resultTwo = epromTwo;
        const resultThree = epromThree;

      
        $(slotOne).attr("src", arr[resultOne]);
        $(slotTwo).attr("src", arr[resultTwo]);
        $(slotThree).attr("src", arr[resultThree]);

          //rules for results

        
       
        //showing index
        console.log(resultOne);
        console.log(resultTwo);
        console.log(resultThree);

           
           if(resultOne !== 4 ){
            console.log("LOSE");
            credits = credits - 5;
            displayCredits.text(credits);
            
        }  else if(resultOne == 4) {
            console.log("WIN $20");
            credits = credits + 20;
            displayCredits.text(credits);
           
        }
                //IF USER RUNS OUT OF CREDITS 
                if(credits <= 0){
                    console.log("no more credits");   
                    $(spinButton).css("display", "none");
                    $(spinButton).css("visibility", "hidden");
                }
                
    }
    result();

    return

    }


    //for the animation
    //runnging thru array indexes until clear interval function condition is met.
    $(slotOne).attr("src", arr[epromOne]);
    $(slotTwo).attr("src", arr[epromTwo]);
    $(slotThree).attr("src", arr[epromThree]);
   ///rate of speed which arr is looping thru imgs (20ms)
}, 20);   


});



