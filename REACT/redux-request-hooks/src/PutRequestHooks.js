import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PutRequestHooks() {
    const [updatedAt, setUpdatedAt] = useState(null);

    useEffect(() => {
        // PUT request using axios inside useEffect React hook
        const article = { title: 'React Hooks PUT Request Example' };
        axios.put('https://reqres.in/api/articles/1', article)
            .then(response => setUpdatedAt(response.data.updatedAt));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">PUT Request with React Hooks</h5>
            <div className="card-body">
                Returned Update Date: {updatedAt}
            </div>
        </div>
    );
}

export { PutRequestHooks };