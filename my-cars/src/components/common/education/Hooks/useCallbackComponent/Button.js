import React from 'react'

function Button({children, handleCkick}) {

    console.log('Render button -', children);

    return (
        
        <>
            <button onClick={handleCkick}>{children}</button>
        </>
    )
}

export default React.memo(Button)
