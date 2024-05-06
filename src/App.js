import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'},
    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <form action="">
                <MyInput
                    value={title}
                    onChange={({target: {value}}) => setTitle(value)}
                    type="text"
                    placeholder="Post name"
                />
                <MyInput
                    value={body}
                    onChange={({target: {value}}) => setBody(value)}
                    type="text"
                    placeholder="Post description"
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title={"Posts about JS"}/>
        </div>
    );
}

export default App;
