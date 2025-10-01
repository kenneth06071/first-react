import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(0);

    function handleClickInc(){
        setCount(count + Number(incrementBy));
    }
    function handleClickDec(){
        setCount(count - Number(incrementBy));
    }
    return( 
    <div>
        <h1>Counter value is : {count}</h1>
        <button onClick = {handleClickInc}>Increment</button>
        <button onClick = {handleClickDec}>Decrement</button>
        <h2>We are incrementing by {incrementBy}</h2>
        <form>
            <input onChange = {(e)=>setIncrementBy(e.target.value)} type = "number" value = {incrementBy} />
        </form>
    </div>
    )
}
