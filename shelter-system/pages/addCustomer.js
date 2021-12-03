import { useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';

export default function addCustomer({ rooms }) {
    const router = useRouter();

    const newCustomer = async (e) => {
        e.preventDefault();
        let data = {
            name: e.target.customer_name.value,
            room_num: e.target.room_num.value,
            log: e.target.log.value
        }
        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        // check for special characters and if ID is a number
        if ((!format.test(data.name) && data.name != "") && data.log != "") {
            const response = await fetch('/api/newCustomer', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await response.json();
            console.log(resp);
            e.target.customer_name.value = "";
            e.target.room_num.value = "";
            e.target.log.value = "";
            router.replace(router.asPath);
        }
        else {
            alert("Please fill in all of the text boxes.");
        }
    }

    return (
        <div>
            <Head>
                <title>Add Customer</title>
            </Head>
            <Nav />

            {/* Name and Log. */}
            <div className={hStyles.container}>
                <h1>Add a New Customer</h1>
            </div>

            <div className={styles.container}>
                <form className={styles.form} onSubmit={newCustomer}>
                    <div className={styles.formItem}>
                        <label>Name<span className="reqField">*</span></label>
                        <input
                            type="text"
                            name="customer_name"
                            placeholder="title"
                            id="customer_name"
                        />
                    </div>

                    <div className={styles.formItem}>
                        <div className={styles.formItem}>
                            <label>Room Number</label>
                            <label>
                                <select id="room_num" selected="0">
                                    {rooms.map(room =>
                                        <option key={room} value={room}>{`${room}`}</option>
                                    )}
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className={styles.formItem}>
                        <div className={styles.formItem}>
                            <label>Log</label>
                            <textarea
                                name="log"
                                placeholder="Post content"
                                id="log"
                            />
                        </div>
                    </div>

                    <div className={styles.formItem}>
                        <button type="submit">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch('http://server:8080/roomList');
    const rooms = await response.json();
    return { props: { rooms } }
}