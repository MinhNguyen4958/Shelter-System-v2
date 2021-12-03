import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Image from 'next/image';
import Head from 'next/head';



// A post form that will add a new post
export default function AddPost() {
    const [ID, setID] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();
        let data =  {
            deleteStaffID: e.target.staffID.value
        }

        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!format.test(data.deleteStaffID) && !isNaN(data.deleteStaffID) && data.deleteStaffID != 0) {
            const response = await fetch('/api/deleteStaff', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json'}
            });
            const resp = await response.json();
            console.log(resp);
            
            // clear the fields
            e.target.staffID.value = "";
        
        } else {
            alert('please try again');
        }
    }

        return (
            <div>
                <Nav />
                {/* Name and Log. */}
                <div className={hStyles.container}>
                    <h1>Delete an existing staff member</h1>
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
                                id="staffID"
                                onChange={(e) => setID(e.target.value)}
                                value={ID}
                                placeholder="Input ID: //TODO MAKE THIS DROPDOWN MENU"
                                />
                        </div>
                        <div className={styles.formItem}>
                            <button type="submit">Delete Staff</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}