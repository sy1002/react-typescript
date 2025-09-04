import React from 'react';

function StatePracticeV2(props) {
    const [name, setName] = React.useState<string>('mike');

    const handleSetToJane = () => {
        setName('jane');
        console.log(`Name changed to: ${name}`);
    }

    return (
        <>
            <div>
                <h1>State Practice V2</h1>
                <p>Name: {name}</p>
                <button onClick={handleSetToJane}>Change Name to Jane</button>

            </div>
        </>
    );
}

export default StatePracticeV2;