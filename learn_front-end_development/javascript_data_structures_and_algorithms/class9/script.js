// 平均数
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

//中位数
const getMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    const median =
        array.length % 2 === 0
            ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
            : sorted[Math.floor(array.length / 2)];
    return median;
}

// 众数
const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    })
    //如果都是同一个数字那么没有众数
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    //从大到小排序 获取数量最多的key值
    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];
    //众数可能有多个
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
}

// 值域
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
}

// 方差 数组中每个数字的值减数组的平均值的平方相加除以数组中数字的数量 
const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

//标准差 方差的平方根
const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
}