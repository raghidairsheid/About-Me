
//lab02


'use strict';
let score=0;


let userName = prompt('What is your name: ').toUpperCase();

// alert ('Wlecome ' + userName + ' please, I will ask you some questions about my self ');
// console.log('Wlecome ' + userName + ' please, I will ask you some questions about my self ');

// //q1
// let questionOne=function(){
// let myName = prompt('Is my name Raghida? ').toLowerCase();
// //for(let userAnswer1=1; userAnswer1<=4 ; userAnswer1++){
//     switch (myName)
//     {
//         case 'y':
//             alert('That\'s true, Im Raghida ');
//             console.log('That\'s true,'+myName);
//             score++;
//             break;
//         case 'yes':
//             alert('That\'s true, Im Raghida ');
//             console.log('That\'s true,'+myName);
//             score++;
//             break;
//         case 'n':
//             console.log('Sorry, but my name is '+myName);
//             alert('Sorry, but my name is Raghida ');
//             break;
//         case 'no':
//             console.log('Sorry, but my name is '+myName);
//             alert('Sorry, but my name is Raghida ');
//             break;
//         default:
//             console.log(myName);
//             console.log ('Sorry, but my name is Raghida ');
//             alert('Sorry, but my name is Raghida ');
//             break;
//     }

// alert('My name is Raghida\n ');
// console.log('My name is '+myName);
// }
// questionOne();

// //q2
// let questionTwo=function(){
// let fromPlace = prompt('Is Raghida from Jordan?').toLowerCase();

// switch(fromPlace){
//     case 'yes':
//         alert('yes, I\'m from Jordan ');
//         console.log(fromPlace);
//         score++;
//         break;
//     case 'y':
//         alert('yes, I\'m from Jordan ');
//         console.log(fromPlace);
//         score++;
//         break;
//     case 'no':
//         console.log("it's wrong ", fromPlace);
//         alert(" it's wrong ");
//         break;
//     case 'n':
//         console.log("it's wrong ", fromPlace);
//         alert(" it's wrong ");
//         break;
//     default:
//         console.log(fromPlace);
//         console.log (" it's wrong, I'm from Jordan ");
//         alert(" it's wrong, I'm from Jordan ");
//         break;
//     }
//     alert('My name is Raghida\n '+ "I\'m from Jordan\n" );
// }
// questionTwo();


// //q3 
// let questionThree=function(){
// let userWork = prompt('Is Raghida working?').toLowerCase();
// switch (userWork)
// {
//     case 'yes':
//         console.log ("yes, I'm working");
//         alert ("yes, I'm working");
//         score++;
//         break;
//     case 'y':
//         console.log ("yes, I'm working");
//         alert ("yes, I'm working");
//         score++;
//         break;
//     case 'no':
//         alert("it's wrong ");
//         console.log ("it's wrong ");
//         break;
//     case 'n':
//         alert("it's wrong ");
//         console.log ("it's wrong, I'm working ");
//         break;
//     default:
//         console.log(userWork);
//         console.log ("it's wrong, I'm work");
//         alert("it's wrong, I'm work");
//         break;
// }
// alert('My name is Raghida\n '+ "I\'m from Jordan\n" +" I'm working\n");
// }
// questionThree();

// //q4 
// let questionFour=function(){
// let userEducation = prompt('Are Raghida is studied Computer Science? ').toLowerCase();

// switch(userEducation){
//     case 'y':
//         alert('yes, I\'m studied computer science ');
//         console.log(userEducation);
//         score++;
//         break;
//     case 'yes':
//         alert('yes, I\'m studied computer science ');
//         console.log(userEducation);
//         score++;
//         break;
//     case 'n':
//         console.log("it's wrong ", userEducation);
//         alert(" it's wrong, I'm studied computer science ");
//         break;
//     case 'no':
//         console.log("it's wrong ", userEducation);
//         alert(" it's wrong, I'm studied computer science ");
//         break;
//     default:
//         console.log(userEducation);
//         console.log ("it's wrong, I'm studied computer science ");
//         alert("it's wrong, I'm studied computer science ");
//         break;

//     }
// alert('My name is Raghida\n '+ "I\'m from Jordan\n"+ "I'm studied computer science\n" );
// console.log( 'My Education is ' + userEducation);
// }
// questionFour();

// //q5 
// let questionFive=function(){
// let userYU = prompt('Are Raghida is studied in Yarmouk University?').toLowerCase();

// switch(userYU){
//     case 'y':
//         alert('yes, I\'m studied in Yarmouk University');
//         console.log(userYU);
//         score++;
//         break;
//     case 'yes':
//         alert('yes, I\'m studied in Yarmouk University');
//         console.log(userYU);
//         score++;
//         break;
//     case 'n':
//         console.log("it's wrong ", userYU);
//         alert(" it's wrong, I'm studied in Yarmouk University");
//         break;
//     case 'no':
//         console.log("it's wrong ", userYU);
//         alert(" it's wrong, I'm studied in Yarmouk University");
//         break;
//     default:
//         console.log(userYU);
//         console.log ( "it's wrong, I\'m studied in Yarmouk University");
//         alert( "it's wrong, I\'m studied in Yarmouk University");
//         break;
//     }
// alert('My name is Raghida\n '+ "I\'m from Jordan\n"+ "I'm studied computer science\n" + " I'm studied in Yarmouk University\n" );
// console.log( 'My University is ' + userYU);
// }
// questionFive();

// //q6
// let questionSix=function(){
// let myAge=22;
// for(let userAnswer2=1; userAnswer2<=4 ; userAnswer2++){
//     myAge = parseInt(prompt('Guess my age: '));
//     if(myAge === 22){
//         alert('correct, My age is 22 ');
//         score++;
//         break;
//     }
//     else if(myAge < 22){
//         alert('too low ');
//     }else if(myAge > 22){
//         alert('too high')
//     }
// }
// alert('My age is 22 \n');
// console.log( 'My age is ' + myAge);
// }
// questionSix();
//q7

let questionSeven=function(dateOfbirthday){
let flag = false; 
    for (let i = 0; i <6; i++) {
        userAnswer= prompt('Guess date of my birthday? ^_^ ');
        for(let j=0; j < dateOfbirthday.length; j++) {
            if (userAnswer === dateOfbirthday[j] ){
                console.log('my DB is '+ userAnswer);
                alert('correct, my DB is '+ userAnswer);
                score++;
                flag = true;
                break;
            }
        }
        if(flag === true){
            break; }
        if (flag === false){
        alert('Wrong answer , Try again !');
        console.log('Wrong answer , Try again !');
        }
    }
}
let userAnswer;
let dateOfbirthday = ['1995','1998','2000','2012'+'1991'+'1994'];
questionSeven(dateOfbirthday);

alert('My name is Raghida\n '+ "I\'m from Jordan\n" + "I'm studied computer science\n" + " I'm studied in Yarmouk University\n" +'My age is 22 \n'+ 'Date of my birthday is ' +userAnswer);

alert('The AVG of correct answer is: ' + score + ' of 7');
console.log('The AVG of correct answer is: ' + score + ' of 7');

alert(" See you again "+ userName);






