import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addPost} from './index'
import styles from './AddingPost.module.scss';


function AddingPost({addPost}) {

    const initialState = {
        userId: 0,
        title: '',
        body: ''
    }

    const [name, setName] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();

        addPost(name);
    }


    

    return (
        <> 
            <form onSubmit={handleSubmit}>
                <div className={styles.commitForm}>
                    <input 
                        className={styles.commitForm__text} 
                        value={name.title} 
                        type="text"
                        onChange={(e) => setName({...name, title: e.target.value})}
                    />
                    <textarea 
                        className={styles.commitForm__area} 
                        value={name.body} 
                        onChange={(e) => setName({...name, body: e.target.value})}
                    />
                    <input className={styles.commitForm__submit} type="submit" value="Submit" />
                </div>
            </form>
        </>
    );
}




const mapDispatchToProps = dispatch => {
    return {
        addPost: (name) => dispatch(addPost(name))
        
    }
}

export default connect(null, mapDispatchToProps)(AddingPost)

