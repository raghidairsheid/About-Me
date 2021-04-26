'use strict';

let v1 = prompt('Do you love plane? yes or no').toUpperCase();

switch(v1){
    case 'YES':
        document.writeln('<img src="img/plane1.jpg" />'+"<br>");
        
        alert('you write '+ v1);
        console.log(v1);
        break;
    case 'NO':
        document.writeln('you does not love plane '+"<br>");
        console.log("you does'nt love plane ", v1);
        alert('you write '+ v1 + " it's wrong");
    }

let v2 = prompt('Do you love travel? yes or no').toUpperCase();

if (v2 == 'YES'){
    document.writeln('<img src="img/travel.jpg" />' +"<br>");
    alert('you write '+ v2);
    console.log(v2);
}
else if(v2 == 'NO'){
    document.writeln('you does not love travel '+"<br>");
    alert('you write '+ v2 + " it's wrong");
    console.log('you does not love travel ', v2);
}

let v3 = prompt('Do you love Strawberries ? y or n ').toLowerCase();
switch(v3){
    case 'y':
        document.writeln('<img src="img/strawberries.jpg" />'+"<br>");
        alert('you write '+ v3);
        console.log(v3);
    break;

    case 'n':
        document.writeln('you does not love Strawberries '+"<br>");
        console.log("you does'nt love Strawberries  ", v3);
        alert('you write '+ v3 + " it's wrong");
}


let v4 = prompt('Do you love cherries ? y or n ').toUpperCase();
switch(v4){
    case 'Y':
        document.writeln('<img src="img/cherries.jpg" />'+ "<br>");
        alert('you write '+ v4);
        console.log(v4);
    break;

    case 'N':
        document.writeln('you does not love cherries '+"<br>");
        console.log("you does'nt love cherries  ", v4);
        alert('you write '+ v4 + " it's wrong");
}

let v5 = prompt('Do you love Sea ? y or n ').toLowerCase();
switch(v5){
    case 'y':
        document.writeln('<img src="https://th.bing.com/th/id/OIP.wzkoDR-Cndp5RIAKoOwU_QHaEK?w=323&h=182&c=7&o=5&pid=1.7" />');
        alert('you write '+ v5);
        console.log(v5);
        break;
    case 'n':
        document.writeln('you does not love Sea '+"<br>");
        console.log("you does'nt love Sea  ", v5);
        alert('you write '+ v5 + " it's wrong");
}

let vName;
vName = prompt('Please enter yor name: ').toUpperCase();
document.write("<br/>" + 'welcome '+ vName + ' to my site');
alert('welcome '+ vName + ' to my site');
console.log(vName);

