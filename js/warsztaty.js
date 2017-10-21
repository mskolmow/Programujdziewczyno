'use strict';
console.log("warsztaty");
document.addEventListener('DOMContentLoaded',function(){
    //tutaj wpisz kod z zadań,
    //tutaj mamy pewnosc ze caly HTML sie wczytal
  var menuList = document.querySelectorAll(".nav-list>li");
    console.log(menuList);//mamy tutaj tablice;
    
    for(var i=0;i<menuList.length;i++){
        menuList[i].addEventListener("mouseover",function(){
            //this to taka zmienna ktora jest tym na co najechal w tym mmencie uzytkownik
            var dropdown = this.querySelector(".dropdown");
            console.log("dropdown");
            if (dropdown!=null){
            dropdown.style.display ="block"
                }
        })
    }
    
        for(var i=0;i<menuList.length;i++){
        menuList[i].addEventListener("mouseout",function(){
            //this to taka zmienna ktora jest tym na co najechal w tym mmencie uzytkownik
            var dropdown = this.querySelector(".dropdown");
            console.log("dropdown");
            if (dropdown!=null){
            dropdown.style.display ="none"
                }
        })
    }
});