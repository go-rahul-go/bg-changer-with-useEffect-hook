
import { useState, useEffect } from "react";
import "../style.css"


const Button = () => {
    const [count, setCount] = useState(0);
    const [color, updateColor] = useState("white")

    useEffect(() => {
        const arrayOfColors = ["#ff6600", "#cc0099","#ff9933","#99cc00","#3366ff","#ff66cc","#333300","#33cc33","#00ccff"]
        let random = Math.floor(Math.random() * arrayOfColors.length)
        updateColor(arrayOfColors[random])
        
        // console.log(arrayOfColors[random])
    }, [count]);

    return (
        <div id="btn-box" style={{ backgroundColor: color,border:"2px solid black" }}>
            <button onClick={() => setCount(count + 1)}>Change Color</button>
        </div>
    );
}


export default Button;