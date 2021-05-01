'use strict';
let score=0;

let userName = prompt('What is your name: ').toUpperCase();

alert ('Wlecome ' + userName + ' please, I will ask you some questions about my self ');

let questionOne=function(){
let myName = prompt('Is my name Raghida? ').toLowerCase();
    switch (myName)
    {
        case 'y':
            alert('That\'s true, Im Raghida ');
            score++;
            break;
        case 'yes':
            alert('That\'s true, Im Raghida ');
            score++;
            break;
        case 'n':
            alert('Sorry, but my name is Raghida ');
            break;
        case 'no':
            alert('Sorry, but my name is Raghida ');
            break;
        default:
            alert('Sorry, but my name is Raghida ');
            break;
    }

alert('My name is Raghida\n ');
}
questionOne();

let questionTwo=function(){
let fromPlace = prompt('Is Raghida from Jordan?').toLowerCase();
    switch(fromPlace){
        case 'yes':
            alert('yes, I\'m from Jordan ');
            score++;
            break;
        case 'y':
            alert('yes, I\'m from Jordan ');
            score++;
            break;
        case 'no':
            alert(" it's wrong ");
            break;
        case 'n':
            alert(" it's wrong ");
            break;
        default:
            alert(" it's wrong, I'm from Jordan ");
            break;
    }
    alert('My name is Raghida\n '+ "I\'m from Jordan\n" );
}
questionTwo();


let questionThree=function(){
let userWork = prompt('Is Raghida working?').toLowerCase();
    switch (userWork)
    {
        case 'yes':
            alert ("yes, I'm working");
            score++;
            break;
        case 'y':
            alert ("yes, I'm working");
            score++;
            break;
        case 'no':
            alert("it's wrong ");
            break;
        case 'n':
            alert("it's wrong ");
            break;
        default:
            alert("it's wrong, I'm work");
            break;
    }
alert('My name is Raghida\n '+ "I\'m from Jordan\n" +" I'm working\n");
}
questionThree();


let questionFour=function(){
let userEducation = prompt('Are Raghida is studied Computer Science? ').toLowerCase();
    switch(userEducation){
        case 'y':
            alert('yes, I\'m studied computer science ');
            score++;
            break;
        case 'yes':
            alert('yes, I\'m studied computer science ');
            score++;
            break;
        case 'n':
            alert(" it's wrong, I'm studied computer science ");
            break;
        case 'no':
            alert(" it's wrong, I'm studied computer science ");
            break;
        default:
            alert("it's wrong, I'm studied computer science ");
            break;

        }
alert('My name is Raghida\n '+ "I\'m from Jordan\n"+ "I'm studied computer science\n" );
}
questionFour();


let questionFive=function(){
let userYU = prompt('Are Raghida is studied in Yarmouk University?').toLowerCase();
    switch(userYU){
        case 'y':
            alert('yes, I\'m studied in Yarmouk University');
            score++;
            break;
        case 'yes':
            alert('yes, I\'m studied in Yarmouk University');
            score++;
            break;
        case 'n':
            alert(" it's wrong, I'm studied in Yarmouk University");
            break;
        case 'no':
            alert(" it's wrong, I'm studied in Yarmouk University");
            break;
        default:
            alert( "it's wrong, I\'m studied in Yarmouk University");
            break;
        }
alert('My name is Raghida\n '+ "I\'m from Jordan\n"+ "I'm studied computer science\n" + " I'm studied in Yarmouk University\n" );
}
questionFive();


let questionSix=function(){
let myAge=22;
for(let userAnswer2=1; userAnswer2<=4 ; userAnswer2++){
    myAge = parseInt(prompt('Guess my age: '));
    if(myAge === 22){
        alert('correct, My age is 22 ');
        score++;
        break;
    }
    else if(myAge < 22){
        alert('too low ');
    }else if(myAge > 22){
        alert('too high')
    }
}
alert('My age is 22 \n');
}
questionSix();


let questionSeven=function(dateOfbirthday){
let flag = false; 
    for (let i = 0; i <6; i++) {
        userAnswer= prompt('Guess date of my birthday? ^_^ ');
        
        for(let j=0; j < dateOfbirthday.length; j++) {
            if (userAnswer === dateOfbirthday[j] ){
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
        }
    }
}
let userAnswer;
let dateOfbirthday = ['1995','1998','1996'];
questionSeven(dateOfbirthday);

alert('My name is Raghida\n '+ "I\'m from Jordan\n" + "I'm studied computer science\n" + " I'm studied in Yarmouk University\n" +'My age is 22 \n'+ 'Date of my birthday is ' +userAnswer);

alert('The AVG of correct answer is: ' + score + ' of 7');
alert(" See you again "+ userName);






