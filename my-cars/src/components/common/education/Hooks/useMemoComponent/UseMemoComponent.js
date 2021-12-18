import React, {useState, useMemo} from 'react'



function UseMemoComponent() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


    const isEven = useMemo(() => {
        let i = 0;
        while( i < 200000000) i++
        console.log('useMemo run');
        return  counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <div>
                <button onClick={incrementOne}>Counter one - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Counter two - {counterTwo}</button>
            </div>
        </>
    )
}

export default UseMemoComponent
