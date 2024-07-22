const arr = [-6, 1, 5, 6, 7, 8, 9, 2, 5, 0, -1, 3, 11, -3, -1, 66, -33, 33, 1, -1];
const arrText = document.getElementById("data");
const bubble = document.getElementById("bubble");
const selection = document.getElementById("selection");
const insertion = document.getElementById("insertion");
const quick = document.getElementById("quick");



function bubbleSort(arr) {
    const res = [...arr];

    for (let i = 0; i < res.length; i++) {

        for (let j = 0; j < res.length - 1 - i; j++) {

            if (res[j] > res[j + 1]) {
                [res[j], res[j + 1]] = [res[j + 1], res[j]];
            }

        }

    }

    return res;
}

function selectionSort() {
    const res = [...arr];

    for (let i = 0; i < res.length; i++) {
        let targetIndex = i;

        for (let j = i + 1; j < res.length; j++) {

            if (res[j] < res[targetIndex]) {
                targetIndex = j;
            }

        }

        [res[i], res[targetIndex]] = [res[targetIndex], res[i]];

    }

    return res;
}

function insertionSort(arr) {
    let res = [...arr];

    for (let i = 1; i < res.length; i++) {

        let currentValue = res[i];
        let preIndex = i - 1;

        while (preIndex >= 0 && currentValue < res[preIndex]) {
            res[preIndex + 1] = res[preIndex];
            preIndex--;
        }

        res[preIndex + 1] = currentValue;

    }

    return res;
}

function quickSort(arr) {
    let res = [...arr];

    if (res.length <= 1) {
        return res;
    }

    let middleIndex = Math.floor(res.length / 2);
    let middleValue = res.splice(middleIndex, 1)[0];
    let left = [];
    let right = [];

    for (let item of res) {
        item < middleValue ? left.push(item) : right.push(item);
    }

    return [...quickSort(left), middleValue, ...quickSort(right)];
}

arrText.textContent = arr.join(",");
bubble.textContent = bubbleSort(arr).join(",");
selection.textContent = selectionSort(arr).join(",");
insertion.textContent = insertionSort(arr).join(",");
quick.textContent = quickSort(arr).join(",");