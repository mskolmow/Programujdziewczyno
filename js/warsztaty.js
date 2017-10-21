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
    
    //Zadanie 2

    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    console.log(buttons[0].previousElementSibling); 
    
    for(var i=0;i<buttons.length;i++){
     buttons[i].addEventListener('click', function() {
        var textArea = this.previousElementSibling;
      // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
      // warunek po jednej albo po drugiej stronie kresek musi być spełniony
      if (textArea.style.display === 'none' || textArea.style.display === '') {

        // ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {

        // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }

    })
    };
});