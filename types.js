let objectExample = {
    age:22
};


console.log(objectExample);
console.log(objectExample.age);
console.log("0.1 + 0.2=",0.1+0.2);
console.log(typeof 22);
function declarationDemo () {

    const greet = () => {
      console.log("hello kaif");
    };
    greet();
}
declarationDemo();
function add(a,b) {
    return a+b;
}
console.log(add(5,10));

const sayhello=function(){
    console.log("Hello JavaScript");
};
sayhello();
function processUser(name,callback) {
    console.log("processing user:" + name);
    callback();
}
function done () {
    console.log("user processed successfully");

}
processUser("kaif",done);