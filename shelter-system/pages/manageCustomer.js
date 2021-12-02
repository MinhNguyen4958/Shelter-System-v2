import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Image from 'next/image';

export default function manageCustomer() {
    return (
        <div>
            <Head>
                <title>Manage Customer</title>
            </Head>
            <Image 
                    classname={styles.landingImage}
                    src="/../public/beachshowcase.jpg"
                    layout="fill"
                    objectFit="cover"
                    position="absolute"
                    />
            <Nav />

            {/* ID and Log */}
            <div className={hStyles.container}>
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