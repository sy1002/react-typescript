import React, {CSSProperties} from 'react';


interface InlineProps {
    style: CSSProperties;
}

function Inline(props : InlineProps){
    const {style}  = props

    return (
        <div>
            <p style={style}> TEST!!!!!!</p>
        </div>
    );
}

export default Inline;