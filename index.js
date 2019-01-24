$(document).ready(function startGame(){
  
        console.log("game started");
        //const variable for slot images
        const bar= 'https://images.trvl-media.com/media/content/expus/graphics/promos/deals/casino/slot-icon-04.png';
        const cherry= 'http://www.myiconfinder.com/uploads/iconsets/256-256-4f10f0a44ac19c443d1f5b74184f15f5-cherry.png';
        const lemon = "https://img.icons8.com/cotton/2x/sour-lemon.png"
        const diamond = 'https://images.vexels.com/media/users/3/151693/isolated/preview/50f0eeeea2af609d34c346942d24cb47-diamond-jewel-flat-icon-by-vexels.png';
        const redDiamond ='http://www.clker.com/cliparts/6/0/5/a/13340928701635070037Diamond%20Symbol.svg.hi.png';
        const orange = 'https://img11.androidappsapk.co/300/d/6/3/com.freedom.ocregister.png';
        const strawberry = "https://cdn.iconscout.com/icon/free/png-256/strawberry-fruit-vitamin-healthy-sweet-31190.png";
        const chip = 'https://static.thenounproject.com/png/117762-200.png';
        const bell = 'http://clipartist.net/links/clipartist.net/bell_icon_chovynz-555px.png';
        const seven = 'https://image.flaticon.com/icons/png/512/247/247814.png';
        const watermelon = 'https://vignette.wikia.nocookie.net/clubpenguin/images/f/f9/Watermelon_Pin.PNG/revision/20140323201318';
        const barbarbar = 'https://www.thecasinodb.com/img/icons/casino/maps-and-flags.png';
        const grapes = "http://pngimage.net/wp-content/uploads/2018/05/buah-kartun-png-6.png";

        //variables holding the slot vectors
        var reelA = $("#a");
        var reelB = $("#b");
        var reelC = $("#c");

        //button
        var button = $("button");
        //credits
        var credits = $("#credits");
        var money = 100;
        $(credits).text(money);
        //Global random number variables
        var epromA
        var epromB
        var epromC
        //array holding images
        const arr = [bar, diamond, redDiamond, cherry, lemon, seven, orange, bell, watermelon, barbarbar, chip, strawberry, grapes];
  
        //button starts the spinning (official game start)
        $(button).on("click", function spin(){
   
        //result display variable (led screen that shows what the player wins)
        var result = document.getElementById("result");
        //default display text
        $(result).text("- - -");
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
        //console.log("spinning slot 1"); 
        //Once the counter variable reaches 200, reel one stops and diplays the current image based on the index of the array
        if(counter === 140){
        //stopping the spin funcion 
        clearInterval(setIntervalId);
        console.log("slot stopped 1");
        //displaying the current image in reel one
        console.log(epromA);
        //playing the stop sound after reel is finished spinning 
        var reelStopA = new Audio("https://freesound.org/data/previews/145/145441_2615119-lq.mp3");
        reelStopA.play();
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
        if(counterB ===220){
        clearInterval(setIntervalIdB);
        console.log("slot stopped 2");
        console.log(epromB);
        var reelStopB = new Audio("https://freesound.org/data/previews/145/145441_2615119-lq.mp3");
        reelStopB.play();
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
        if(counterC === 400){
        clearInterval(setIntervalIdC);
        console.log("slot stopped 3");
        console.log(epromC);
        var reelStopC = new Audio("https://freesound.org/data/previews/145/145441_2615119-lq.mp3");
        reelStopC.play();
        console.log(epromA + " " + epromB + " " + epromC);
        //Play Table
        //SCOREBOARD 
        //1. ***JACKPOT****
        if(epromA == 13 && epromB == 13 && epromC == 13){
        console.log("player wins 100 credits");
        money = money + 100;
        var bigWin= new Audio('https://freesound.org/data/previews/270/270319_5123851-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function jackpot(){
        $(result).text("WIN $" + 100)
        }
        jackpot();
        }
        //2. TRIPLE Cherries
        if(epromA == 1 && epromB == 1 && epromC == 1){
        console.log("player wins 20 credits");
        money = money + 20;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 20)
        }
        cherries();
        } 
        //===========random wins =================/
        //BAR IN THE MIDDLE
        if(epromB == 0){
        console.log("user wins 10 credits");
        money = money + 10;
        var winSound = new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        winSound.play();
        $(credits).text(money);
        function bar(){
        $(result).text("WIN $" + 10);
        }
        bar();
        }
        //Diamond On One
        if(epromA == 1 || epromB == 1 || epromC == 1){
        console.log("user wins 20 credits");
        money = money + 20;
        var winSound = new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        winSound.play();
        $(credits).text(money);
        function diamondOnOne()
        {
        $(result).text("WIN $" + 20);
        }
        diamondOnOne();
        }
        return 
        //end of last spin reel
        }
        },10);

        money = money - 10;
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