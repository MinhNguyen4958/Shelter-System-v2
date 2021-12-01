import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';

// A post form that will add a new post
export default function AddPost() {
    const [ID, setID] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();

        // Reset error and message
        setError('');
        setMessage('');

        // Check the fields
        if (!ID)
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
                            <label>ID<span class="reqField">*</span></label>
                            <input
                                type="text"
                                ID="ID"
                                onChange={(e) => setID(e.target.value)}
                                value={ID}
                                placeholder="Input ID: //TODO MAKE THIS DROPDOWN MENU"
                                />
                        </div>
                        <div className={styles.formItem}>
                            <button type="submit">Find Staff</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}