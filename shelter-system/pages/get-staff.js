import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Head from 'next/head';
import Image from 'next/image';



// A post form that will add a new post
export default function AddPost() {
    const [id, setID] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();
        let data = {
            id: e.target.id.value
        }

        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!format.test(data.id) && !isNaN(data.id) && data.id != 0) {
            const response = await fetch('/api/getStaff', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json'}                
            })
            const resp = await response.json();
            console.log(resp);

            // clear the fields
            e.target.id.value = "";
        } else {
            alert("Please try again!");
        }

        // Reset error and message
        setError('');
        setMessage('');

        // Check the fields
        if (!id)
        {
            return setError('All fields are required');
        }
    };

        return (
            <div>
                <Nav />
                
                {/* Name and Log. */}
                <div className={hStyles.container}>
                    <h1>Find Staff</h1>
                </div>
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
                                id="id"
                                onChange={(e) => setID(e.target.value)}
                                value={id}
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