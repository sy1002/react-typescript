import React from 'react';

function FormV2(props) {
    return (
        <form onSubmit={(event)=> event.preventDefault()}>
            <a href="https://naver.com" onClick={(event) => event.preventDefault()}>
                NAVER
            </a>
            <button type="submit">SUBMIT</button>
        </form>
    );
}

export default FormV2;