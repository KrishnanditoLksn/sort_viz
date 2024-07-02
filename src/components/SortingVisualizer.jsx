import {useEffect, useState} from "react";
import '../App.css'

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    /*
    Handle a reset array when a component is mounted
     */
    useEffect(() => {
        handleResetArray()
    }, []);

    /*
    when the button is clicked, handleResetArray is called
     */
    function handleResetArray() {
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
        <div className="array-container">
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
    )
}

function randomIntegerFromInterval(min, max) {
    /*
    Return a random Integer between min ,  max
     */
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer