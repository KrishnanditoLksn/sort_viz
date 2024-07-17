import {bubbleSort, insertionSort} from "../components/utils/SortingAlgos.js";
// eslint-disable-next-line no-undef
import nano from 'nano-time'

export function areArrayEquals(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] === arr2[j]) {
                return true
            }
        }
    }
    return false
}

export function a(){
    
}

console.log(nano.microseconds())
let arr = [5, 2, 4, 6, 3]
console.log(insertionSort(arr))
console.log(bubbleSort(arr))
console.log(nano.microseconds())