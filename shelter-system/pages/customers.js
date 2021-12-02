import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Header.module.css';
import Image from 'next/image';


export default function customers({ customers }) {
    return (
        <div>
            <Head>
                <title>Customers</title>
            </Head>
            <Image
                classname={styles.landingImage}
                src="/../public/beachshowcase.jpg"
                layout="fill"
                objectFit="cover"
                position="absolute"
            />

            <Nav />

            <div className={styles.container}>
                <h1>Customers</h1>
                <ul>
                    {customers.map(customer =>
                        <h2>{`${customer.name}, ID: ${customer.id}`}</h2>
                    )}
                </ul>
            </div>
        </div>
    );
}


export async function getStaticProps(context) {
    const response = await fetch('http://server:8080/customerList');
    const customers = await response.json();
    return { props: { customers } }
}