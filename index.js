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
        var money = 100;
        $(credits).text(money);
        //Global random number variables
        var epromA
        var epromB
        var epromC
        //array holding images
        const arr = [bar, diamond, lemon, seven, orange, bell, watermelon, barbarbar, chip, strawberry,];
        //const bars = [bar, barbarbar];
  
        //button starts the spinning (official game start)
        $(button).on("click", function spin(){
   
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
        //console.log("spinning slot 1"); 
        //Once the counter variable reaches 200, reel one stops and diplays the current image based on the index of the array
        if(counter === 100){
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
        if(counterB ===150){
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
        if(counterC === 300){
        clearInterval(setIntervalIdC);
        console.log("slot stopped 3");
        console.log(epromC);
        var reelStopC = new Audio("https://freesound.org/data/previews/145/145441_2615119-lq.mp3");
        reelStopC.play();
        console.log(epromA + " " + epromB + " " + epromC);
          
        //Play Table
          //[bar, diamond, redDiamond, cherry, lemon, seven, orange, bell, watermelon, barbarbar, chip, strawberry, grapes];
          
        //SCOREBOARD 
        //0. All bars
        if(epromA == 0 && epromB == 0 && epromC == 0){
        console.log("player wins 20 credits");
        money = money + 20;
        var bigWin= new Audio('https://freesound.org/data/previews/270/270319_5123851-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function jackpot(){
        $(result).text("WIN $" + 20)
        }
        jackpot();
        }
          
        //1. Diamonds
        if(epromA == 1 && epromB == 1 && epromC == 1){
        console.log("player wins 40 credits");
        money = money + 40;
        var bigWin= new Audio('https://freesound.org/data/previews/270/270319_5123851-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function jackpot(){
        $(result).text("WIN $" + 40)
        }
        jackpot();
        }
          
        //2. TRIPLE Cherries
        if(epromA == 2 && epromB == 2 && epromC == 2){
        console.log("player wins 60 credits");
        money = money + 60;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 60)
        }
        cherries();
        }
          
        //3. TRIPLE Cherries
        if(epromA == 3 && epromB == 3 && epromC == 3){
        console.log("player wins 80 credits");
        money = money + 80;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 80)
        }
        cherries();
        }
          
        //4. TRIPLE Cherries
        if(epromA == 4 && epromB == 4 && epromC == 4){
        console.log("player wins 100 credits");
        money = money + 100;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 100)
        }
        cherries();
        }
          
        //5. TRIPLE Cherries
        if(epromA == 5 && epromB == 5 && epromC == 5){
        console.log("player wins 120 credits");
        money = money + 120;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 120)
        }
        cherries();
        }
          
        //6. TRIPLE Cherries
        if(epromA == 6 && epromB == 6 && epromC == 6){
        console.log("player wins 140 credits");
        money = money + 140;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 140)
        }
        cherries();
        }
          
        //7. TRIPLE Cherries
        if(epromA == 7 && epromB == 7 && epromC == 7){
        console.log("player wins 160 credits");
        money = money + 160;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 160)
        }
        cherries();
        }
          
        //8. ***JACKPOT****
        if(epromA == 8 && epromB == 8 && epromC == 8){
        console.log("player wins 180 credits");
        money = money + 180;
        var bigWin= new Audio('https://freesound.org/data/previews/270/270319_5123851-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function jackpot(){
        $(result).text("WIN $" + 180)
        }
        jackpot();
        }
          
        //9. TRIPLE Cherries
        if(epromA == 9 && epromB == 9 && epromC == 9){
        console.log("player wins 200 credits");
        money = money + 200;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 200)
        }
        cherries();
        }
          
        //10. TRIPLE Cherries
        if(epromA == 10 && epromB == 10 && epromC == 10){
        console.log("player wins 220 credits");
        money = money + 220;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 220)
        }
        cherries();
        }
          
        //11. TRIPLE Cherries
        if(epromA == 11 && epromB == 11 && epromC == 11){
        console.log("player wins 240 credits");
        money = money + 240;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 240)
        }
        cherries();
        }
          
        //12. TRIPLE Cherries
        if(epromA == 12 && epromB == 12 && epromC == 12){
        console.log("player wins 260 credits");
        money = money + 260;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 260)
        }
        cherries();
        }
          
        //13.RIPLE Cherries
        if(epromA == 13 && epromB == 13 && epromC == 13){
        console.log("player wins 280 credits");
        money = money + 280;
        var bigWin= new Audio('https://freesound.org/data/previews/387/387232_1474204-lq.mp3');
        bigWin.play();
        $(credits).text(money);
        function cherries(){
        $(result).text("WIN $" + 280)
        }
        cherries();
        }
        //        ===========random wins =================       //
        
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

