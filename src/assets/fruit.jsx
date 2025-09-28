export default function fruit(){
    const fruit = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    return(<div>
        <ul>
        {fruit.map(fruit=>
            (<li key = {fruit}>{fruit}</li>)
        )}
        </ul>
    </div>

    )

}