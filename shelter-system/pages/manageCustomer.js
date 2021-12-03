import { useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';

export default function manageCustomer({ rooms }) {
    const router = useRouter();

    const updateCustomer = async (e) => {
        e.preventDefault();

        let room = e.target.room_num.value;
        let log = e.target.log.value;
        if (room == "") {
            room = null;
        }
        if (log == "") {
            log = null;
        }

        let data = {
            id: e.target.id.value,
            newRoom: room,
            log: log
        }

        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (!format.test(data.id) && !isNaN(data.id) && data.id != 0) {

            const response = await fetch('/api/updateCustomer', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await response.json();
            console.log(resp);

            e.target.id.value = "";
            e.target.log.value = "";
            e.target.room_num.value = "";
            router.replace(router.asPath);
        }
        else {
            alert("Please enter a valid customer ID")
        }
    }

    const checkoutCustomer = async (e) => {
        e.preventDefault();

        let data = {
            id: document.getElementById("id").value
        }

        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (!format.test(data.id) && !isNaN(data.id) && data.id != 0) {

            const response = await fetch('/api/checkoutCustomer', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            const resp = await response.json();
            console.log(resp);

            document.getElementById("id").value = "";
            document.getElementById("log").value = "";
            document.getElementById("room_num").value = "";
            router.replace(router.asPath);
        }
        else {
            alert("Please enter a valid customer ID")
        }
    }

    return (
        <div>
            <Head>
                <title>Manage Customer</title>
            </Head>

            <Nav />

            {/* ID, Room, and Log */}
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
                            <label>Room Number</label>
                            <label>
                                <select id="room_num">
                                    <option value="" defaultValue>Update Room Number</option>
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
                                placeholder="Add to the customer's log"
                                id="log"
                            />
                        </div>
                    </div>

                    <div className={styles.formItem}>
                        <button type="submit">Submit</button><span> </span>
                        <button onClick={checkoutCustomer}>Checkout Customer</button>
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