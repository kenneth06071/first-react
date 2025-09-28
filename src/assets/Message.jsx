export default function Message (){
    function handleclick(){
        console.log("Buttom is clicked!");
    }
    return(
        <div>
            <button onClick = {handleclick}>Click to get the Message</button>
        </div>
    )
}