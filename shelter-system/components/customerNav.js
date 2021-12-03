import Link from 'next/link';

import styles from '../styles/Nav.module.css';

// A navigation bar with links to the home page and adding a post
export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/addCustomer">
                        <a>Add</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/manageCustomer">
                        <a>Manage</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/deleteCustomer">
                        <a>Delete</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/getCustomer">
                        <a>Get</a>
                    </Link>
                </li>
                
            </ul>
        </nav>
    );
}