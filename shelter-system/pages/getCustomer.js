import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Image from 'next/image';


export default function getCustomer() {
    const CustomerInfo = async (e) => {
        e.preventDefault();
        let data = {
            id: e.target.id.value
        }

        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!format.test(data.id) && !isNaN(data.id) && data.id != 0) {
            const response = await fetch('/api/getCustomer', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json'}
            });
            const resp = await response.json();
            console.log(resp);

            // clear the fields
            e.target.id.value = "";
        } else {
            alert("Please try again");
        }
    }

    return (
        <div>
            <Head>
                <title>Get a Customer</title>
            </Head>

            <Nav />

            {/* ID */}
            <div className={hStyles.container}>
                <h1>Get a Customer</h1>
            </div>

            <div className={styles.container}>
                <form className={styles.form} onSumbit={CustomerInfo}>
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
                            <button type="submit">Get</button>
                    </div>

                </form>
            </div>
        
        </div>
    );
}