const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown")
    ].map((dropdown) => Number(dropdown.value));

    const sortedValues = insertionSort(inputValues);

    updateUI(sortedValues);
}

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
}

//冒泡排序
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

//选择排序
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
}

//插入排序
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        //当前值
        const currValue = array[i];
        //start 向前查找如果之前的值比当前大则往后移动一位
        let j = i - 1;
        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j];
            j--;
        }
        //end
        //将当前值赋给最后移动的位置
        array[j + 1] = currValue;
    }
    return array;
}

sortButton.addEventListener("click", sortInputArray);