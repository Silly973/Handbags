import React from "react";



function Tile({ image, text, title, children, story}) {
    return (
        <section>
            <img src={image} alt={text}/>
            <h2>{title}</h2>
            {children}
            <p>{story}</p>
        </section>
    )
}


export default Tile;