console.log(2|3);
console.log(2&3);
console.log(2^3);
console.log(2<<3);//Left shift
console.log(2>>3);//Right Shift


let g = 3;

if (g>4){
    console.log(g);
}
else{
    console.log("entr value is else");
}

if (g>4){
    console.log(g);
}
else if (g==3){
    console.log(" g value is 3");
}
else{
    console.log("entr value is else");
}

let age = null;

if(age < 18){
    console.log("I am a child");
}
else if(age >=18 && age <= 60){
    console.log("I am a adult");
}   
else{
    ("i am an senior citizen");
}

let number=5
switch (number) {
    case 1:
        console.log("I am one");
        break;
    case 2:
        console.log("I am two");
        break;
    case 3:
        console.log("I am three");
        break;
    case 4:
        console.log("I am four");
        break;
    
    case true:
        console.log("i will be true");
        break;

    default:
        console.log("i am greater than 4");
        break;
}