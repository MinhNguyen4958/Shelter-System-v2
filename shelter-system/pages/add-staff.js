import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Head from 'next/head';
import Image from 'next/image';

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
            <div >
                <Head>
                    <title>Add Staff</title>
                </Head>
                <Image 
                    classname={styles.landingImage}
                    src="/../public/beachshowcase.jpg"
                    layout="fill"
                    objectFit="cover"
                    position="absolute"
                    />
                <Nav />
                {/* Name and Log. */}
                <div className={hStyles.container}>
                    <h1>Add a New Staff</h1>
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
                            <label>Position<span class="reqField">*</span></label>
                            <input
                                type="text"
                                position="position"
                                onChange={(e) => setPosition(e.target.value)}
                                value={position}
                                placeholder="Input Position: //TODO MAKE THIS DROPDOWN MENU"
                                />
                        </div>
                        <div className={styles.formItem}>
                            <label >Name<span class="reqField">*</span></label>
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