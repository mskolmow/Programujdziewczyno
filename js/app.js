//console.log("działa!");
//var myNumber = 1;
//var myNumber2 =2;
//var myString="String variable";
//
//console.log(myNumber);
//console.log(myNumber2);
//console.log(myString);
//console.log(myNumber + myNumber2);
//
////wartosci logiczne
//var prawda=1;
//var falsz=0;
//
////tablica
////tablica jest indeksowana od zera i moz miec rózen typy 
//var tablica=[1,2,3];
//var tablicaS=["raz","dwa","trzy","cztery"];
//console.log(tablica[0]);
//console.log(tablicaS[1]);
//console.log(tablica.length);
//console.log(tablicaS.length);
//
////Petle
////to co jest wewnatrz funkcji jest niewidoczne poza nia,zawsze niezaleznie od tego czy mamy parametr czy nie musi byc return 
////function to inicjalizacja, sama wartosc zstaje nadana podczas wywolania samej funkcji
//
//
//    for (var i=0;i<tablicaS.length;i++)
//    {
//    console.log(tablicaS[i])
//    };
//
//
//
//function NumberCheck(){
//    console.log("I'm checking numbers");
//    return true;
//}
//
////instrukcje warunkowe
//if(myNumber<myNumber2){
//    console.log("true")
//}
//else{
//    console.log("false");
//}

//Cwiczenia



//DOM Api
var ppp=document.querySelector(".jumbotron"); 
ppp.style.border= "30 px solid red";
//
var divs=document.querySelectorAll("div");
console.log(divs.length);
divs[0].styledisplay="none";
