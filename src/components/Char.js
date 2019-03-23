import React from 'react';

const style = {
    display:"inline-block",
    padding:"15px",
    textAlign:"center",
    margin:"16px",
    border:"2px solid black"
};

const Char = (props) => {
    return (
        <div style={style} onClick={props.click}>
            {props.letter}
        </div>
    )
};


export default Char;