import {useEffect, useState} from "react";
import '../App.css'
import Button from "./ui/Button.jsx";
import {bubbleSort} from "./utils/SortingAlgos.js";

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    /*
    Handle a reset array when a component is mounted
     */
    useEffect(() => {
        handleResetArray()
    }, []);

    let bubbleSortVisualizer = () => {
        const anima = bubbleSort(array)
        for (let i = 0; i < anima.length; i++) {
            setTimeout(() => {
                setArray(anima[i])
            }, i)
        }
    }

    /*
    when the button is clicked, handleResetArray is called
     */
    let handleResetArray = () => {
        const newarray = [];
        for (let i = 0; i < 100; i++) {
            newarray.push(randomIntegerFromInterval(100, 1000));
        }
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
                <Button onClick={bubbleSortVisualizer} text="Bubble Sort"></Button>
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

let randomIntegerFromInterval = (min, max) => {
    /*
    Return a random Integer between min ,  max
     */
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer