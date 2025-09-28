export default function Fruit({name, price, emoji, soldout}) {
    return (
        <>
         <li>{name} -- {price} {emoji} {soldout ? "Sold Out" : ""}</li>
        </>

    );
}
