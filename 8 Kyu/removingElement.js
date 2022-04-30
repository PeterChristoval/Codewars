const arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];

const result = []

for(i = 0; i < arr.length; i++) {
    if(i % 2 == 0) {
        result.push(arr[i]);
    }
}

console.log(result);