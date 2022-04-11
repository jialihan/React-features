import React, { useState, useCallback } from 'react';
import Modal from './component/Modal/Modal';
import List from './component/List/List';
import './App.css';
function handleErrors(resp) {
    if (!resp.ok) {
        throw new Error(resp.status);
    }
    return resp.json();
}
function App() {
    const [selectedId, setSelectedId] = useState(null);
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = useCallback(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(handleErrors)
            .then((data) => {
                // console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);
    const closeModal = useCallback(() => {
        console.log('modal closed !');
        setOpen(false);
    }, []);
    const openModal = useCallback((itemId) => {
        console.log('open modal, item id = ', itemId);
        setSelectedId(itemId);
        setOpen(true);
    }, []);

    const onDeleteItemHandler = () => {
        if (selectedId) {
            let newPosts = posts.filter((p) => p.id !== selectedId);
            setPosts(newPosts);
            console.log('deleted item: ', selectedId);
            setSelectedId(null);
            setOpen(false);
        }
    };
    return (
        <div className="App">
            <Modal
                open={open}
                onCloseHandler={closeModal}
                onDeleteItem={onDeleteItemHandler}
            />
            <button onClick={fetchData}>Click to Fetch Data</button>
            {loading && <div> is loading ...</div>}
            {error && <div> {error}</div>}

            <List items={posts} openModal={openModal} />
        </div>
    );
}

export default App;
