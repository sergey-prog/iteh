 window.onload = function(){
 
    var counterX = 0;
    var counter0 = 0;
    var counterZ = 0;
    var hod = 0;
    var Winner_x = document.getElementById('winner_x');
    var Winner_Zero = document.getElementById('winner_zero');
    var Winner_0 = document.getElementById('winner_0');
    var zapolnenie = document.getElementById("game");

    

      
    zapolnenie.onclick = function(event)
    {
        if(event.target.className =='block' && event.target.innerHTML !== "X" && event.target.innerHTML !== "0")
        {
            if(hod%2==0)
            {
                 event.target.innerHTML = 'X';
            }
            else
            {
                event.target.innerHTML = '0';
            }     
            hod++; 
            checkwinner();  
            if(hod == 9 && zapolnenie.onclick != null)
            {
               NULL_WINNER(); 
            } 
        }   
            
    }    
    
    var X_WINNER = function(){
        Winner_x.innerHTML = '&#9745;';
        zapolnenie.onclick = null;
        counterX++;
        XX.innerHTML = counterX;
        if(allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X' &&allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') counterX--;
    }


    var O_WINNER = function(){
        Winner_0.innerHTML = '&#9745;';
        zapolnenie.onclick = null;
        counter0++;
        OO.innerHTML = counter0;  
    }

    var NULL_WINNER = function(){
            Winner_Zero.innerHTML = '&#9745;';
            zapolnenie.onclick = null;
            counterZ++;
            ZZ.innerHTML = counterZ;   

    } 
    function checkwinner(){
        var allblock = document.getElementsByClassName('block');

        //проверка х
        if(allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X') X_WINNER();
        if(allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X') X_WINNER();
        if(allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') X_WINNER();
        if(allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') X_WINNER();
        if(allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') X_WINNER();
        if(allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') X_WINNER();
        if(allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') X_WINNER();
        if(allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') X_WINNER();

        //проверка 0
        if(allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') O_WINNER();
        if(allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') O_WINNER();
        if(allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') O_WINNER();
        if(allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') O_WINNER();
        if(allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') O_WINNER();
        if(allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') O_WINNER();
        if(allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') O_WINNER();
        if(allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') O_WINNER(); 
    }   
    //012
    //345
    //678 


    function clear123 (){
        document.getElementById("a1").innerHTML = "";
        document.getElementById("a2").innerHTML = "";
        document.getElementById("a3").innerHTML = "";
        document.getElementById("a4").innerHTML = "";
        document.getElementById("a5").innerHTML = "";
        document.getElementById("a6").innerHTML = "";
        document.getElementById("a7").innerHTML = "";
        document.getElementById("a8").innerHTML = "";
        document.getElementById("a9").innerHTML = ""; 
        Winner_0.innerHTML = "";  
        Winner_x.innerHTML = "";
        Winner_Zero.innerHTML = ""; 
    }
    
    var new_game = function(){
        clear123();
        hod = 0;
        zapolnenie.onclick = function(event){
            if(event.target.className =='block' && event.target.innerHTML !== "X" && event.target.innerHTML !== "0"){
                if(hod%2==0){
                event.target.innerHTML = 'X';
                }
                else{
                    event.target.innerHTML = '0';
                }
                hod++;
                checkwinner();
                if(hod == 9 && zapolnenie.onclick != null)
                {
                   NULL_WINNER(); 
                } 
            } 
        }  
    }
    var clear_button = document.getElementById('clear');
    clear_button.addEventListener('click',new_game);   
    var XX = document.getElementById('counter_of_wins(x)');
    var OO = document.getElementById('counter_of_wins(0)');
    var ZZ = document.getElementById('counter_of_zero');

}    