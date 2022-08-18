//Declare a function Using An Arrow Function 
const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2,3);
//=>5

//alternatively
const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
}
sum(1,2);
//=>3


//Your code here
const divide = function(x=100,y=2000){
    return 2000/100;
}
const arrowFunction = square=x => x*x
arrowFunction(square);