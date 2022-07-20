var nam="Lerato";
var gender;
var counter;

counter = 0;

function Displayname (){

   
    document.getElementById("name").innerHTML= nam;
    



}


function Displaygender (){

    nam="vincent";
    gender="female";

document.getElementById("name").innerHTML= nam;
  
   document.getElementById("gender").innerHTML= gender;

     



}

function calculateAge (year){
   
    let age= document.getElementById("age").innerHTML = 2022-year;
    return age;





}

function votes(age){
    if(age >=20){
        document.getElementById("votes").innerHTML = "you can vote"
    }
    else{
        document.getElementById("votes").innerHTML ="you cant vote"
}

}


function increment(){

    counter = counter +1 ;
    document.getElementById('count').innerHTML=counter;

    
    
    
}

function reset(){
    counter =counter =0;
    document.getElementById('count').innerHTML=counter;
}

function decrement(){
    counter = counter -1,
    document.getElementById('count').innerHTML=counter;  

    if(decrement>0){

        document.getElementById('count').innerHTML = 0;
    }
    else{
        document.getElementById('count').innerHTML =0;
    }
}


     

     


    
calculateAge(2001)

Displaygender();
Displayname() ;
votes(20)
counter()