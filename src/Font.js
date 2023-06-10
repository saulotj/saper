import React from "react";
import './Font.css';

function Font(){
    return(
        <div>
            <h2>Examples of Text Formatting with CSS:</h2>
            <p className="font-segoe">font-family, font-size (xx-large), color, text-shadow (A CSS3 feature)</p>
            <br></br>
            <p className="font-franklin">font-family, color, font-variant (small caps),  width, background-color, 
                text-align(center in width)
            </p>
            <br></br>
            <p className="font-cambria ">font-family, font-size (x-small), color, font-weight (bolder), font-style (italic),
                text-align(center)
            </p>
            <br></br>
            <p className="font-tangerine">font-familu (downloaded Tangerine), font-size (x-large),color, text-align (right)</p>
        </div>
        );
}

export default Font;