const arr = [4, 6, 7, 1, 3];
const result = [];

for(i = 0; i < arr.length; i++) {
    let a = 0;
    a = arr[i] + (i+1);
    if(a > 9) {
        let huruf = a.toString()
        let c = huruf.split('');
        let b = c[c.length - 1];
        result.push(Number(b));
    } else {
        result.push(a);
    }
}

console.log(result);