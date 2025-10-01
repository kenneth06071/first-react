import { useState } from "react";

export default function Form() {
    const [name, setName] = useState({firstname: '', lastname: ''});
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div>
            <form>
                <input
                    onChange = {(e) => setName({...name, firstname: e.target.value})}
                    type = 'text'
                    value = {name.firstname}
                />
                <input
                    onChange = {(e) => setName({...name, lastname: e.target.value})}
                    type = 'text'
                    value = {name.lastname}
                />
                <h2>Your first name is {name.firstname}</h2>
                <h2>Your last name is {name.lastname}</h2>
                <button onClick={(e)=>handleSubmit(e)}>Add</button>
                    
            </form>
        </div>
    )
}