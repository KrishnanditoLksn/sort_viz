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

export const mergeSort = () =>{
    
}

function mergeSortHelper(){
    
}


function merge(arr , p , q , r){
    let l = q- p + 1
}