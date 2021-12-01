import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Header.module.css';

// A post form that will add a new post
export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // Reset error and message
        setError('');
        setMessage('');

        // Check the fields
        if (!title || !content)
        {
            return setError('All fields are required');
        }
    };

        return (
            <div>
                <Nav />
                <div className={styles.container}>
                    <h1>List of staff members</h1>
                </div>
            </div>
    );
}