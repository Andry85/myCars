import React from 'react'

function Paragraph({text, title}) {
    console.log('Render Paragraph');
    return (
        <>
           <span>{text}</span> 
            <p>{title}</p>
        </>
    )
}

export default React.memo(Paragraph)
