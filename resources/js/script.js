
var prevcgpa = document.querySelector(".prevcgpa");


var schoolcgpa = document.querySelector(".schoolcgpa");
var finaldisplay = document.querySelector(".finaldisplay");
var classs = document.querySelector(".classs");
var calculate = document.querySelector(".calculate");
var checker = false;


/*course code selection*/


var course1 = document.querySelector(".course1");
var course2 = document.querySelector(".course2");
var course3 = document.querySelector(".course3");
var course4 = document.querySelector(".course4");
var course5 = document.querySelector(".course5");
var course6 = document.querySelector(".course6");
var course7 = document.querySelector(".course7");
var course8 = document.querySelector(".course8");
var course9 = document.querySelector(".course9");
var course10 = document.querySelector(".course10");


/*course unit selection*/

var unit1 = document.querySelector(".unit1");
var unit2 = document.querySelector(".unit2");
var unit3 = document.querySelector(".unit3");
var unit4 = document.querySelector(".unit4");
var unit5 = document.querySelector(".unit5");
var unit6 = document.querySelector(".unit6");
var unit7 = document.querySelector(".unit7");
var unit8 = document.querySelector(".unit8");
var unit9 = document.querySelector(".unit9");
var unit10 = document.querySelector(".unit10");


/*scorepoint  selection*/
var scorepoint1 = document.querySelector(".scorepoint1");
var scorepoint2 = document.querySelector(".scorepoint2");
var scorepoint3 = document.querySelector(".scorepoint3");
var scorepoint4 = document.querySelector(".scorepoint4");
var scorepoint5 = document.querySelector(".scorepoint5");
var scorepoint6 = document.querySelector(".scorepoint6");
var scorepoint7 = document.querySelector(".scorepoint7");
var scorepoint8 = document.querySelector(".scorepoint8");
var scorepoint9 = document.querySelector(".scorepoint9");
var scorepoint10 = document.querySelector(".scorepoint10");



 /* new variables */
totalpoint1 = Number(unit1.value) * Number(scorepoint1.value);

calculate.addEventListener("click",function(){
    totalpoint1 = Number(unit1.value) * Number(scorepoint1.value);
    totalpoint2 = Number(unit2.value) * Number(scorepoint2.value);
    totalpoint3 = Number(unit3.value) * Number(scorepoint3.value);
    totalpoint4 = Number(unit4.value) * Number(scorepoint4.value);
    totalpoint5 = Number(unit5.value) * Number(scorepoint5.value);
    totalpoint6 = Number(unit6.value) * Number(scorepoint6.value);
    totalpoint7 = Number(unit7.value) * Number(scorepoint7.value);
    totalpoint8 = Number(unit8.value) * Number(scorepoint8.value);
    totalpoint9 = Number(unit9.value) * Number(scorepoint9.value);
    totalpoint10 = Number(unit10.value) * Number(scorepoint10.value);
  
    totaltotal = totalpoint1 + totalpoint2 + totalpoint3 +
    totalpoint4 +totalpoint5 + totalpoint6 + totalpoint7 + 
    totalpoint8 + totalpoint9 + totalpoint10;

    totalpoint11 = Number(unit1.value) * 5;
    totalpoint22 = Number(unit2.value) * 5;
    totalpoint33 = Number(unit3.value) * 5;
    totalpoint44 = Number(unit4.value) * 5;
    totalpoint55 = Number(unit5.value) * 5;
    totalpoint66 = Number(unit6.value) * 5;
    totalpoint77 = Number(unit7.value) * 5;
    totalpoint88 = Number(unit8.value) * 5;
    totalpoint99 = Number(unit9.value) * 5;
    totalpoint1010 = Number(unit10.value) * 5;


    totaltotal1 = totalpoint11 + totalpoint22 + totalpoint33 +
    totalpoint44 +totalpoint55 + totalpoint66 + totalpoint77 + 
    totalpoint88 + totalpoint99 + totalpoint1010;


    total_eqv = totaltotal / totaltotal1;
     gpa = total_eqv * Number(schoolcgpa.value);
     if(prevcgpa.value > 0){
         ;
         totalgpa = gpa + Number(prevcgpa.value);
        cgpa = totalgpa/2;
     } 
     else{
        cgpa = gpa
     }
     
     finaldisplay.textContent=cgpa;

     if(cgpa>=4.5 && cgpa<5){
         alert(yea);
         classs.textContent = "you are on first class";
         classs.classList.add("firstclass");
     }

     

  


});




