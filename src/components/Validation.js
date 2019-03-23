import React from 'react';

const Validation = (props) => {
    // default no text
    let text = null;
    // check based on prop length
    if(props.length <= 0) {
        text="";
    }
    else if(props.length > 0 && props.length < 5){
        text = "Text Too Short";
    }else {
        text = "Text Long Enough!"
    }

    return (
        <p style={{color: props.color}}>
            {text}
        </p>
    );
}

export default Validation;