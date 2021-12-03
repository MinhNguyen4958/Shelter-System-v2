import { useState } from 'react';

import Head from 'next/head';

import Nav from '../components/customerNav';
import styles from '../styles/Home.module.css';
import hStyles from '../styles/Header.module.css';
import Image from 'next/image';



export default function deleteCustomer() {

    const delCustomer = async (e) => {
        e.preventDefault();
        let data = {
            deleteCustomerID: e.target.id.value
        }

      let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (!format.test(data.deleteCustomerID) && !isNaN(data.deleteCustomerID) && data.deleteCustomerID != 0) {
          const response = await fetch('/api/deleteCustomer', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json'}
          });

          const resp = await response.json();
          console.log(resp);

          // clear the fields
          e.target.id.value = "";
          
      } else {
          alert('Please try again');
      }
    }

    return (
        <div>
            <Head>
                <title>Delete a Customer</title>
            </Head>
            <Nav />

            {/* ID */}
            <div className={hStyles.container}>
                <h1>Delete a Customer</h1>
            </div>

            <div className={styles.container}>
                <form className={styles.form} onSubmit ={delCustomer}>
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
                            <button type="submit">Delete</button>
                    </div>

                </form>
            </div>
        </div>
    );
}