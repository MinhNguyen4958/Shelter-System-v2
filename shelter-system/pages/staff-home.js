import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Head from 'next/head';


// A post form that will add a new post
export default function staffHome({ staff }) {
    return (
        <div>
            <Image
                src="/../public/beachshowcase.jpg"
                layout="fill"
                objectFit="cover"
            />
            <Nav />
            <div className={styles.container}>
                <h1>Staff Members</h1>
                <ul>
                    {staff.map(employee =>
                        <h2 key={employee.name}>{`${employee.name}, ID: ${employee.id}`}</h2>
                    )}
                </ul>
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch('http://server:8080/employeeList');
    const staff = await response.json();
    return { props: { staff } }
}