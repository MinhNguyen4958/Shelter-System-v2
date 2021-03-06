import { useState } from 'react';
import { useRouter } from 'next/router';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';

export default function manageStaff({ positions }) {
    const router = useRouter();

    const updateStaff = async (e) => {
        e.preventDefault();
        let data = {
            id: e.target.id.value,
            position: e.target.position.value
        }
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if ((!format.test(data.id) && !isNaN(data.id) && data.id != 0 && data.position != "")) {
            const response = await fetch('/api/updateStaff', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await response.json();
            console.log(resp);
            e.target.id.value = "";
            e.target.position.value = "";
            router.replace(router.asPath);
        }
        else {
            alert("Please fill in all of the inputs.");
        }
    }

    return (
        <div>

            <Nav />

            {/* Name and Log. */}
            <div className={hStyles.container}>
                <h1>Change Staff Position</h1>
            </div>
            <div className={styles.container}>
                <form onSubmit={updateStaff} className={styles.form}>
                    <div className={styles.formItem}>
                        <label>ID<span className="reqField">*</span></label>
                        <input
                            type="text"
                            id="id"
                            placeholder="Input ID:"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Position<span class="reqField">*</span></label>
                        <label>
                            <select id="position">
                                <option value="" defaultValue>Select a Position</option>;
                                {positions.map(position =>
                                    <option key={position.position} value={position.position}>{`${position.position}`}</option>
                                )}
                            </select>
                        </label>
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Change Position</button>
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