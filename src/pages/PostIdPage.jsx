import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostsById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>You opened post page with ID = {params.id}</h1>
            {isLoading
                ? <h1>Loading...</h1>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading
                ? <h1>Loading...</h1>
                : <div>
                    {comments.map(comment => (
                        <div key={comment.id} style={{marginTop: 15}}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default PostIdPage;