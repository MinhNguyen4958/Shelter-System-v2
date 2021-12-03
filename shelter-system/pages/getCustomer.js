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
            if (resp.status == "failure") {
                e.target.name.style.visibility = "hidden";
            }
            else {
                e.target.name.value = `Name: ${resp.name}\nID: ${resp.id}\nRoom Number: ${resp.room_num}\nCheck In: ${resp.check_in}\nCheck Out: ${resp.check_out}\nLog: ${resp.log}`;
                e.target.name.style.visibility = "visible";
            }

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
                <form className={styles.form} onSubmit={CustomerInfo}>
                    <div className={styles.formItem}>
                        <label>ID<span class="reqField">*</span></label>
                        <input
                            type="text"
                            name="id"
                            placeholder="Enter a valid customer ID"
                            id="id"
                        />
                    </div>

                    <div className={styles.formItem}>
                            <button type="submit">Get</button><br/><br></br>
                    </div>
                    <div className={styles.formItem}>
                        <textarea id="name" rows="9" readOnly style={{ visibility: "hidden" }} /> <br />
                    </div>

                </form>
            </div>
        
        </div>
    );
}