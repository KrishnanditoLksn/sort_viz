export const bubbleSort = (array) => {
    //create an animation array
    const animation = []
    if (array.length <= 1) {
        return [0, 0]
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                animation.push(array.slice())
            }
        }
    }
    return animation
}

export const insertionSort = (array) => {
    const animation = []
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j = j - 1
            animation.push(array.slice())
        }
        array[j + 1] = key
        animation.push(array.slice())
    }
    return animation
}

export const mergeSort = (arr) => {
    const animation = []
    if (arr.length <= 1) {
        return arr
    }
    const auxArray = arr.slice()
    /*
    call merge sort helper function
     */
    mergeSortHelper(
        arr,0,arr.length - 1 ,auxArray,animation
    )
    return animation
}


function mergeSortHelper(
    array,
    left,
    right,
    auxiliaryArray,
    animations
) {
    if (left === right) return [];
    const mid = Math.floor((left + right) / 2)
    mergeSortHelper(auxiliaryArray, left, mid, array, animations)
    mergeSortHelper(auxiliaryArray, mid + 1, right, array, animations)
    /*
    call merge function
     */
    merge(
        array, left, mid, right, auxiliaryArray, animations
    )
}

function merge(
    array, startIdx, midIdx, endIdx, tempArray, animations
) {
    let k = startIdx
    let i = startIdx
    let j = midIdx + 1

    while (i <= midIdx && j <= endIdx) {
        const animation = {}
        animation.comparison = [i, j]
        if (
            tempArray[i] <= tempArray
        ) {
            animation.swap = [k, i]
            array[k++] = tempArray[i++]
        } else {
            animation.swap = [k, j]
            array[k++] = tempArray[j++]
        }
    }
    while (i <= midIdx) {
        animations.push(
            {
                comparison: [i, i],
                swap: [k, i]
            }
        )
        array[k++] = tempArray[i++]
    }

    while (j <= midIdx) {
        animations.push(
            {
                comparison: [j, j],
                swap: [k, j]
            }
        )
        array[k++] = tempArray[j++]
    }
}