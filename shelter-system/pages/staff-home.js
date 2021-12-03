import { useState } from 'react';

import Nav from '../components/NavHomeStaff';
import Image from 'next/image';
import Head from 'next/head';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import styles from '../styles/Header.module.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


export default function staffHome({ staff }) {
    return (
        <div>

            <Nav />
            <div className={styles.container}>
                <h1>Staff Members</h1>
                <ul>
                    {staff.map(employee =>
                        <h2 key={employee.name}>
                            <Card>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            {`${employee.name}, ID: ${employee.id}`}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </h2>
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