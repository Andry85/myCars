import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from './index'


function PostsContainer({postData, fetchPosts}) {

    


    useEffect(() => {
        fetchPosts();
    }, [])

    

    return postData.loading ? (
        <h2>Loading</h2>
    ) : postData.error ? (
        <h2>{postData.error}</h2>
    ) : (
        <div>
            <h2>Post List</h2>
            <div>
                {
                    postData && postData.posts && postData.posts.map((post, i) => (
                        <div key={post.id}>
                            <p>Id: {post.id}</p>
                            <p>Title: {post.title}</p>
                            <p>Text: {post.body}</p>
                        </div>

                    ))
                } 
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        postData: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)

