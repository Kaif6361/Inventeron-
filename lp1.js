// for loop
console.log("for loop");
for(let i=0;i<5;i++){
    console.log("*");
}
//while loop
console.log("while loop");
let j=1;
while(j<=10){
    console.log("");
    j++;
}
//do while loop 
console.log("do while loop");
let k=1;
do {
    console.log(k);
    k++;
}while(k<=5);
//for in loop
console.log("for in loop");
let person={
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in person){
    console.log(key + ": " + person[key]);
}//for of loop
console.log("for of loop");
let numbers=[1,2,3,4,5];
for(let number of numbers){
    console.log(number);
}//break statement
console.log("break statement");for(let i=1;i<=10;i++){
    if(i===5){
        break;
    }
    console.log(i);
}//continue statement
console.log("continue statement");  for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}//nested loops
console.log("nested loops");for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(i + " " + j);
    }} //second largest number in an array
console.log("second largest number in an array");
let number=[5, 2, 9, 1, 5, 6];
let largest = -Infinity;
let secondLargest = -Infinity;  
for(let i=0;i<number.length;i++){
    if(number[i]>largest){
        secondLargest=largest;
        largest=number[i];
    }else if(number[i]>secondLargest && number[i]!==largest){
        secondLargest=number[i];
    }}console.log("Second largest number is: " + secondLargest);       
    //second smallest number in an array
    console.log("second smallest number in an array");
    let nums=[5, 2, 9, 1, 5, 6];
    let smallest = Infinity;
    let secondSmallest = Infinity;          
    for(let i=0;i<nums.length;i++){
        if(nums[i]<smallest){
            secondSmallest=smallest;
            smallest=nums[i];
        }else if(nums[i]<secondSmallest && nums[i]!==smallest){
            secondSmallest=nums[i];
        }}console.log("Second smallest number is: " + secondSmallest);       
