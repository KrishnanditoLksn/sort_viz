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