import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';


export default function deleteCustomer() {
    return (
        <div>
            <Head>
                <title>Delete a Customer</title>
            </Head>

            <Nav />

            {/* ID */}
            <div className={hStyles.container}>
                <h1>Delete a Customer</h1>
            </div>

            <div className={styles.container}>
                <form className={styles.form}>
                    <div className={styles.formItem}>
                        <label>ID<span class="reqField">*</span></label>
                        <input
                            type="text"
                            name="id"
                            placeholder="title"
                            id="id"
                        />
                    </div>

                    <div className={styles.formItem}>
                            <button type="submit">Delete</button>
                    </div>

                </form>
            </div>
        </div>
    );
}