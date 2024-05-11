import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title={"Posts about software engineering"} remove={removePost}/>
        </div>
    );
}

export default App;
