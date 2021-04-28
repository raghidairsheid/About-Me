'use strict';
let score=0;

//q1
let myAge;
for(let userAnswer2=1; userAnswer2<=4 ; userAnswer2++){
    myAge = parseInt(prompt('Guess my age: '));
    if(myAge === 22){
        alert('correct ');
        score++;
        break;
    }
    else if(myAge < 22){
        alert('too low ');
    }else if(myAge > 22){
        alert('too high')
    }
}
alert('My age is 22 ');
console.log( 'My age is ' + myAge);

//q2
let myfavNum;
for(let userAnswer3=1; userAnswer3<=4 ; userAnswer3++){
    myfavNum = parseInt(prompt('Guess my favorite number: '));
    if(myfavNum === 1){
        alert('correct ');
        score++;
        break;
    }
    else if(myfavNum < 1){
        alert('too low ');
    }else if(myfavNum > 1){
        alert('too high')
    }
}
alert('My favorite number is 1 ');
console.log( 'My favorite number is ' + myfavNum);

//q3
let mydayBD;
for(let userAnswer4=1; userAnswer4<=4 ; userAnswer4++){
    mydayBD = parseInt(prompt('Guess day of my birthday: '));
    if(mydayBD === 19){
        alert('correct ');
        score++;
        break;
    }
    else if(mydayBD < 19){
        alert('too low ');
    }else if(mydayBD > 19){
        alert('too high')
    }
}
alert('Day of my birthday is 19 ');
console.log( 'Day of my birthday is ' + mydayBD);

//q4
let myMonthBD;
for(let userAnswer5=1; userAnswer5<=4 ; userAnswer5++){
    myMonthBD = parseInt(prompt('Guess Month of my birthday: '));
    if(myMonthBD === 8){
        alert('correct ');
        score++;
        break;
    }
    else if(myMonthBD < 8){
        alert('too low ');
    }else if(myMonthBD > 8){
        alert('too high')
    }
}
alert('Month of my birthday is 8 ');
console.log( 'Month of my birthday is ' + myMonthBD);

//q5
let myYearBD;
for(let userAnswer6=1; userAnswer6<=4 ; userAnswer6++){
    myYearBD = parseInt(prompt('Guess Year of my birthday: '));
    if(myYearBD === 1998){
        alert('correct ');
        score++;
        break;
    }
    else if(myYearBD < 1998){
        alert('too low ');
    }else if(myYearBD > 1998){
        alert('too high')
    }
}
alert('Year of my birthday is 19 ');
console.log( 'Year of my birthday is ' + myYearBD);

//q6
let myStudyNum;
for(let userAnswer7=1; userAnswer7<=4 ; userAnswer7++){
    myStudyNum = Number(prompt('Guess Year of my birthday: '));
    if(myStudyNum === 4){
        alert('correct ^_^');
        score++;
        break;
    }
    else if(myStudyNum < 4){
        alert('too low ');
    }else if(myStudyNum > 4){
        alert('too high')
    }
}
alert('The number of years of my studiesis 4 ');
console.log( 'Year of my birthday is ' + myStudyNum);


//q7
let user = ['batool', 'hasan', 'raghida', 'sara', 'saja', 'anood'];
let userAnswer;
let flag = false; 
let i = 0;
while (i < 6) {
   userAnswer= prompt('what is my name? Guess it ^_^ ');
    if (userAnswer === user[i] ) {
        //i++;
        console.log('yes that\'s, my name is '+ userAnswer);
        flag = true;
        score++;
        break;
    }  
    else{
        console.log('sorry it is not one of them');
     }
}

console.log('The AVG of correct answer is: ' + score + ' of 7');

    
