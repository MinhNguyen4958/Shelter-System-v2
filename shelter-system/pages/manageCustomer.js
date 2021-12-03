import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Image from 'next/image';

export default function manageCustomer() {

    const updateCustomer = async (e) => {
        e.preventDefault();
        let data = {
            id: e.target.id.value,
            log: e.target.log.value
        }
        const response = await fetch('/api/updateCustomer', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        const resp = await response.json();
        console.log(resp);

        e.target.id.value = "";
        e.target.log.value = "";
    }

    return (
        <div>
            <Head>
                <title>Manage Customer</title>
            </Head>

            <Nav />

            {/* ID and Log */}
            <div className={hStyles.container}>
                <h1>Manage a Customer</h1>
            </div>

            <div className={styles.container}>
                <form className={styles.form} onSubmit={updateCustomer}>
                    <div className={styles.formItem}>
                        <label>ID<span className="reqField">*</span></label>
                        <input
                            type="text"
                            name="id"
                            placeholder="Enter a valid customer ID"
                            id="id"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <div className={styles.formItem}>
                            <label>Log<span className="reqField">*</span></label>
                            <textarea
                                name="log"
                                placeholder="Add to the customer's log"
                                id="log"
                            />
                        </div>
                    </div>

                    <div className={styles.formItem}>
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}