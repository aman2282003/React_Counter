import { useEffect, useState } from "react";

function Timer(){
    const [count, setcount] = useState(100)
    const [Paused, setPaused] = useState(false);

    useEffect(() =>{
        let timerId;
        if(count > 0 && Paused == false){
         timerId = setTimeout(() => {
                setcount(count - 1)
            }, 1000) 
        } 
        return () => clearTimeout(timerId);
    },[count, Paused])


    return(
        <>
            <p>Count value is {count}</p>
            <button onClick={() => { setcount(100)}}>Reset Timer</button>
            <button onClick={() => {setPaused(true)}}>Pause</button>
            <button onClick={() => {setPaused(false)}}>Resume</button>
        </>
    );
}

export default Timer