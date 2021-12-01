import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';

export default function customers() {
    return (
        <div>
            <Head>
                <title>Customers</title>
            </Head>

            <Nav />

            <div className={styles.container}>
                <h1>Customers</h1>
            </div>
        </div>
    );
}