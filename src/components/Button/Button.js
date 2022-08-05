import React from "react";
import PropTypes from "prop-types";

function Button({label="button", backgroundColor="#7f5af0", size="md", onClick}){
    let scale=1
    if(size == "sm") scale = 0.5
    if(size == "md") scale = 1.5
    const style={
        backgroundColor,
        padding: `${scale*0.5}rem ${scale*1.5}rem`,
        border:"none",
        color:"#fffffe",
        fontSize:"1rem",
        fontWeight:"Bold",
        borderRadius:"5px",
        cursor:"pointer",
        textDecoration:"none",
    }

    return(
        <button onClick={onClick} style={style}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label:PropTypes.string,
    backgroundColor:PropTypes.string,
    size:PropTypes.oneOf(["sm","md","lg"]),
    onClick:PropTypes.func,
}

export default Button;