import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Confirm = () => {
    const navigate = useNavigate();
    const submit = () => {
        confirmAlert({
            title: 'Navigate Page',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Weather',
                    onClick: () => navigate('/weather'),
                },
                {
                    label: 'Shop',
                    onClick: () => navigate('/shop')
                }
            ]
        });
    };

    return (
        <div className='container'>
            <button onClick={submit}>Confirm dialog</button>
        </div>
    );
}

export default Confirm;