export default function ConditionalComponent(){
    const display = false;
    if (display){
        return(
        <div>
            <h3> This is false</h3>; 
        </div> );
    }
    else {
        return( 
        <div>
            <h3>learning react</h3>
        </div>
        );
    };
}