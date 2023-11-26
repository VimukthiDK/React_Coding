import { useState } from "react";


function Count() {

    const [count,setCount] = useState(0);

    const handleClick = () =>{
            setCount(count + 1);
            
    };

    /* how to use ternary oparator ....

    return (
            <>
            {count > 10 ? <p> Stop ... !</p> : <p> Count = {count} </p> }
            <button id="btn1" onClick={handleClick} disabled={count > 10 }>Add</button>
            </>
        );


    */
    
    if (count > 10)
    {
        return (
            <>
            <p>Stop ...!</p>
            <button id="btn1" onClick={handleClick} disabled={count > 10 }>Add</button>
            </>
        );         
        
    }
    else
    {
        return (
            <>
            <p>Count {count}</p>
            <button id="btn1" onClick={handleClick} disabled={count > 10 }>Add</button>
            </>
        );
        
    }

}

export default Count;