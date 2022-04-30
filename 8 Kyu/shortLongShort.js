const a = "1";
const b = "22";

if(b.split('').length < a.split('').length) {
    console.log(`${b}${a}${b}`);
} else {
    console.log(`${a}${b}${a}`);
}