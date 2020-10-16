import React, { Component } from 'react';
import axios from 'axios';

class GetData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((respond)=> {
            console.log(respond);
            this.setState({
                posts: respond.data 
            });
        })
    }
    
    render() {
        return (
            <div>
                {this.state.posts.map(post => <p kye={post.id}>{post.body}</p>)}
            </div>
        )
    }
}

export default GetData
