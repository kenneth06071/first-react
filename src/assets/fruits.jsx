import Fruit from "./fruit";
export default function Fruits(){
    const fruit= [
        {name: "Apple", price: 3, emoji: "🍎", soldout: true},
        {name: "Banana", price: 4, emoji: "🍌", soldout: false},
        {name: "Orange", price: 5, emoji: "🍊", soldout: true},
        {name: "Grapes", price: 41, emoji: "🍇", soldout: false},
        {name: "Pineapple", price: 12, emoji: "🍍", soldout: true},        
    ]

    return(<div>
        <ul>
        {fruit.map(fruit=>
            (<Fruit name={fruit.name} price={fruit.price} emoji={fruit.emoji} soldout = {fruit.soldout} />)
        )}
        </ul>
    </div>

    )

}