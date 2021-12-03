import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Head from 'next/head';
import Image from 'next/image';

// A post form that will add a new post
export default function addStaff({ positions }) {
    const [position, setPosition] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
        e.preventDefault();
        let data = {
            name: e.target.staff_name.value,
            position: e.target.position.value
        }

        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!format.test(data.name) && data.name != "") {
            const response = await fetch('/api/newStaff', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await response.json();
            console.log(resp);

            // clear the fields
            e.target.staff_name.value = "";
            e.target.position.value = "Manager";
        } else {
            alert('All fields are required')
        }
    }

    return (
        <div >
            <Head>
                <title>Add Staff</title>
            </Head>
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
                        <label >Name<span class="reqField">*</span></label>
                        <input
                            type="text"
                            name="name"
                            id="staff_name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Input Name:"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <label>Position<span class="reqField">*</span></label>
                        <label>
                            <select id="position" selected="0">
                                {positions.map(position =>
                                    <option key={position.position} value={position.position}>{`${position.position}`}</option>
                                )}
                            </select>
                        </label>
                    </div>

                    <div className={styles.formItem}>
                        <button type="submit">Add Staff</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch('http://server:8080/positionList');
    const positions = await response.json();
    return { props: { positions } }
}