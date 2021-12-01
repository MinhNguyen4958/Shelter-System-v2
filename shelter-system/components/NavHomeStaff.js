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
                    <Link href="/add-post">
                        <a>Add</a>
                    </Link>
                </li>
                <li classname={styles.item}>
                    <Link href="/delete-post">
                        <a>Delete</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/mng-post">
                        <a>Manage</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}