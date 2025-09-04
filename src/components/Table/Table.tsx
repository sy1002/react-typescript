import React from 'react';

function Table(props) {
    return (
        <>
            <table border={2}  onClickCapture={()=> console.log('table')}>
                <tbody onClickCapture={() => console.log('tbody')}>
                    {/*{props.children.map((child, index) => (*/}
                        <tr key={1} onClickCapture={() => console.log('tr')}>
                            <td onClickCapture={(event)=> {
                                // event.stopPropagation();
                                console.log('td');
                            }}>MIKE</td>
                        </tr>
                    {/*))}*/}
                </tbody>
            </table>
        </>
    );
}

export default Table;