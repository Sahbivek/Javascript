// let array =[2,3,4,"bivek","rahul"];
// let [a,b,c,d,e]=array;
// console.log(d);

// let array=[3,4,5,6,7,4,32,32];
// let[a,b,...rest]=array;
// console.log(rest);

// //spread and rest

// function bivek(a,b){
//     return a+b;
// }
// let arr=[3,5];
// console.log(bivek(...arr));//spread operator


// //rest
// function bivek(...args){
//     let sum=0;
// for(let b of args){
//     sum=sum+b;
    
// }
// return sum;
// }
// console.log(bivek(2,4,5,6,7,4));

//closure

function outer(){
    let var1="bivek";
    function inner(){
        console.log(var1);
    }
    inner();
}
let var1=outer();
