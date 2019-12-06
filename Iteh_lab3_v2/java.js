$(document).ready(function(){
    var $item= $('li');
    var $next= $('.next');
    var $prev= $('.prev');
    
    $item.first().addClass('active');

    $next.click(function(){
        var index = $item.filter('.active').index();
        if(index == $item.length - 1){
            index = -1
        }
        $item.eq(index+1).addClass('active').siblings().removeClass('active');
    });
    $prev.click(function(){
        var index = $item.filter('.active').index();
        $item.eq(index -1).addClass('active').siblings().removeClass('active');

        
    });
}); 

myNumber.onchange = function(){
    //picHolder1.style.width = this.value +"px";
    //picHolder1.style.height = this.value +"px";
    var elems = document.getElementsByTagName('img');
    for(var i = 0; i < elems.length; i++)
    {
    elems[i].style.width = this.value +"px";
    }
};
 myNumber1.onchange = function(){

    var elems = document.getElementsByTagName('img');
    for(var i = 0; i < elems.length; i++)
    {
    elems[i].style.height = this.value +"px";
    }
}; 

