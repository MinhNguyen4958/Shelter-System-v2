import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';

export default function manageCustomer() {
    return (
        <div>
            <Head>
                <title>Manage Customer</title>
            </Head>

            <Nav />

            {/* ID and Log */}
            <div className={styles.container}>
                <h1>Manage a Customer</h1>
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
                        <div className={styles.formItem}>
                            <label>Log<span class="reqField">*</span></label>
                            <textarea
                                name="log"
                                placeholder="Post content"
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