import {useEffect, useState} from "react";
import '../App.css'
import Button from "./ui/Button.jsx";
import {bubbleSort, insertionSort} from "./utils/SortingAlgos.js";

export const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    /*
    Handle a reset array when a component is mounted
     */
    useEffect(() => {
        handleResetArray()
    }, []);

    const handleBubbleSortVisualizer = () => {
        const bubbleSortIterator = bubbleSort(array)
        for (let i = 0; i < bubbleSortIterator.length; i++) {
            setTimeout(() => {
                setArray(bubbleSortIterator[i])
            }, i)
        }
    }

    const handleInsertionSortVisualizer = () => {
        const insert = insertionSort(array)
        for (let i = 0; i < insert.length; i++) {
            setTimeout(() => {
                setArray(insert[i])
            }, i * 75)
        }
    }

    /*
    when the button is clicked, handleResetArray is called
     */
    const handleResetArray = () => {
        const newarray = [];
        for (let i = 0; i < 25; i++) {
            newarray.push(randomIntegerFromInterval(1, 1000));
        }
        alert("Generating New Array.......")
        setArray(newarray)
    }

    /*
    Return a div with array bars
     */
    return (
        <div className="container">
            <div className="sort-container">
                <Button onClick={handleResetArray} text="Generate New Array"></Button>
                <Button text="Merge Sort"></Button>
                <Button text="Quick  Sort"></Button>
                <Button onClick={handleInsertionSortVisualizer} text="Insertion Sort"></Button>
                <Button onClick={handleBubbleSortVisualizer} text="Bubble Sort"></Button>
            </div>
            <div className="array-bar-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style=
                        {
                            {
                                height: `${value}px`
                            }
                        }>
                    </div>
                ))}
            </div>
        </div>
    )
}

const randomIntegerFromInterval = (min, max) => {
    /*
    Return a random Integer between min ,  max
     */
    return Math.floor(Math.random() * (max - min + 1) + min);
}