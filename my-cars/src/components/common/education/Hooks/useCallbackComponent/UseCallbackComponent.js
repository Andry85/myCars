import React, {useState, useCallback} from 'react'

import Count from './Count';
import Buttom from './Button';
import Paragraph from './Paragraph';

function UseCallbackComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary =  useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])


    

   


    return (
        <div>
            <Count text="Age" count={age}></Count>
            <Buttom handleCkick={incrementAge}>incrementAge</Buttom>
            <br/>
            <Count text="Salary" count={salary}></Count>
            <Buttom handleCkick={incrementSalary}>incrementSalary</Buttom>
        </div>
    )
}

export default UseCallbackComponent
