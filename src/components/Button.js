import React from "react";


function Button({disabled}) {
    return (
      <button onClick={() =>
        console.log("je tekst")}
            disabled={disabled}>tekst
    </button>
    );
}



export default Button;