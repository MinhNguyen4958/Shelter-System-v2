import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Head from 'next/head';
import Nav from '../components/customerNav';
import styles from '../styles/Header.module.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


export default function customers({ customers }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Customers</title>
            </Head>
            <Nav />

            <div className={styles.container}>
                <h1>Customers</h1>
            </div>
            
            {customers.map(customer =>
                <h2 key={customer.name}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    {`${customer.name}, ID: ${customer.id}`}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </h2>
            )}
        </div>
    );
}

export async function getStaticProps(context) {
    const response = await fetch('http://server:8080/customerList');
    const customers = await response.json();
    return { props: { customers } }
}