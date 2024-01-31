import { useEffect, useState } from "react";

function Timer(){
    const [count, setcount] = useState(50)
    const [Paused, setPaused] = useState(false);

    useEffect(() =>{
        let timerId;
        if(count > 0 && Paused == false){
         timerId = setInterval(() => {
                setcount((prev) => prev-1)
            }, 1000) 
        } 
        return () => clearTimeout(timerId);
    },[Paused, count])


    return(
        <>
            <p>Count value is {count}</p>
            <button onClick={() => { setcount(50)}}>Reset Timer</button>
            <button onClick={() => {setPaused(true)}}>Pause</button>
            <button onClick={() => {setPaused(false)}}>Resume</button>
        </>
    );
}

export default Timer