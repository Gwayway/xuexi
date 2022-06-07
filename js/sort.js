function sort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }


    return arr;
}


function rev(arr) {
    let times = arr.length / 2;

    for (let i = 0; i < times; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

function set(arr) {
    let setArr = [];
    setArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < setArr.length; j++) {
            if (arr[i] !== setArr[j]) {
                if (j === setArr.length - 1) {
                    setArr.push(arr[i])
                }
                continue;
            } else {
                break;
            }
        }
    }
    return setArr;
}

var arr = [1, 2, 3, 4, 5, 1, 4, 6];

console.log(set(arr));
