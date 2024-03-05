
let num = 10;

let t = typeof (num);

if (t !== "string") {
    if (num % 2 == 0) {
        console.log('Число четное');
    } else if (num !== 2) {
        console.log('Число не четное');
    }
} else {
    console.log('Пишите только число');
}














