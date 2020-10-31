import React, {useState, useEffect} from 'react'
import styles from './UseEffectComponent.module.scss';
import axios from 'axios';

function UseEffectComponent() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const [id, setId] = useState(1);
    const [data, setData] = useState({});

    useEffect(() => {
        console.log('useEffect - fetching data');

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {

            setData(res.data);
      
        });
        
    }, [id])

    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `You clicked ${count} times`;
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>

            <div className={styles.formWrap}>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </div>
    )
}

export default UseEffectComponent
