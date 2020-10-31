import React, {useState, useEffect, useRef} from 'react'



function UseRefComponent() {

    const [timer, setTimer] = useState(0);
    const intervaRef = useRef();



    

    useEffect(() => {
        intervaRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervaRef.current)
        }

    }, [])



    return (
        <>
            {timer}
            <button onClick={()=> clearInterval(intervaRef.current)}>Clear Intervat</button>
        </>
    )
}

export default UseRefComponent
