import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';

// A post form that will add a new post
export default function AddPost() {
    const [position, setPosition] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // Reset error and message
        setError('');
        setMessage('');

        // Check the fields
        if (!position || !name)
        {
            return setError('All fields are required');
        }
    };

        return (
            <div>
                <Nav />
                <div className={styles.container}>
                    <form onSubmit={handlePost} className={styles.form}>
                        {error ? (
                            <div className={styles.formItem}>
                                <h3 className={styles.error}>{error}</h3>
                            </div>
                        ) : null}
                        {message ? (
                            <div className={styles.formItem}>
                                <h3 className={styles.message}>{message}</h3>
                            </div>
                        ) : null}
                        <div className={styles.formItem}>
                            <label>Position</label>
                            <input
                                type="text"
                                position="position"
                                onChange={(e) => setPosition(e.target.value)}
                                value={position}
                                placeholder="Input Position: //TODO MAKE THIS DROPDOWN MENU"
                                />
                        </div>
                        <div className={styles.formItem}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Input Name:"
                                />
                        </div>
                        <div className={styles.formItem}>
                            <button type="submit">Add Staff</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}