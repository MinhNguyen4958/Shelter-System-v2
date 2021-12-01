import Link from 'next/link';

import styles from '../styles/Nav.module.css';

// A navigation bar with link to homepage, add/delete and manage staff. List staff members that are
// currently registered
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
                    <Link href="/add-staff">
                        <a>Add</a>
                    </Link>
                </li>
                <li classname={styles.item}>
                    <Link href="/del-staff">
                        <a>Delete</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/mng-staff">
                        <a>Manage</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/get-staff">
                        <a>Find Staff</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}