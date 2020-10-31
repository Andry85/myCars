import React, {useState, useEffect} from 'react'
import UseDocumentTitle from './hooks/UseDocumentTitle';



const UseCustomeComponentTwo = () => {

    const [count, setCount] = useState(0);


    UseDocumentTitle(count)

    return (
        <>
          <button onClick={() => setCount(count+1)}>Count - {count}</button>
        </>
    )
}

export default UseCustomeComponentTwo


