import React, {useState} from 'react';
import styles from './useStateComponent.module.scss';

function UseStateComponent() {

    const initialState = {
        firstName: '',
        lastName: ''
    }

    const [name, setName] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(JSON.stringify(name));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})} />
                <input type="submit" value="Отправить" />
            </form>
        </div>
    )
}

export default UseStateComponent
