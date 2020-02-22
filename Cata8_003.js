let arr = [1,2,3,4];
let N = 5;

let arrLength = arr.length - 1;
if(N > arrLength){
    console.log(-1);
} else {
    let result = Math.pow(arr[N], N);
    console.log(result);
}
