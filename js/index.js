// ////////////////(1)////////////////
// var num = +prompt(" pls enter ur number")
// console.log(num);


// /////////////////(2)///////////
// var num = +prompt(" pls enter ur number")

// if( num % 3 ==0 && num % 4 ==0){
//     console.log("yes");
    
// }else{
//     console.log("no");
    
// }


// ////////////////(3)//////////
// var num1 = +prompt("pls enter ur number")
// var num2 = +prompt("pls enter ur number")
// if( num1 > num2){
//     console.log("max is"+num1);
    
// }else if(num2 > num1){
//     console.log("max is"+num2);
    
// }else{
//     console.log("2 number =");
    
// }


// /////////////////////(4)////////////
// var num =+prompt("pls enter ur number")
// if(num < 0){
//     console.log(num + "negative");
    
// }else if(num > 0){
//     console.log(num + "positive");
    
// }else{
//     console.log("0");
    
// }


// //////////////////(5)///////////////
// var num1 = +prompt("pls enter ur number")
// var num2 = +prompt("pls enter ur number")
// var num3 = +prompt("pls enter ur number")
// if( num1 > num2 && num1 > num3){
    // console.log("max is"+num1);
    // if(num2 > num3){
        // console.log("min is"+num3);
        
    // }else{
        // console.log("min is"+num2);
        
    // }
    
// }else if(num2 > num1 && num2 > num3){
    // console.log("max is"+num2);
    // if(num1 > num3){
        // console.log("min is"+num3);
        
    // }else{
        // console.log("min is"+num1);
        
    // }
    
// }else{
    // console.log("max is"+num3);
    // if(num1 > num3){
        // console.log("min is"+num2);
        
    // }else{
        // console.log("min is"+num1);
        
    // }
    
// }
// ///////////////////////(6)///////////////
// var num = +prompt("enter ur number")
// if(num % 2 == 0){
//     console.log("even" +num);
    
// }else{
//     console.log("odd" +num);
    
// }


// ///////////////////(7)////////////////
// var char = prompt("pls enter ur character")
// if( char == "a" || char =="A" ||char =="e" || char =="E" ||char == "I" || char =="i" || char == "O" || char == "o" || char == "U" || char == "u"){
//     console.log("vowel");
    
// }else{
//     console.log("consonant");
    
// }



// //////////////////////(8)/////////////////
// var num =+prompt("ur number")
// for( var i=1 ;i<=num;i++){
//     console.log(i);
    
// }



// ////////////////////////////////(9)//////////
// var num =+prompt("ur number")
// for( var i = 1; i <=12 ; i++){
//     console.log(num* i);
    
// }


// ////////////////////(10)/////////////
// var num =+prompt("ur number")
// for ( var i = 1; i <= num; i++){
//     if(i % 2 == 0){
//         console.log(i);
        
//     }
// }



// ///////////////////(11)//////////
// var num =+prompt("enter a number")
// var power = +prompt("enter a power of number")
// var result =1;
// for ( var i =0; i < 3; i++){
//     result = result * num
// }
// console.log(result);

// ////////////////(12)//////////
// var sub1 =+prompt("ur grade 1");
// var sub2 =+prompt("ur grade 2");
// var sub3 =+prompt("ur grade 3");
// var sub4 =+prompt("ur grade 4");
// var sub5 =+prompt("ur grade 5");

// var totalGrade = sub1 + sub2 + sub3 +sub4 + sub5;
// var avg = totalGrade / 5;
// var percentage = totalGrade/ 500 *100;
// console.log('totalGrade is $ {totalGrade} avg is ${avg} percentage is ${percentage} ');


// ///////////////(13)///////////////////////////
// var numMonth = +prompt("enter a month number");
// if(numMonth == 1|| numMonth == 3 || numMonth == 5){
//     console.log("31 days");
    
// }else if (numMonth == 2){
//     console.log("28 days");
    
// }else if(numMonth == 4){
//     console.log("30 days");
    
// }else if (numMonth == 4){
//     console.log("30 days");
    
// }else if (numMonth ==5)
// console.log("30 days");




// ///////////////////(14)//////////////
// var sub1 =+prompt("ur grade 1");
// var sub2 =+prompt("ur grade 2");
// var sub3 =+prompt("ur grade 3");
// var sub4 =+prompt("ur grade 4");
// var sub5 =+prompt("ur grade 5");

// var totalGrade = sub1 + sub2 + sub3 +sub4 + sub5;
// var percentage = totalGrade/ 500 *100;
// console.log('totalGrade is ${totalGrade } precentage is ${ precentage}%' );
// if( precentage >=90){
//     console.log("A");
    
// }else if ( precentage>= 80){
//     console.log("B");
    
// }else if ( precentage >=70){
//     console.log("C");
    
// }else if( precentage >=60){
//     console.log("D");
    
// }else if( precentage >=40){
//     console.log("E");
    
// }else{
//     console.log("F");
    
// }  


// //////////////using switch case/////////
// /////////////////////(15)//////////////
// var numMonth = +prompt("enter a month number")
// switch(numMonth){
//     case 1 :
//     case 3:
//     case 5:

//         console.log("31 days");
//         break;
//         case 2:
//             console.log("28 days");
//             break;
//             case 4:
//             case 11:
//             case 12:
//                 console.log("30 days");
//                 break;
//         default:
//             console.log("pls enter a vaild month number");
                
// }

// /////////////////////(16)///////////////
// var char = prompt("enter a character");
// switch (char) {
//     case "A":
//         case "a":
//             case "E":
//                 case "e":
//                     case "I":
//                         case "i":
//                             case "o":
//                                 case "O":
//                                     case "u":
//                                         case "U":
//         console.log('${char} is vowel character');
//         break;

//     default:
//         console.log('${char is consonant}');
        
//         break;
// }
// //////////////////(17)///////////
// var num1 = + prompt("enter a num1");
// var num2 = + prompt("enter a num2");
// switch (true) {
//     case num1 > num2:
//         console.log("max is" + num1);
        
        
//         break;
//         case num2> num1:
//             console.log('max is' +num2);
//             break;
            

//     default:
//         console.log('equal');
        
//         break;
// }
// //////////////////(18)/////////////
// var num = + prompt("enter a num")
// switch (true) {
//     case num % 2 ==0:
//         console.log('${num} is even');
        
//         break;

//     default:
//         console.log('${num} is odd');

//         break;
// }
// ////////////////(19)//////
// var num = + prompt("enter a num")
// switch (true) {
//     case num > 0:
//         console.log('${num} is positive');
//         break;
//         case num < 0:
//             console.log('${num} is negative');
//             break

//     default:
//         console.log('${num}is 0');
        
// }
// //////////////////(20)/////////////
// var num1 = + prompt("enter a number 1")
// var num2 = + prompt("enter a number 2")
// var operator = prompt("enter an operator");
// switch(operator){
//     case "+":
//         console.log('${num1}+ $ {num2} = ${num1 + num2}');
//         break;

//         case "-":
//             console.log('${num1}- $ {num2} = ${num1 - num2}');
//             break;

//             case "*":
//                 console.log('${num1} * $ {num2} = ${num1 * num2}');
//                 break;

//                 case "/":
//                     console.log('${num1} / $ {num2} = ${num1 / num2}');
//                     break;
       

        
// }
























    

















