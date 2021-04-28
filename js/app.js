
//lab02


'use strict';
let score=0;


let userName = prompt('What is your name: ').toUpperCase();

alert ('Wlecome ' + userName + ' please, I will ask you some questions about my self ');
console.log('Wlecome ' + userName + ' please, I will ask you some questions about my self ');

//q1
let myName = prompt('Is my name Raghida? ').toLowerCase();
//for(let userAnswer1=1; userAnswer1<=4 ; userAnswer1++){
    switch (myName)
    {
        case 'y':
            alert('That\'s true, Im Raghida ');
            console.log('That\'s true,'+myName);
            score++;
            break;
        case 'yes':
            alert('That\'s true, Im Raghida ');
            console.log('That\'s true,'+myName);
            score++;
            break;
        case 'n':
            console.log('Sorry, but my name is '+myName);
            alert('Sorry, but my name is Raghida ');
            break;
        case 'no':
            console.log('Sorry, but my name is '+myName);
            alert('Sorry, but my name is Raghida ');
            break;
        default:
            console.log(myName);
            console.log ('Sorry, but my name is Raghida ');
            alert('Sorry, but my name is Raghida ');
            break;
    }

alert('My name is Raghida\n ');
console.log('My name is '+myName);

//q2

let fromPlace = prompt('Is Raghida from Jordan?').toLowerCase();

switch(fromPlace){
    case 'yes':
        alert('yes, I\'m from Jordan ');
        console.log(fromPlace);
        score++;
        break;
    case 'y':
        alert('yes, I\'m from Jordan ');
        console.log(fromPlace);
        score++;
        break;
    case 'no':
        console.log("it's wrong ", fromPlace);
        alert(" it's wrong ");
        break;
    case 'n':
        console.log("it's wrong ", fromPlace);
        alert(" it's wrong ");
        break;
    default:
        console.log(fromPlace);
        console.log (" it's wrong, I'm from Jordan ");
        alert(" it's wrong, I'm from Jordan ");
        break;
    }
    alert('My name is Raghida\n '+ "I\'m from Jordan\n" );

//q3 
let userWork = prompt('Is Raghida working?').toLowerCase();
switch (userWork)
{
    case 'yes':
        console.log ("yes, I'm working");
        alert ("yes, I'm working");
        score++;
        break;
    case 'y':
        console.log ("yes, I'm working");
        alert ("yes, I'm working");
        score++;
        break;
    case 'no':
        alert("it's wrong ");
        console.log ("it's wrong ");
        break;
    case 'n':
        alert("it's wrong ");
        console.log ("it's wrong, I'm working ");
        break;
    default:
        console.log(userWork);
        console.log ("it's wrong, I don't work");
        alert("it's wrong, I don't work");
        break;
}
alert('My name is Raghida\n '+ "I\'m from Jordan\n" +" I'm working\n");


//q4 
let userEducation = prompt('Are Raghida is studied Computer Science? ').toLowerCase();

switch(userEducation){
    case 'y':
        alert('yes, I\'m studied computer science ');
        console.log(userEducation);
        score++;
        break;
    case 'yes':
        alert('yes, I\'m studied computer science ');
        console.log(userEducation);
        score++;
        break;
    case 'n':
        console.log("it's wrong ", userEducation);
        alert(" it's wrong, I'm studied computer science ");
        break;
    case 'no':
        console.log("it's wrong ", userEducation);
        alert(" it's wrong, I'm studied computer science ");
        break;
    default:
        console.log(userEducation);
        console.log ("it's wrong, I'm studied computer science ");
        alert("it's wrong, I'm studied computer science ");
        break;

    }
alert('My name is Raghida\n '+ "I\'m from Jordan\n"+ "I'm studied computer science\n" );
console.log( 'My Education is ' + userEducation);

//q5 
let userYU = prompt('Are Raghida is studied in Yarmouk University?').toLowerCase();

switch(userYU){
    case 'y':
        alert('yes, I\'m studied in Yarmouk University');
        console.log(userYU);
        score++;
        break;
    case 'yes':
        alert('yes, I\'m studied in Yarmouk University');
        console.log(userYU);
        score++;
        break;
    case 'n':
        console.log("it's wrong ", userYU);
        alert(" it's wrong, I'm studied in Yarmouk University");
        break;
    case 'no':
        console.log("it's wrong ", userYU);
        alert(" it's wrong, I'm studied in Yarmouk University");
        break;
    default:
        console.log(userYU);
        console.log ( "it's wrong, I\'m studied in Yarmouk University");
        alert( "it's wrong, I\'m studied in Yarmouk University");
        break;
    }
alert('My name is Raghida\n '+ "I\'m from Jordan\n"+ "I'm studied computer science\n" + " I'm studied in Yarmouk University\n" );
console.log( 'My University is ' + userYU);


//q6
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
alert('My name is Raghida\n '+ "I\'m from Jordan\n" + "I'm studied computer science\n" + " I'm studied in Yarmouk University\n" +'My age is 22 \n');
console.log( 'My age is ' + myAge);


//q7
let dateOfbirthday = ['1995','1998','2000','2012'+'1991'+'1994']
let userAnswer;
let flag = false; 

for (let attempt = 1; attempt <=6; attempt++) {
    userAnswer= prompt('Guess date of my birthday? ^_^ ');
    for(let i=0; i < dateOfbirthday[i]; i++) {
        if (userAnswer === dateOfbirthday[i] ){
            flag = true;
            console.log('my DB is '+ userAnswer);
            alert('correct, my DB is '+ userAnswer);
            score++;
            break;
        }
    }
    if(flag === true){
        break;
    }
}
console.log('Date of my birthday is ' +userAnswer);


console.log('The AVG of correct answer is: ' + score + ' of 7');

alert(" See you again "+ userName);






