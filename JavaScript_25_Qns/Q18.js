// // Write a JavaScript function to find the most frequent item in an array...........

function findMostFrequentElm(arr) {
    let freq = {};
    arr.forEach((element) => {
        if (freq.hasOwnProperty(element)) {
            freq[element]++;
        } else {
            freq[element] = 1;
        }
    });

    let maxFreq = 0;
    let mostFrequentElement;

    for (let key in freq) {
        if (freq[key] > maxFreq) {
            maxFreq = freq[key];
            mostFrequentElement = key;
        }
    }

    return mostFrequentElement;
}

let arr = [1, 2, 2, 4, 5, 3, 3, 3, 5, 6, 4, 7, 12, 4, 4, 4, 4];
console.log(findMostFrequentElm(arr));