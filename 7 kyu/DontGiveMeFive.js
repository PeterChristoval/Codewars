let a = 4;
let b = 17;
const arr = [];

for(i = a; i <= b; i++) {
    if(i) {
        let huruf = i.toString();
        let c = huruf.split('');
        if(c.includes('5')) {

        } else {
            arr.push(i);
        }
        c = '';
    } else {
        arr.push(i);
    }
}

console.log(arr);