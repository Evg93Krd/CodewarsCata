let arr = [1, 3, 5, -5, -2, 12];
let x = arr.length;
let result = 0;

for(let i = 0; i < x; i++){
    if(arr[i] > 0){
        result += arr[i];
    }
}

console.log(result);