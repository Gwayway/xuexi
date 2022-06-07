// async function* ints() {
//     for (let i = 0; i < 5; i++) {
//         yield await new Promise(r => setTimeout(r, 1000, i))
//     }
// }

// const {
//     write,
//     read
// } = new TransformStream({
//     transform(chunk, controller) {
//         controller.enqueue(chunk * 2);
//     }
// })

// const readableStream = new ReadableStream({
//     async start(cl) {
//         for await (let chunk of ints()) {
//             cl.enqueue(chunk);
//         }
//         cl.close();
//     }
// })
// const readableStreamDefaultReader = readableStream.getReader();
// (async function () {
//     while (true) {
//         const {
//             done,
//             value
//         } = await readableStreamDefaultReader.read();
//         if (done) {
//             break;
//         } else {
//             console.log(value);
//         }
//     }
// })();

//计时
// console.log(this.performance.now());
// var a = [3, 43, 6, 8, 10, 46]
// let b = a.filter((item) => {
//     return item > 10
// }).reduce((pre,curr) => {
//    pre.push(curr);
//     return pre;
// },[])
// console.log(b);

function smartRepeat(str) {
    let rest = str;
    let index = 0;
    let numberStack = [];
    let stringStack = [];
    console.log(str);
    console.log(' '.repeat(index) + '^');
    while (index < str.length - 1) {
        rest = str.substring(index);
        if (/^\d+\[/.test(rest)) {
            let num = Number(rest.match(/^(\d+)\[/)[1]);
            numberStack.push(num);
            stringStack.push('');
            console.log('命中数字', num);
            index += (num.toString().length + 1);
            console.log(str);
            console.log(' '.repeat(index) + '^');
        } else if (/^\w+\]/.test(rest)) {
            let word = rest.match(/^(\w+)\]/)[1];
            console.log('命中字符', word);
            stringStack[stringStack.length - 1] = word;
            index += word.length;
            console.log(str);
            console.log(' '.repeat(index) + '^');
        } else if (rest[0] === ']') {
            let times = numberStack.pop();
            let word = stringStack.pop();
            stringStack[stringStack.length - 1] += word.repeat(times);
            index++;
            console.log(str);
            console.log(' '.repeat(index) + '^');
        }


    }

    return stringStack[0].repeat(numberStack[0]);
}


var res = smartRepeat('4[4[2[r]3[j]]]')
console.log('@@@@', res);