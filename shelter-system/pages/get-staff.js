import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';

// A post form that will add a new post
export default function getStaff() {
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
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await response.json();
            if (resp.status == "failure") {
                e.target.name.style.visibility = "hidden";
            }
            else {
                e.target.name.value = `Name: ${resp.name}\nID: ${resp.id}\nPosition: ${resp.position}`;
                e.target.name.style.visibility = "visible";
            }

            // clear the fields
            e.target.id.value = "";
        } else {
            alert("Please try again!");
        }

        // Reset error and message
        setError('');
        setMessage('');

        // Check the fields
        if (!id) {
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
                            placeholder="Input ID"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Find Staff</button><br/><br></br>
                    </div>
                    <div className={styles.formItem}>
                        <textarea id="name" rows="3" readOnly style={{ visibility: "hidden" }} /> <br />
                    </div>
                </form>
            </div>
        </div>
    );
}