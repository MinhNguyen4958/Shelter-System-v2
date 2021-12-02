import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';

export default function CustomerHome({ customers }) {

    return (
        <div className={styles.container}>
            <Nav />
            <h1>List of Customers</h1>
            <ul>
                {customers.map(customer => 
                    <h2>{`${customer.name}: ${customer.id}`}</h2>
                )}
            </ul>
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('http://server:8080/api/customerList');
    const customers = await response.json();
    return { props: { customers } }
}
