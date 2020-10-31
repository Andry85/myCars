import React from 'react'

function Count({text, count}) {
    console.log(`Render ${text}`);
    return (
        <>
           <h1>{text} - {count}</h1> 
        </>
    )
}

export default React.memo(Count)
