import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostRequestHooks() {
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { title: 'React Hooks POST Request Example' };
        axios.post('https://reqres.in/api/articles', article)
            .then(response => setArticleId(response.data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {articleId}
            </div>
        </div>
    );
}

export { PostRequestHooks };